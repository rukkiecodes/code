<template>
  <v-bottom-sheet
    v-model="themeList.activateDialog"
    scrollable
    max-width="350px"
  >
    <v-card>
      <v-toolbar dense flat color="#292e46">
        <v-text-field
          dense
          flat
          full-width
          hide-details
          solo-inverted
          color="deep-purple accent-4"
          placeholder="Search color theme (hover to preview)"
        ></v-text-field>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text style="height: 400px;" class="mx-0 px-0">
        <v-list dense>
          <v-list-item v-for="(theme, i) in editorTheme" :key="i" dense link>
            <v-list-item-title>{{ theme.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </v-bottom-sheet>
</template>

<script>
import { mapState } from "vuex";
import editorTheme from "../../editor/editorTheme";
export default {
  data: () => ({
    sheet: true,
    editorTheme,
    dialogm1: "",
    dialog: false,
  }),
  computed: {
    ...mapState(["themeList"]),
  },
};
</script>
