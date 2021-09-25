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
  },
  created() {
    this.removeDrawerBorder();
  },
  mounted() {
    this.$nextTick(() => {
      this.removeDrawerBorder();
    });
  },
  computed: {
    ...mapState(["drawer"]),
  },
};
</script>
