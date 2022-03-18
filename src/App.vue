<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Mon exposition</v-toolbar-title>

      <v-spacer></v-spacer>
        Inscription
      <v-btn icon>
        <v-icon v-on:click="navigateToInscription">mdi-clipboard-account-outline </v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >

          <v-list-item v-for="item in items" :key="item.title" :to="item.route">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
        <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
      drawer: false,
      group: null,
      items: [
          {icon: 'mdi-home', title:'Accueil', route:'/'},
          {icon: 'mdi-information', title:'A propos', route:'/about'},
          {icon:'mdi-image-multiple', title:'Exposition', route:'/exposition'},
          {icon:'mdi-account-group', title:'Exposants', route:'/exposant'},
          {icon:'mdi-comment', title:'Livre d\'or', route:'/livredor'},
      ],
    }),

   methods : {
      navigateToInscription: function (){
        if (this.$route.path !== '/inscription')
          this.$router.push('/inscription');
      }
   },

    watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
