<template>
    <div class="w-36 h-52 items-center justify-center ml-5 text-center bg-background-gray mt-1 rounded-lg px-3 py-3">
        <img src="~@/assets/img/food2.png" class="w-28 h-24 " alt="" />
        <div class="">
            <p class="text-primary-black text-md">Tacos</p>
            <p class="text-secondary-black text-xs">Mexican Mortillo Tacos</p>
            <p class="text-primary-black font-semibold">cash</p>
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