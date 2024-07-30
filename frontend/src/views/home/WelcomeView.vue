<script lang='ts' setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <div id="home" class="home">
    <h1>Welcome to secret notes!</h1>
    <p>Create and securely share self-destructing secret notes.</p>
    <ul class="routes">
      <RouterLink to="/secret/notes/new">New Note</RouterLink>
      <RouterLink to="/secret/notes">All Notes</RouterLink>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.home {
  align-items: center;
  padding: 5rem 20rem;
  text-align: center;
  line-height: normal;
  h1 {
    font-size: 5rem;
  }
  p {
    padding: 5rem 5rem;
    font-size: 2.6rem;
  }
  .routes {
    display: flex;
    flex: 1;
    gap: 20rem;
    list-style: none;
    justify-content: center;
    a {
      text-decoration: none;
      color: #ffffff;
      border-radius: 0.75rem;
      background: #07bf9b;
      padding: 1rem 1rem;
      height: 4rem;
      width: 9rem;
      font-size: 2rem;
      text-align: center;
    }
  }
}

</style>