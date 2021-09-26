<template>
  <v-app id="paddi_app">
    <v-sheet height="100vh" class="overflow-hidden appSheet">
      <AppBar />
      <v-main>
        <router-view />
      </v-main>
    </v-sheet>
  </v-app>
</template>

<script>
import AppBar from "./components/appComponents/nav/AppBar.vue";
export default {
  name: "App",
  components: {
    AppBar,
  },
  mounted() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = "hidden";
  },
  destroyed() {
    let elHtml = document.getElementsByTagName("html")[0];
    elHtml.style.overflowY = null;
  },
};
</script>

<style>
@import url(./assets/icon/css/materialdesignicons.min.css);
::-webkit-scrollbar {
  width: 8px;
}

@media screen and (max-width: 600px) {
  ::-webkit-scrollbar {
    width: 0px;
  }
}

::-webkit-scrollbar-track {
  background: #121212;
}
::-webkit-scrollbar-thumb {
  background: #6200ea;
}
</style>
