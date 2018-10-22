<template>
    <div>{{language}}</div>
</template>

<script lang="ts">
import Vue from 'vue';

interface ILanguage {
  en: string;
}

export default Vue.extend({
  data() {
    let x: ILanguage = {
      en: 'English',
    };
    return {
      language: x.en as string,
    };
  },
});
</script>

