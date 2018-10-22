<template>
  <Page class="Page">
    <ActionBar title="🐕🐩🐕🐩🐕🐩🐕🐩🐕🐩🐕🐩🐕🐩" class="action-bar" />
    <ScrollView>
      <WrapLayout orientation="horizontal">
        <StackLayout v-for="dog in dogsList" :key="dog" class="card">
          <Image height="100%" width="48%" stretch="aspectFill" :src="dog" />
        </StackLayout>
      </WrapLayout>
    </ScrollView>
  </Page>
</template>

<script>
import service from "../shared/service.vue";

export default {
  mixins: [service],
  created () {
    this.loadDogs();
  }
};
</script>


<style scoped>
Page {
  background-color: #ffffff;
}
.action-bar {
  background-color: rgb(43, 147, 226);
  color: #c5cae9;
}
.card {
  margin: 5;
  color: white;
  border-radius: 5;
  height: 250;
}
</style>
