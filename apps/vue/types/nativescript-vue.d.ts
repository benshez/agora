declare module '*.native.vue' {
  import Vue from 'nativescript-vue';
  export default Vue;
}

// declare module 'nativescript-vue' {

//   import Vue from 'vue';

//   class NativeScriptVue extends Vue {
//     $start: () => void;
// 		/**
// 		 * Registers NativeScript Plugin.
// 		 * @param elementName Name of the element to use in your template
// 		 * @param resolver  function to register the element
// 		 */
//     static registerElement(elementName: string, resolver: Function, meta?: any): void;
//   }

//   export = NativeScriptVue;
// }

// Typings for NativeScript-Vue
// declare module 'nativescript-vue' {
//   // import vue.js typings
//   import Vue from 'vue';

//   // creat a nativescript vue class that extends vue.js
//   class NativeScriptVue extends Vue {
//     //$start: () => void;
// 		/**
// 		 * Registers NativeScript Plugin.
// 		 * @param elementName Name of the element to use in your template
// 		 * @param resolver  function to register the element
// 		 */
//     static registerElement(elementName: string, resolver: Function, meta?: any): void;
//   }

//   export = NativeScriptVue;
// }
