<template>
    <div class="w-36 h-52 ml-5 text-center bg-background-gray mt-1 rounded-lg">
        <div class="flex justify-end"><i class="fas fa-heart text-secondary-black pt-2 pr-2"></i></div>
        <img v-bind:src="image" class="w-32 h-28 inline-flex" alt="Offer of day" />
        <p class="text-primary-black text-md font-medium">{{title}}</p>
        <p class="text-secondary-black text-xss font-medium">{{description}}</p>
        <p class="text-primary-black font-semibold mt-1">€ {{price}}</p>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const OfferFood = defineComponent({
    props:{
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }
    }
});

export default OfferFood;
</script>

<style>

</style>