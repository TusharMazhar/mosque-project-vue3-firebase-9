<script setup>
import { useRouter} from 'vue-router'
const router = useRouter()

</script>
<template>
    <div>
         Sorry 
    </div>
    <div>
         <button @click="router.push('/')">Go Back Home</button>
    </div>
</template>