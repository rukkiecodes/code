<template>
  <v-bottom-sheet
    scrollable
    hide-overlay
    max-width="350px"
    v-model="themeList.activateDialog"
  >
    <v-card>
      <v-toolbar dense flat color="#1E1E1E">
        <v-text-field
          dense
          flat
          full-width
          hide-details
          solo-inverted
          color="deep-purple accent-4"
          placeholder="Search color theme"
        ></v-text-field>
      </v-toolbar>
      <v-divider />
      <v-card-text style="height: 400px;" class="mx-0 px-0">
        <v-list class="py-0" dense>
          <v-subheader>Light themes</v-subheader>
          <v-list-item
            dense
            v-for="(theme, i) in editorTheme[0]"
            :key="i"
            @click="setEditorTheme(theme)"
            :class="{
              'deep-purple accent-4': themeList.codeThemeName == theme.name,
            }"
          >
            <v-list-item-title>{{ theme.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider class="my-5" />
        <v-list class="py-0" dense>
          <v-subheader>Dark themes</v-subheader>
          <v-list-item
            dense
            v-for="(theme, i) in editorTheme[1]"
            :key="i"
            @click="setEditorTheme(theme)"
            :class="{
              'deep-purple accent-4': themeList.codeThemeName == theme.name,
            }"
          >
            <v-list-item-title>{{ theme.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import { mapActions, mapState } from "vuex";
import editorTheme from "../../editor/editorTheme";
export default {
  data: () => ({
    sheet: true,
    editorTheme,
  }),
  mounted() {
    console.log(this.editorTheme[0]);
  },
  methods: {
    ...mapActions(["setEditorTheme"]),
  },
  computed: {
    ...mapState(["themeList"]),
  },
};
</script>
