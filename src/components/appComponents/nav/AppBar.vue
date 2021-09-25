<template>
  <v-app-bar app flat dense clipped-left color="#1c1e31">
    <v-sheet
      class="d-flex justify-space-around align-center rounded-lg"
      color="transparent"
      height="90%"
    >
      <v-avatar size="40" rounded>
        <img src="../../../assets/logo.svg" alt="" />
      </v-avatar>
      <v-app-bar-title class="ml-3"
        ><span class="deep-purple--text text--accent-4">{</span> Code Block <span
          class="deep-purple--text text--accent-4"
          >}</span
        ></v-app-bar-title
      >
    </v-sheet>
    <v-spacer />
    <v-btn
      depressed
      class="rounded-lg text-capitalize"
      color="deep-purple accent-4"
      >Login</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
.f {
  background: #1c1e31;
}
</style>
