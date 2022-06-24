<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
   <header>
      <Navbar />
   </header>

   <main>
      <RouterView />
   </main>

   <footer>
     <Footer />
   </footer>


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
