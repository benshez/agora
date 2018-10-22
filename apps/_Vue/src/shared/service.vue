<template>
</template>

<script>
import axios from "axios";

export default {
   data () {
      return {
        dogsList: []
      }
    },
    methods: {
        loadDogs() {
            axios
              .get("https://dog.ceo/api/breeds/image/random/50")
              .then(response => {
                this.dogsList = response.data.message;
              })
              .catch(error => {
                console.log(error);
              });
          },
    }
}
</script>
