<template>
  <v-sheet :height="shertHeight" color="#121212" class="overflow-hidden">
    <Bar />
    <v-sheet color="#212337" height="100%" class="overflow-auto editorSheet">
      <v-sheet
        class="d-flex justify-center align-center"
        color="transparent"
        height="100%"
      >
        <v-avatar tile size="300" color="transparent">
          <v-img lazy-src="../../assets/logoBg.svg" src="../../assets/logoBg.svg" />
        </v-avatar>
      </v-sheet>
      <HTML v-show="false" />
      <CSS v-show="false" />
      <JS v-show="false" />
    </v-sheet>
  </v-sheet>
</template>

<script>
// @ts-nocheck
import Bar from "../appComponents/nav/Bar.vue";
import HTML from "./code/HTML.vue";
import CSS from "./code/CSS.vue";
import JS from "./code/JS.vue";
require(["emmet/emmet"], (data) => {
  window.emmet = data.emmet;
});
export default {
  data: () => ({}),
  components: {
    Bar,
    HTML,
    CSS,
    JS,
  },
  computed: {
    shertHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "93vh";
        case "sm":
          return "95.5vh";
        case "md":
          return "96.5vh";
        case "lg":
          return "93vh";
        case "xl":
          return "93vh";
      }
    },
  },
};
</script>
