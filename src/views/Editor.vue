<template>
  <v-app>
    <AppBar />
    <Drawer />
    <router-view />
  </v-app>
</template>

<script>
import Drawer from "../components/appComponents/nav/Drawer.vue";
import AppBar from "../components/appComponents/nav/AppBar.vue";
export default {
  components: {
    Drawer,
    AppBar,
  },
};
</script>
