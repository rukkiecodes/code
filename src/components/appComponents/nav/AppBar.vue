<template>
  <v-app-bar app flat dense clipped-left clipped-right color="#1c1e31">
    <v-app-bar-nav-icon
      @click="drawer.drawer = !drawer.drawer"
    ></v-app-bar-nav-icon>
    <v-sheet
      class="d-flex justify-space-around align-center rounded-lg"
      color="transparent"
      height="90%"
    >
      <v-avatar size="40" rounded>
        <img src="../../../assets/logo.svg" alt="" />
      </v-avatar>
      <v-app-bar-title class="ml-3 hidden-sm-and-down"
        ><span class="deep-purple--text text--accent-4">{</span> Code Block
        <span class="deep-purple--text text--accent-4">}</span></v-app-bar-title
      >
    </v-sheet>
    <v-spacer />
    <v-tooltip bottom color="#1c1e31">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          depressed
          @click="executeJSCode"
          class="text-capitalize"
          v-bind="attrs"
          v-on="on"
          color="deep-purple accent-4"
          >Run</v-btn
        >
      </template>
      <span class="text-caption">Crl+sift+enter</span>
    </v-tooltip>
    <v-btn
      @click="drawer.miniDrawer = !drawer.miniDrawer"
      tile
      icon
      plain
      depressed
      height="45"
    >
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  methods: {
    executeJSCode() {
      const javascriptCode = this.editor.javascriptCode;
      try {
        console.log(new Function(javascriptCode)());
      } catch (err) {
        console.error(err);
      }
    },
  },
  computed: {
    ...mapState(["drawer", "editor"]),
  },
};
</script>
