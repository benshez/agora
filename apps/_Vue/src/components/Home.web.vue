<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex xs6 sm4 md2 v-for="(dog, index) in dogsList" :key="index">
        <v-card>
          <v-img height="200px" :src="dog"></v-img>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="favorite(index)">
              <v-icon color="red">favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="blue">bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon color="purple">share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
