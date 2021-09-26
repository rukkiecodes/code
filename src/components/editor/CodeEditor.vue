<template>
  <v-sheet :height="sheetHeight" color="#121212" class="overflow-hidden">
    <Bar />
    <v-sheet color="#212337" :height="editorSheetHeight" class="overflow-auto editorSheet">
      <v-sheet
        height="100%"
        color="transparent"
        v-if="editor.showInitialBackground == true"
        class="d-flex justify-center align-center"
      >
        <v-avatar tile size="300" color="transparent">
          <v-img lazy-src="../../assets/logoBg.svg" src="../../assets/logoBg.svg" />
        </v-avatar>
      </v-sheet>
      <HTML v-if="editor.showHTML == true" />
      <CSS v-if="editor.showCSS == true" />
      <JS v-if="editor.showJS == true" />
    </v-sheet>
  </v-sheet>
</template>

<script>
// @ts-nocheck
import Bar from "../appComponents/nav/Bar.vue";
import HTML from "./code/HTML.vue";
import CSS from "./code/CSS.vue";
import JS from "./code/JS.vue";
import { mapState } from "vuex";
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
    ...mapState(["editor"]),
    sheetHeight() {
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
    editorSheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "88vh";
        case "sm":
          return "92.2vh";
        case "md":
          return "94vh";
        case "lg":
          return "88.4vh";
        case "xl":
          return "88.4vh";
      }
    },
  },
};
</script>
