<template>
  <v-responsive class="white--text">
    <v-container my-3>
      <v-layout align-center justify-center wrap>
        <v-flex shrink>
          About
        </v-flex>
      </v-layout>
    </v-container>
  </v-responsive>
</template>

<script lang="ts" scoped>
  import About from './AboutMixin';

  export default {
    name: 'WebAbout',
    mixins: [About]
  };
</script>
<style scoped>
</style>
