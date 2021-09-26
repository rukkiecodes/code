<template>
  <editor
    @init="editorInit"
    ref="jsEditor"
    lang="javascript"
    class="mt-0"
    v-model="editor.javascriptCode"
    :theme="themeList.codeThemeName || 'codeBlock'"
    :height="editorHeight"
    :options="{
      wrap: true,
      tabSize: 2,
      fontSize: '10pt',
      useSoftTabs: true,
      scrollPastEnd: true,
      animatedScroll: true,
      enableSnippets: true,
      showInvisibles: false,
      fadeFoldWidgets: true,
      showLineNumbers: true,
      cursorStyle: 'smooth',
      showGutter: showGutter,
      showPrintMargin: false,
      enableMultiselect: true,
      fontFamily: 'Victor mono',
      displayIndentGuides: true,
      autoScrollEditorIntoView: true,
      enableLiveAutocompletion: true,
      enableBasicAutocompletion: true,
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
    this.$nextTick(() => {
      this.getEditorTheme();
      const editorSheet = document.querySelector(".editorSheet");
      window.addEventListener("resize", () => {
        this.editorHeight = editorSheet.offsetHeight;
      });
      // console.log(this.$refs.jsEditor.editor)
    });
  },
  computed: {
    ...mapState(["themeList", "editor"]),
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
