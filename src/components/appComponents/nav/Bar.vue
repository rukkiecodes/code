<template>
  <v-system-bar
    height="30"
    class="px-0"
    :color="themeList.codeThemeColor || 'grey darken-4'"
  >
    <v-sheet
      v-if="false"
      height="100%"
      elevation="12"
      style="position: relative"
      @mouseenter="showCloseIcon = true"
      @mouseleave="showCloseIcon = false"
      class="d-flex justify-space-around align-center"
      :color="themeList.codeThemeColor || 'grey darken-4'"
    >
      <v-icon small class="ml-2" color="orange darken-4">mdi-language-html5</v-icon>
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
import { mapState } from "vuex";
export default {
  data: () => ({
    showCloseIcon: false,
  }),
  computed: {
    ...mapState(["themeList"]),
  },
};
</script>
