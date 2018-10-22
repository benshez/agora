<template>
  <v-app>
    <router-link to="/about" tag="span" style="cursor: pointer">
      about
    </router-link>
  </v-app>
</template>
<script lang="ts" scoped>
  import Home from './HomeMixin';

  export default {
    name: 'WebHome',
    mixins: [Home]
  };
</script>

