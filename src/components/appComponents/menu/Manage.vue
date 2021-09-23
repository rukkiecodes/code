<template>
  <v-menu top :offset-x="true" :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-sheet v-bind="attrs" v-on="on" color="transparent">
        <v-tooltip right color="#1c1e31">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon plain v-bind="attrs" v-on="on">
              <v-icon>mdi-cog-outline</v-icon>
            </v-btn>
          </template>
          <span class="text-caption">Manage</span>
        </v-tooltip>
      </v-sheet>
    </template>

    <v-card width="300">
      <v-list class="py-0" dense>
        <v-list-item @click="openThemeList" link dense>
          <v-list-item-title>Color Themes</v-list-item-title>
        </v-list-item>
        <v-list-item link dense>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
        <v-list-item link dense>
          <v-list-item-title>Keyboard Shortcuts</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(["openThemeList"])
  }
}
</script>