<template>
    <header>
        <nav class="container">
            <div class="icon">
                <img src="../assets/images/lock.jpg" alt="Secret Note Icon">
                <h1>Secret Notes</h1>
            </div>
            <ul class="nav-routes">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/login">Login</RouterLink>
                <RouterLink to="/logout">Logout</RouterLink>
                <RouterLink to="/signup">Signup</RouterLink>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
  import { RouterLink } from 'vue-router'

  export default {

    name: 'NavBarComponent',
    components: {
      RouterLink, 
    },
    setup () {

      return {
      }
    },
  }
</script>

<style lang='scss' scoped>
header {
  background-color: #000000;
  nav {
    display: flex;
    align-items: center;
    padding: 1rem 1rem;

    .icon {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        max-width: 10rem;
        max-height: 10rem;
      }

      h1 {
        font-size: 3rem;
        color: #ffffff
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 1rem;
      list-style: none;

      a {
        text-decoration: none;
        color: #ffffff;
      }
    }
  }
}
</style>