<template>
  <v-sheet :height="shertHeight" color="blue" class="overflow-hidden">
    <Bar />
    <v-sheet color="red" height="100%" class="overflow-auto editorSheet">
      <HTML />
    </v-sheet>
  </v-sheet>
</template>

<script>
// @ts-nocheck
import Bar from "../appComponents/nav/Bar.vue";
import HTML from "./code/HTML.vue";
require(["emmet/emmet"], (data) => {
  window.emmet = data.emmet;
});
export default {
  data: () => ({}),
  components: {
    Bar,
    HTML,
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
