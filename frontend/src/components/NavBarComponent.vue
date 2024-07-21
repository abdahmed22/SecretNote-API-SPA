<script lang='ts' setup>
import { RouterLink } from "vue-router"
</script>

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
                <RouterLink to="/notes/new">NEEEW</RouterLink>
            </ul>
        </nav>
    </header>
</template>

<style lang='scss' scoped>
header {
  background-color: #000000;
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .icon {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 100px;
        max-height: 100px;
      }

      h1 {
        font-size: 30px;
        color: #ffffff
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 20px;
      list-style: none;

      a {
        text-decoration: none;
        color: #ffffff;
      }
    }
  }
}
</style>