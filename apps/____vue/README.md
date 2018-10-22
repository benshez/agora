# Agora

## Usage

### Installing and Running
Here `<platform>` can be `android` or `ios`

``` bash
# Install dependencies
npm install
# -- or -- 
yarn 

# Build, watch for changes and run the application
tns run <platform> --bundle
```

### Debugging vs Production

During usual run, project runs with following settings -
1. Code is **not** minified
2. Vue.config.silent is false, so every component creation is logged

```bash
# Build, watch for changes and debug the application
tns debug <platform> --bundle
```

To minify code, and prevent Vue logs -

```bash
# Build for production
tns build <platform> --bundle --env.production

tns run <platform> --bundle --env.production
```