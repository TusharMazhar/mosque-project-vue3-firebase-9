<script setup>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="">
      <!-- <nav >
        <RouterLink to="/" class="nav">Home</RouterLink>
        <RouterLink to="/about" class="nav">About</RouterLink>
        <RouterLink to="/login" class="nav">Login</RouterLink>
      </nav> -->
  </header>

  <RouterView />
</template>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.header{
  background-color: red;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  text-align: center;
  margin: 0px;
  padding: 0px;
}
.nav{
  margin: 5px;
  text-decoration: none;
  color: white;
  font-size:30px;
}
</style>
