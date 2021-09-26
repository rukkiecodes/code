<template>
  <v-navigation-drawer
    dark
    app
    right
    clipped
    mini-variant
    id="miniDrawer"
    color="#1c1e31"
    mini-variant-width="50"
    v-model="drawer.miniDrawer"
  >
    <v-tooltip v-for="(button, i) in buttons" :key="i" right color="#1c1e31">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon block tile plain height="40" v-bind="attrs" v-on="on">
          <v-icon>{{ button.icon }}</v-icon>
        </v-btn>
      </template>
      <span class="text-caption">{{ button.title }}</span>
    </v-tooltip>
    <template v-slot:append>
      <div class="pa-2">
        <Manage />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
import Manage from "../menu/Manage.vue";
export default {
  data: () => ({
    buttons: [
      { title: "Explorer (Ctr+Shift+E)", icon: "mdi-file-multiple-outline" },
      { title: "Search Explorer (Ctr+Shift+E)", icon: "mdi-magnify" },
    ],
  }),
  components: {
    Manage,
  },
  methods: {
    removeDrawerBorder() {
      const navigationBorder = document.querySelectorAll(
        "#miniDrawer .v-navigation-drawer__border"
      );

      navigationBorder.forEach((element, i) => {
        element.style.display = "none";
      });
    },
    showMiniDrawer() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return (this.drawer.miniDrawer = false);
        case "sm":
          return (this.drawer.miniDrawer = false);
        case "md":
          return (this.drawer.miniDrawer = false);
        case "lg":
          return (this.drawer.miniDrawer = true);
        case "xl":
          return (this.drawer.miniDrawer = true);
      }
    },
  },
  created() {
    this.removeDrawerBorder();
    this.showMiniDrawer();
  },
  mounted() {
    this.$nextTick(() => {
      this.removeDrawerBorder();
      this.showMiniDrawer();
    });
  },
  computed: {
    ...mapState(["drawer"]),
  },
};
</script>
