<script setup>
import {useCommonStore} from '@/stores/common.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const commonStore = useCommonStore()

const modalOpenHandler = ()=>{
  router.push('/')
}
</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container">
    <h3 @click="router.push('/')" ><router-link to="/" class="nav-link title">হযরত শাহজালাল (র) জামে মসজিদ</router-link></h3>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ms-auto">
        <!-- <li class="nav-item active">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link" to="/donate">দান করুন</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/store-information">তথ্য জমা</router-link>
        </li>
        <li class="nav-item">
           <button @click="modalOpenHandler" class="btn btn-outline-success" type="submit">লগিন <span :style="{color:(commonStore.getDanBoxTotalAmountRemain+commonStore.getBuySellTotalAmountRemain+commonStore.getMasjidTotalImprovementAmountRemain)<0?'red':'black'}">( ৳{{commonStore.getDanBoxTotalAmountRemain+commonStore.getBuySellTotalAmountRemain+commonStore.getMasjidTotalImprovementAmountRemain}} )</span></button>
        </li>
      </ul>
    </div>
  </div>
</nav>

<header>

  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-image: url('https://cdn.pixabay.com/photo/2020/05/04/15/45/mosque-5129660__340.png');object-fit: contain">
        <div class="carousel-caption">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('https://browsecat.net/sites/default/files/jama-masjid%2C-delhi-wallpapers-81979-819216-6420079.png');object-fit: contain">
        <div class="carousel-caption">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('https://w0.peakpx.com/wallpaper/474/60/HD-wallpaper-jama-masjid-beautiful-mosque-background-tomb-historical-people.jpg');object-fit: contain">
        <div class="carousel-caption">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('https://wallpapercave.com/wp/wp2789163.jpg');object-fit: contain">
        <div class="carousel-caption">
          <h5>Forth slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</header>
</template>

<style scoped>
.carousel-item {
  height: 65vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.title{
  color: red
}
</style>