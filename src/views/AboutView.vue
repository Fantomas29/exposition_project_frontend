<template>
  <v-app>
      <H2 class="text-center mb-10">Nos images</H2>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        >
          <v-container>
            <v-card>
              <v-card-text>{{item.description}}</v-card-text>
            </v-card>
          </v-container>

        </v-carousel-item>
      </v-carousel>
  </v-app>
</template>

<script>
export default {
  name: "About",

  data: () => ({
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet.",
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            description: "textee",
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            description: "text dfdsz",
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            description: "text a la con",
          },
        ],
  }),

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