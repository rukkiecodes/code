<template>
  <v-system-bar height="30" color="grey darken-4" class="px-0">
    <v-sheet
      v-ripple
      height="100%"
      color="grey darken-3"
      style="position: relative"
      class="d-flex justify-space-around align-center"
    >
      <v-icon small class="ml-2" color="green">mdi-vuejs</v-icon>
      <span class="ml-2">App.js</span>
      <v-icon small right>mdi-close</v-icon>
      <v-sheet
        height="2"
        width="100%"
        color="deep-purple accent-4"
        style="position: absolute; bottom: 0; left: 0"
      ></v-sheet>
    </v-sheet>
  </v-system-bar>
</template>

<script>
export default {};
</script>
