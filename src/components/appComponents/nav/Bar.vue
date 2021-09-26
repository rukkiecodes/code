<template>
  <v-system-bar
    height="30"
    class="px-0"
    :color="themeList.codeThemeColor || '#212337'"
  >
    <!-- HTML -->
    <v-sheet
      height="100%"
      elevation="12"
      v-if="editor.showHTML == true"
      @mouseenter="showCloseIcon = true"
      @mouseleave="showCloseIcon = false"
      style="position: relative; cursor: pointer;"
      class="d-flex justify-space-around align-center"
      :color="themeList.codeThemeColor || 'grey darken-4'"
    >
      <v-icon small class="ml-2" color="orange darken-4"
        >mdi-language-html5</v-icon
      >
      <span
        class="ml-2 text-captions"
        :class="{
          'grey--text text--darken-4':
            themeList.codeThemeName == 'chrome' ||
            themeList.codeThemeName == 'clouds' ||
            themeList.codeThemeName == 'crimson_editor' ||
            themeList.codeThemeName == 'dawn' ||
            themeList.codeThemeName == 'dreamweaver' ||
            themeList.codeThemeName == 'eclipse' ||
            themeList.codeThemeName == 'github' ||
            themeList.codeThemeName == 'iplastic' ||
            themeList.codeThemeName == 'katzenmilch' ||
            themeList.codeThemeName == 'kuroir' ||
            themeList.codeThemeName == 'solarized_light' ||
            themeList.codeThemeName == 'sqlserver' ||
            themeList.codeThemeName == 'textmate' ||
            themeList.codeThemeName == 'tomorrow',
        }"
        >index.html</span
      >
      <v-sheet
        v-ripple
        style="cursor: pointer"
        @click="closeHTMLEditor"
        :color="themeList.codeThemeColor"
        class="d-flex justify-center align-center text-center ma-0 pa-0 rounded-sm ml-3 mr-2"
      >
        <v-icon
          small
          v-show="showCloseIcon == true"
          class="ma-auto"
          :class="{
            'grey--text text--darken-4':
              themeList.codeThemeName == 'chrome' ||
              themeList.codeThemeName == 'clouds' ||
              themeList.codeThemeName == 'crimson_editor' ||
              themeList.codeThemeName == 'dawn' ||
              themeList.codeThemeName == 'dreamweaver' ||
              themeList.codeThemeName == 'eclipse' ||
              themeList.codeThemeName == 'github' ||
              themeList.codeThemeName == 'iplastic' ||
              themeList.codeThemeName == 'katzenmilch' ||
              themeList.codeThemeName == 'kuroir' ||
              themeList.codeThemeName == 'solarized_light' ||
              themeList.codeThemeName == 'sqlserver' ||
              themeList.codeThemeName == 'textmate' ||
              themeList.codeThemeName == 'tomorrow',
          }"
          >mdi-close</v-icon
        >
      </v-sheet>
      <v-sheet
        height="3"
        width="100%"
        color="deep-purple accent-4"
        v-show="editor.showHTML == true"
        style="position: absolute; bottom: 0; left: 0"
      ></v-sheet>
    </v-sheet>
    <!-- CSS -->
    <v-sheet
      height="100%"
      elevation="12"
      style="position: relative"
      v-if="editor.showCSS == true"
      @mouseenter="showCloseIcon = true"
      @mouseleave="showCloseIcon = false"
      class="d-flex justify-space-around align-center"
      :color="themeList.codeThemeColor || 'grey darken-4'"
    >
      <v-icon small class="ml-2" color="indigo"
        >mdi-language-css3</v-icon
      >
      <span
        class="ml-2 text-captions"
        :class="{
          'grey--text text--darken-4':
            themeList.codeThemeName == 'chrome' ||
            themeList.codeThemeName == 'clouds' ||
            themeList.codeThemeName == 'crimson_editor' ||
            themeList.codeThemeName == 'dawn' ||
            themeList.codeThemeName == 'dreamweaver' ||
            themeList.codeThemeName == 'eclipse' ||
            themeList.codeThemeName == 'github' ||
            themeList.codeThemeName == 'iplastic' ||
            themeList.codeThemeName == 'katzenmilch' ||
            themeList.codeThemeName == 'kuroir' ||
            themeList.codeThemeName == 'solarized_light' ||
            themeList.codeThemeName == 'sqlserver' ||
            themeList.codeThemeName == 'textmate' ||
            themeList.codeThemeName == 'tomorrow',
        }"
        >style.css</span
      >
      <v-sheet
        v-ripple
        style="cursor: pointer"
        @click="closeCSSEditor"
        :color="themeList.codeThemeColor"
        class="d-flex justify-center align-center text-center ma-0 pa-0 rounded-sm ml-3 mr-2"
      >
        <v-icon
          small
          v-show="showCloseIcon == true"
          class="ma-auto"
          :class="{
            'grey--text text--darken-4':
              themeList.codeThemeName == 'chrome' ||
              themeList.codeThemeName == 'clouds' ||
              themeList.codeThemeName == 'crimson_editor' ||
              themeList.codeThemeName == 'dawn' ||
              themeList.codeThemeName == 'dreamweaver' ||
              themeList.codeThemeName == 'eclipse' ||
              themeList.codeThemeName == 'github' ||
              themeList.codeThemeName == 'iplastic' ||
              themeList.codeThemeName == 'katzenmilch' ||
              themeList.codeThemeName == 'kuroir' ||
              themeList.codeThemeName == 'solarized_light' ||
              themeList.codeThemeName == 'sqlserver' ||
              themeList.codeThemeName == 'textmate' ||
              themeList.codeThemeName == 'tomorrow',
          }"
          >mdi-close</v-icon
        >
      </v-sheet>
      <v-sheet
        height="3"
        width="100%"
        color="deep-purple accent-4"
        v-show="editor.showCSS == true"
        style="position: absolute; bottom: 0; left: 0"
      ></v-sheet>
    </v-sheet>
    <!-- JAVASCRIPT -->
    <v-sheet
      height="100%"
      elevation="12"
      style="position: relative"
      v-if="editor.showJS == true"
      @mouseenter="showCloseIcon = true"
      @mouseleave="showCloseIcon = false"
      class="d-flex justify-space-around align-center"
      :color="themeList.codeThemeColor || 'grey darken-4'"
    >
      <v-icon small class="ml-2" color="yellow"
        >mdi-language-javascript</v-icon
      >
      <span
        class="ml-2 text-captions"
        :class="{
          'grey--text text--darken-4':
            themeList.codeThemeName == 'chrome' ||
            themeList.codeThemeName == 'clouds' ||
            themeList.codeThemeName == 'crimson_editor' ||
            themeList.codeThemeName == 'dawn' ||
            themeList.codeThemeName == 'dreamweaver' ||
            themeList.codeThemeName == 'eclipse' ||
            themeList.codeThemeName == 'github' ||
            themeList.codeThemeName == 'iplastic' ||
            themeList.codeThemeName == 'katzenmilch' ||
            themeList.codeThemeName == 'kuroir' ||
            themeList.codeThemeName == 'solarized_light' ||
            themeList.codeThemeName == 'sqlserver' ||
            themeList.codeThemeName == 'textmate' ||
            themeList.codeThemeName == 'tomorrow',
        }"
        >script.js</span
      >
      <v-sheet
        v-ripple
        style="cursor: pointer"
        @click="closeJSEditor"
        :color="themeList.codeThemeColor"
        class="d-flex justify-center align-center text-center ma-0 pa-0 rounded-sm ml-3 mr-2"
      >
        <v-icon
          small
          v-show="showCloseIcon == true"
          class="ma-auto"
          :class="{
            'grey--text text--darken-4':
              themeList.codeThemeName == 'chrome' ||
              themeList.codeThemeName == 'clouds' ||
              themeList.codeThemeName == 'crimson_editor' ||
              themeList.codeThemeName == 'dawn' ||
              themeList.codeThemeName == 'dreamweaver' ||
              themeList.codeThemeName == 'eclipse' ||
              themeList.codeThemeName == 'github' ||
              themeList.codeThemeName == 'iplastic' ||
              themeList.codeThemeName == 'katzenmilch' ||
              themeList.codeThemeName == 'kuroir' ||
              themeList.codeThemeName == 'solarized_light' ||
              themeList.codeThemeName == 'sqlserver' ||
              themeList.codeThemeName == 'textmate' ||
              themeList.codeThemeName == 'tomorrow',
          }"
          >mdi-close</v-icon
        >
      </v-sheet>
      <v-sheet
        height="3"
        width="100%"
        color="deep-purple accent-4"
        style="position: absolute; bottom: 0; left: 0"
      ></v-sheet>
    </v-sheet>
  </v-system-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    showCloseIcon: false,
  }),
  methods: {
    ...mapActions(["closeHTMLEditor", "closeCSSEditor", "closeJSEditor"])
  },
  computed: {
    ...mapState(["themeList", "editor"]),
  },
};
</script>
