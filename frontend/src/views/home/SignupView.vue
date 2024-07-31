<template>
  <main>
    <SignupFormComponent />
  </main>
</template>

<script lang="ts">
  import SignupFormComponent from '../../components/home/SignupFormComponent.vue'

  export default {

    name: 'SignupView',
    components : { 
      SignupFormComponent,     
    },
    setup () {

      return {
      }
    },
  }
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }
}
</style>