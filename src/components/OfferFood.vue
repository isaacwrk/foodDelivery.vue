<template>
    <div class="w-36 h-52 items-center justify-center ml-5 text-center bg-background-gray mt-1 rounded-lg px-3 py-2">
        <img src="~@/assets/img/food2.png" class="w-32 h-28 mt-1" alt="" />
        <div class="">
            <p class="text-primary-black text-md font-medium">Tacos</p>
            <p class="text-secondary-black text-xss font-medium">Mexican Mortillo Tacos</p>
            <p class="text-primary-black font-semibold mt-1">cash</p>
        </div>
        
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const OfferFood = defineComponent({
    props:{
        title:{
            type:String,
            required:true
        }
    }
});

export default OfferFood;
</script>

<style>

</style>