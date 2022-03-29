<template>
  <v-app v-if="!isFetching">
      <H2 class="text-center mb-10">Expositions</H2>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in expositions"
          :key="i"
          :src="getImage(item.oeuvre_img)"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-container>
            <v-card>
              <v-card-text>{{item.oeuvre_description}}</v-card-text>
            </v-card>
          </v-container>

        </v-carousel-item>
      </v-carousel>
  </v-app>
</template>

<script>
import axios from "axios";

export default {
  name: "Exposition",

  data: () => ({
      expositions: [],
      isFetching: true,
  }),
  methods: {
    getImage(img) {
      return require("../assets/" + img)
    }
  },
  mounted() {
    axios
      .get('http://localhost:8000/index.php/exposition/list?limit=20')
      .then(response =>{
        this.expositions = response.data
        this.isFetching = false
      })
  },

};
</script>

<style>
/*
  .v-application--wrap {
    min-height: 0vh !important;
  }
  .theme--light.v-application {
    background: none !important;
    color: red !important;
  }
*/
</style>