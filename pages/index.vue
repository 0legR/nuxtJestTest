<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-icon
        large
        color="orange darken-2"
      >
        {{`mdi-${iconImg}`}}
      </v-icon>
    </v-col>
    <v-col cols="12" sm="8" md="6">
      <v-btn @click="isDefault = !isDefault">submit</v-btn>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data() {
      return {
        antena: 'arrow-up-bold-box-outline',
        message: 'call-split',
        isDefault: true
      }
    },
    computed: {
      iconImg() {
        return this.isDefault ? this.antena : this.message
      }
    }
  }
</script>