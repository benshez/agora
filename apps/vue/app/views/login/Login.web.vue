<template>

  <keep-alive>
    <component v-bind:is="component"></component>
  </keep-alive>

</template>

<script lang="ts">
  import { mapState } from 'vuex';
  import Login from './LoginMixin';

  export default {
    name: 'WebLogin',
    mixins: [Login]
  };
</script>
<style lang="scss" scoped>
</style>
