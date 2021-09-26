<template>
  <v-card class="ma-0 pa-0" width="100%" tile flat color="transparent">
    <v-list dense class="py-0" color="transparent">
      <v-list-group
        sub-group
        :value="true"
        color="grey lighten-2"
        prepend-icon="mdi-chevron-down"
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Code</v-list-item-title>
          </v-list-item-content>
        </template>
        <!-- HTML -->
        <v-list-item
          @click="showHTMLEditor"
          link
          :class="{ activeCode: editor.showHTML == true }"
        >
          <v-list-item-icon>
            <v-icon small color="orange darken-4">mdi-language-html5</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="ml-n3">index.html</v-list-item-title>
        </v-list-item>
        <!-- CSS -->
        <v-list-item @click="showCSSEditor" link :class="{ activeCode: editor.showCSS == true }">
          <v-list-item-icon>
            <v-icon small color="indigo">mdi-language-css3</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="ml-n3">style.css</v-list-item-title>
        </v-list-item>
        <!-- JS -->
        <v-list-item @click="showJSEditor" link :class="{ activeCode: editor.showJS == true }">
          <v-list-item-icon>
            <v-icon small color="yellow">mdi-language-javascript</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="ml-n3">script.js</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data: () => ({}),
  methods: {
    ...mapActions(["showHTMLEditor", "showCSSEditor", "showJSEditor"]),
  },
  computed: {
    ...mapState(["editor"]),
  },
};
</script>

<style scoped>
.activeCode {
  background: #292e46;
}
</style>
