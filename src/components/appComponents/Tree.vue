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
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item link class="activeCode">
          <v-list-item-icon>
            <v-icon small color="green">mdi-vuejs</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Title.vue</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.activeCode {
  background: #292e46;
}
</style>
