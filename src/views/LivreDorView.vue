<template>
  <div class="about">
    <h1>Livre d'or</h1>

    <v-container v-for="item in visiblePages" :key="item.id" class="mb-5 mt-5">
      <v-card
        elevation="2"
        outlined
        shaped
      >
        <v-card-title>
          <span class="text-h6 font-weight-light">{{ item.visit_nom }} {{ item.visit_prenom }}</span>
        </v-card-title>
        <v-card-subtitle>
          <span>{{ item.com_date_heure }}</span>
        </v-card-subtitle>
        <v-card-text class="text-h5 font-weight-bold">
          {{ item.com_texte }}
        </v-card-text>
      </v-card>
    </v-container>
    <v-pagination
        v-model="page"
        :length="Math.ceil(comments.length/perPage)"
        circle
      ></v-pagination>

  </div>
</template>

<script>

import axios from "axios";

export default {
  name: "LivreDor",

  data: () => ({
    comments: [],
    page: 1,
    perPage: 3,
  }),

  mounted() {
    axios
      .get('http://localhost:8000/index.php/comment/list?limit=20')
      .then(response =>{
        this.comments = response.data
        console.log(this.comments)
      })
  },
  computed: {
    // => https://stackoverflow.com/questions/58436674/how-to-set-vuetify-pagination-on-list
    visiblePages () {
      return this.comments.slice((this.page - 1)* this.perPage, this.page* this.perPage)
    }
  }

};
</script>