<template>
  <v-navigation-drawer
    dark
    permanent
    mini-variant
    color="#1c1e31"
    mini-variant-width="100%"
  >
    <v-tooltip v-for="(button, i) in buttons" :key="i" right color="#1c1e31">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon block tile plain height="40" v-bind="attrs" v-on="on">
          <v-icon>{{ button.icon }}</v-icon>
        </v-btn>
      </template>
      <span class="text-caption">{{ button.title }}</span>
    </v-tooltip>
    <template v-slot:append>
      <div class="pa-2">
        <Manage />
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import Manage from "../menu/Manage.vue";
export default {
  data: () => ({
    buttons: [
      { title: "Explorer (Ctr+Shift+E)", icon: "mdi-file-multiple-outline" },
      { title: "Search Explorer (Ctr+Shift+E)", icon: "mdi-magnify" },
    ],
  }),
  components: {
    Manage,
  },
};
</script>
