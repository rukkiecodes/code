<template>
  <v-navigation-drawer
    app
    clipped
    id="drawer"
    width="250"
    color="#1C1E31"
    v-model="drawer.drawer"
  >
    <Tree />
  </v-navigation-drawer>
</template>

<script>
import Tree from "../Tree.vue";
import { mapState } from "vuex";
export default {
  components: {
    Tree,
  },
  methods: {
    removeDrawerBorder() {
      const navigationBorder = document.querySelectorAll(
        "#drawer .v-navigation-drawer__border"
      );

      navigationBorder.forEach((element, i) => {
        element.style.display = "none";
      });
    },

    showDrawer() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return (this.drawer.drawer = false);
        case "sm":
          return (this.drawer.drawer = false);
        case "md":
          return (this.drawer.drawer = false);
        case "lg":
          return (this.drawer.drawer = true);
        case "xl":
          return (this.drawer.drawer = true);
      }
    },
  },
  created() {
    this.removeDrawerBorder();
    this.showDrawer();
  },
  mounted() {
    this.$nextTick(() => {
      this.removeDrawerBorder();
      this.showDrawer();
    });
  },
  computed: {
    ...mapState(["drawer"]),
  },
};
</script>
