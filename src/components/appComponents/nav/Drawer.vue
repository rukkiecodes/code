<template>
  <v-navigation-drawer clipped width="300" color="#212337" app id="drawer">
    <v-row class="fill-height" no-gutters>
      <v-col cols="2">
        <MiniDrawer />
      </v-col>
      <v-col cols="10">
        <Tree />
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import MiniDrawer from "./MiniDrawer.vue";
import Tree from "../Tree.vue";
export default {
  data: () => ({
    links: ["Home", "Contacts", "Settings"],
  }),
  components: {
    MiniDrawer,
    Tree,
  },
  mounted() {
    this.$nextTick(() => {
      const navigationBorder = document.querySelectorAll(
        "#drawer .v-navigation-drawer__border"
      );

      navigationBorder.forEach((element, i) => {
        element.style.display = "none";
      });
    });
  },
};
</script>

<style scoped>
/* * {
  border-color: transparent !important;
} */
</style>
