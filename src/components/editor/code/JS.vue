<template>
  <editor
    @init="editorInit"
    lang="javascript"
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
</template>

<script>
// @ts-nocheck
import editor from "vue2-ace-editor";
import editorTheme from "../editorTheme";
import init from "../editorInit";
import { mapActions, mapState } from "vuex";
require(["emmet/emmet"], (data) => {
  window.emmet = data.emmet;
});
export default {
  data: () => ({
    editorTheme,
    editorHeight: null,
  }),
  components: {
    editor,
  },
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
