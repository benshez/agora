<template>
  <div>{{ msg }}</div>
</template>

<script >
  import Vue from "vue";
  export default Vue.extend({
    data() {
      return {
        msg: "Hello from vue"
      };
    }
  });
</script>