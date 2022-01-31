<template>
    <div class="w-36 h-52 ml-5 text-center bg-background-gray mt-1 rounded-lg">
        <div class="flex justify-end"><i class="fas fa-heart text-secondary-black pt-2 pr-2"></i></div>
        <img src="~@/assets/img/food2.png" class="w-32 h-28 inline-flex" alt="" />
        <p class="text-primary-black text-md font-medium">Tacos</p>
        <p class="text-secondary-black text-xss font-medium">Mexican Mortillo Tacos</p>
        <p class="text-primary-black font-semibold mt-1">cash</p>
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