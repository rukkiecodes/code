<template>
  <v-sheet height="93vh" color="#121212" class="overflow-hidden">
    <Bar />
    <v-sheet color="#121212" height="88.6vh" class="overflow-auto editorSheet">
      <editor
        v-model="rawHTML"
        @init="editorInit"
        lang="html"
        class="mt-0 emailEditor"
        :theme="themeList.codeThemeName || 'codeBlock'"
        :height="editorHeight"
        :options="{
          fontSize: 15,
          showPrintMargin: false,
          wrap: true,
          tabSize: 2,
          useSoftTabs: true,
          showInvisibles: false,
          showGutter: showGutter,
          showLineNumbers: true,
          fadeFoldWidgets: true,
        }"
      ></editor>
    </v-sheet>
  </v-sheet>
</template>

<script>
// @ts-nocheck
import Bar from "../appComponents/nav/Bar.vue";
import editorTheme from "./editorTheme";
import init from "./editorInit";
import { mapActions, mapState } from "vuex";
require(["emmet/emmet"], (data) => {
  window.emmet = data.emmet;
});
export default {
  components: {
    editor: require("vue2-ace-editor"),
    Bar,
  },
  data: () => ({
    editorTheme,
    defaultFontSize: localStorage.getItem("railerEditorFontSize"),
    rawHTML: ``,
    editorHeight: null,
  }),
  methods: {
    ...mapActions(["getEditorTheme"]),
    editorInit() {
      init();
    },
  },
  updated() {
    this.getEditorTheme();
  },
  mounted() {
    this.getEditorTheme();
    this.$nextTick(() => {
      const editorSheet = document.querySelector(".editorSheet");
      window.addEventListener("resize", () => {
        this.editorHeight = editorSheet.offsetHeight;
      });

      console.log(this.themeList.codeThemeName);
    });
  },
  computed: {
    ...mapState(["themeList"]),
    showGutter() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return false;
        case "sm":
          return true;
        case "md":
          return true;
        case "lg":
          return true;
        case "xl":
          return true;
      }
    },
  },
};
</script>
