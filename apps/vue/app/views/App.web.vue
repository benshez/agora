<template>
  <v-fade-transition appear>
    <router-view />
  </v-fade-transition>
</template>

<script lang="ts" scoped>
  export default {
    name: 'app',
    components: {}
  };
</script>

<style lang="scss">
// html {
//   height: 100%;
//   font-size: 1em;
// }

// body {
//   font-family: $font-stack !important;
//   margin: 0;
//   height: 100%;

//   .content {
//     font-family: $font-stack !important;
//     color: rgba(0, 0, 0, 0.87);
//     font-size: 1rem;
//   }
// }
</style>
