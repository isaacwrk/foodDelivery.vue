<template>
    <div>
        <h1 class="ml-5">{{title}}</h1>
        <div class="w-36 h-53 bg-background-gray">

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