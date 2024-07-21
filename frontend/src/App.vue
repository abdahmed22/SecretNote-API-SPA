<script setup lang="ts">
import { RouterView } from 'vue-router'
import navigationBarVue from './components/navigation-bar.vue'
</script>

<template>
  <navigationBarVue />
  <RouterView />
</template>

<style lang='scss'>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap');

* {
  font-family: "Rubik", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
