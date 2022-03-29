<template>

  <v-container>
    <v-card class="cardColor" max-width="400">
      <v-card-title>
          <span class="white-text">L'espace</span>
        </v-card-title>
        <v-card-text class="text-h5 font-weight-bold">
          <span class="white-text">L'univers qui s'étend sous vos yeux</span>
        </v-card-text>
    </v-card>

    <v-card class="cardColor">

    </v-card>

    <v-container>
      <v-card class="cardColor actu" v-for="item in actus" :key="item.id">
        <v-card-title>
            <span class="text-h6 font-weight-light white-text">{{ item.new_titre }}</span>
          </v-card-title>
          <v-card-subtitle>
            <span class="white-text">{{ item.usr_pseudo }} - {{ item.new_date_publication }}</span>
          </v-card-subtitle>
          <v-card-text class="text-h5 font-weight-bold">
            <span class="white-text"> {{ item.new_texte }} </span>
          </v-card-text>
      </v-card>
    </v-container>

    <v-card class="cardColor description" max-width="400">
      <v-card-title>
          <span>L'espace</span>
        </v-card-title>
        <v-card-text class="text-h5 font-weight-bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
          Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
          Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
          Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper.
          Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
          Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.
          Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh.
          Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.
        </v-card-text>
    </v-card>
  </v-container>

</template>

<script>

import axios from "axios";

export default {
  name: "Home",

  data: () => ({
    actus: [],
  }),

  mounted() {
    axios
      .get('http://localhost:8000/index.php/actu/list?limit=20')
      .then(response =>{
        this.actus = response.data
      })
  },

  components: {

  },
};
</script>

<style>
.cardColor {
   background-color: rgba(28, 26, 26, 0.5) !important;
   border-color: white !important;
 }
.description{
  visibility: hidden;
  position: relative;
  top: 5em;
  left: 40em;
}
.actu{
  margin-top: 2em;
}
.white-text{
  color: white!important;
}
</style>