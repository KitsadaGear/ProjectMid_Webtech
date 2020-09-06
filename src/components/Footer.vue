<template>

<v-card height="150">
    <v-footer
      absolute
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-footer>
  </v-card>

</template>

<script>
export default {};
</script>

<style>
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  padding: 20px;
}

.footer p {
  margin: 0;
}
</style>
