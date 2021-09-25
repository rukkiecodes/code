<template>
  <v-navigation-drawer clipped width="300" color="#212337" app id="drawer">
    <v-row class="fill-height" no-gutters>
      <v-col cols="2">
        <MiniDrawer />
      </v-col>
      <v-col cols="10">
        <v-row no-gutters>
          <v-col cols="12">
            <v-system-bar color="transparent">
              <v-tooltip bottom color="#1c1e31">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon x-small plain class="mr-3" v-bind="attrs" v-on="on">
                    <v-icon class="mx-auto">mdi-file-plus-outline</v-icon>
                  </v-btn>
                </template>
                <span class="text-caption">New File</span>
              </v-tooltip>
              <v-tooltip bottom color="#1c1e31">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon x-small plain v-bind="attrs" v-on="on">
                    <v-icon class="mx-auto">mdi-folder-refresh-outline</v-icon>
                  </v-btn>
                </template>
                <span class="text-caption">Reset projects</span>
              </v-tooltip>
            </v-system-bar>
          </v-col>
        </v-row>
        <Tree />
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import MiniDrawer from "./MiniDrawer.vue";
import Tree from "../Tree.vue";
export default {
  components: {
    MiniDrawer,
    Tree,
  },
  methods: {
    removeDrawerBorder() {
      const navigationBorder = document.querySelectorAll(
        "#drawer .v-navigation-drawer__border"
      );

      navigationBorder.forEach((element, i) => {
        element.style.display = "none";
      });
    },
  },
  created() {
    this.removeDrawerBorder();
  },
  mounted() {
    this.$nextTick(() => {
      this.removeDrawerBorder();
    });
  },
};
</script>
