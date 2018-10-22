const { relative, resolve, sep } = require('path');

const webpack = require('webpack');
const { platformNative, platformsNative, Utilities } = require('./build/utils');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const NsVueTemplateCompiler = require('nativescript-vue-template-compiler');

const nsWebpack = require('nativescript-dev-webpack');
const nativescriptTarget = require('nativescript-dev-webpack/nativescript-target');
const {
  NativeScriptWorkerPlugin
} = require('nativescript-worker-loader/NativeScriptWorkerPlugin');

module.exports = env => {
  // Add your custom Activities, Services and other android app components here.
  const appComponents = [
    'tns-core-modules/ui/frame',
    'tns-core-modules/ui/frame/activity'
  ];

  //const platform = env && ((env.android && 'android') || (env.ios && 'ios'));
  const platform = platformNative(env);

  if (!platform) {
    throw new Error('You need to provide a target platform!');
  }

  const utils = new Utilities(platform);

  const platforms = platformsNative();
  const projectRoot = __dirname;

  // Default destination inside platforms/<platform>/...
  const dist = resolve(
    projectRoot,
    nsWebpack.getAppPath(platform, projectRoot)
  );

  const {
    // The 'appPath' and 'appResourcesPath' values are fetched from
    // the nsconfig.json configuration file
    // when bundling with `tns run android|ios --bundle`.
    appPath = 'app',
    appResourcesPath = 'app/App_Resources',

    // You can provide the following flags when running 'tns run android|ios'
    snapshot, // --env.snapshot
    production, // --env.production
    report, // --env.report
    hmr // --env.hmr
  } = env;

  const mode = production ? 'production' : 'development';

  const appFullPath = resolve(projectRoot, appPath);
  const appResourcesFullPath = resolve(projectRoot, appResourcesPath);

  const entryModule = nsWebpack.getEntryModule(appFullPath);
  const entryPath = `.${sep}${entryModule}.ts`;

  utils.report('info', `Starting ${mode} build process for ${platform}`);

  const config = {
    mode: mode,
    context: appFullPath,
    watchOptions: {
      ignored: [
        appResourcesFullPath,
        // Don't watch hidden files
        '**/.*'
      ]
    },
    target: nativescriptTarget,
    // target: nativeScriptVueTarget,
    entry: {
      bundle: entryPath
    },
    output: {
      pathinfo: false,
      path: dist,
      libraryTarget: 'commonjs2',
      filename: '[name].js',
      globalObject: 'global'
    },
    resolve: {
      extensions: utils.getExtensions(), //['.vue', '.js', '.scss', '.css'],
      // Resolve {N} system modules from tns-core-modules
      modules: [
        resolve(__dirname, 'node_modules/tns-core-modules'),
        resolve(__dirname, 'node_modules'),
        'node_modules/tns-core-modules',
        'node_modules'
      ],
      alias: {
        '~': appFullPath,
        assets: resolve(appFullPath, 'assets'),
        components: resolve(appFullPath, 'components'),
        views: resolve(appFullPath, 'views'),
        modules: resolve(appFullPath, 'modules'),
        vue: 'vue'
      },
      // don't resolve symlinks to symlinked modules
      symlinks: false
    },
    resolveLoader: {
      // don't resolve symlinks to symlinked loaders
      symlinks: false
    },
    node: {
      // Disable node shims that conflict with NativeScript
      http: false,
      timers: false,
      setImmediate: false,
      fs: 'empty',
      __dirname: false
    },
    devtool: 'none',
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: module => {
              const moduleName = module.nameForCondition
                ? module.nameForCondition()
                : '';
              return (
                /[\\/]node_modules[\\/]/.test(moduleName) ||
                appComponents.some(comp => comp === moduleName)
              );
            },
            enforce: true
          }
        }
      },
      minimize: Boolean(production),
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            parallel: true,
            cache: true,
            output: {
              comments: false
            },
            compress: {
              // The Android SBG has problems parsing the output
              // when these options are enabled
              collapse_vars: platform !== 'android',
              sequences: platform !== 'android'
            }
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: new RegExp(entryPath),
          use: [
            // Require all Android app components
            platform === 'android' && {
              loader: 'nativescript-dev-webpack/android-app-components-loader',
              options: { modules: appComponents }
            },

            {
              loader: 'nativescript-dev-webpack/bundle-config-loader',
              options: {
                registerPages: true, // applicable only for non-angular apps
                loadCss: !snapshot // load the application css if in debug mode
              }
            }
          ].filter(loader => Boolean(loader))
        },

        // TODO: Removed the rule once https://github.com/vuejs/vue-hot-reload-api/pull/70 is accepted
        {
          test: resolve(
            __dirname,
            'node_modules/vue-hot-reload-api/dist/index.js'
          ),
          use: '../vue-hot-reload-api-patcher'
        },

        {
          test: /\.css$/,
          use: utils.getLoaders().css
        },
        {
          test: /\.scss$/,
          use: utils.getLoaders().scss
        },
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: utils.getLoaders().css,
              scss: utils.getLoaders().scss,
              ts: utils.getLoaders().ts
            }
          }
        },
        {
          test: /\.ts?$/,
          use: utils.getLoaders().ts
        }
      ]
    },
    plugins: [
      // ... Vue Loader plugin omitted
      new MiniCssExtractPlugin({
        filename: 'app.css'
      }),
      // make sure to include the plugin!
      new VueLoaderPlugin(),
      // Define useful constants like TNS_WEBPACK
      new webpack.DefinePlugin(utils.globalVariables()),
      // Remove all files from the out dir.
      new CleanWebpackPlugin([`${dist}/**/*`]),
      // Copy native app resources to out dir.
      new CopyWebpackPlugin([
        {
          from: `${appResourcesFullPath}/${utils.getResourcePlatformDirectory()}`,
          to: `${dist}/App_Resources/${utils.getResourcePlatformDirectory()}`,
          context: projectRoot
        }
      ]),
      // Copy assets to out dir. Add your own globs as needed.
      new CopyWebpackPlugin(
        [
          { from: 'fonts/**' },
          { from: '**/*.+(jpg|png)' },
          { from: 'assets/**/*' }
        ],
        { ignore: [`${relative(appPath, appResourcesFullPath)}/**`] }
      ),
      // Generate a bundle starter script and activate it in package.json
      new nsWebpack.GenerateBundleStarterPlugin(['./vendor', './bundle']),
      // For instructions on how to set up workers with webpack
      // check out https://github.com/nativescript/worker-loader
      new NativeScriptWorkerPlugin(),
      new nsWebpack.PlatformFSPlugin({
        platform,
        platforms
      }),
      // Does IPC communication with the {N} CLI to notify events when running in watch mode.
      new nsWebpack.WatchStateLoggerPlugin()
    ]
  };

  if (report) {
    // Generate report files for bundles content
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        generateStatsFile: true,
        reportFilename: resolve(projectRoot, 'report', 'report.html'),
        statsFilename: resolve(projectRoot, 'report', 'stats.json')
      })
    );
  }

  if (snapshot) {
    config.plugins.push(
      new nsWebpack.NativeScriptSnapshotPlugin({
        chunk: 'vendor',
        requireModules: ['tns-core-modules/bundle-entry-points'],
        projectRoot,
        webpackConfig: config
      })
    );
  }

  if (hmr) {
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return config;
};
