<template>
  <v-app>
    <AppBar />
    <Drawer />
    <ThemeList />
    <router-view />
  </v-app>
</template>

<script>
import Drawer from "../components/appComponents/nav/Drawer.vue";
import AppBar from "../components/appComponents/nav/AppBar.vue";
import ThemeList from "../components/appComponents/dialogs/ThemeList.vue"
export default {
  components: {
    Drawer,
    AppBar,
    ThemeList
  },
};
</script>
