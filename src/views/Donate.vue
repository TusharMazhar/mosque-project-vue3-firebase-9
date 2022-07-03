<script setup>  
import {useRouter}  from 'vue-router'
const router = useRouter()
</script>
<template>
    <div class="main"> 
        <h3 class="pa-5 mb-5"> দান করুন </h3>
        <div class="row m-2"> 
            <div class="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
               <h5>ব্যাংক একাউন্ট</h5>
               <div class="m-1 p-3 div1">  
                  <p> ব্যাংকের নাম   :  ইসলামি ব্যাংক বাংলাদেশ</p>
                  <p> একাউন্ট নাম্বার  : ০৫৮৬৭৯৪৬৯৩০৪৫৭ </p>
                  <p> ব্রাঞ্চ নাম      : চুনারুঘাট, হবিগঞ্জ</p>
               </div>
            
             </div>
             <div class="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2"> | </div>
            <div class="col-12 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5"> 
               <h5>বিকাশ একাউন্ট</h5>
               <div class="m-1 p-3 div2">  
                  <p> বিকাশ একাউন্টের নাম : সফিক তালুকদার</p>
                  <p> বিকাশ নাম্বার         :  ০১৭৪৩০০৭৩৪০ </p>
               </div>
            </div>
        </div>
    </div>
    <div class="row ftr"> 
        <h4>টাকা যেকোনো একাউন্টে প্রেরণ করে,পাশের বাটনে ক্লিক করে ফর্মটি পুরুন করুন <button @click="router.push({name: 'StoreInformation'})" type="button" class="btn btn-lg btn-primary">ফর্ম </button></h4>
    </div>
</template>

<style scoped>
.main{
    box-sizing: border-box;
    margin: 5px;
    padding:10px;
    text-align: center;
    background-color: black;
    margin-top:5px;
    margin-bottom:5px;
    color:white
}

.div1{
    border:2px solid red;
    background-color: white;
    color: red;
    height: 230px;
}
.div2{
    border:2px solid red;
    background-color: white;
    color: red;
    height: 230px;
}
.ftr{
    background-color: red;
    color: white;
    padding: 5px;
    text-align: center;
}
</style>