<template>
    <div>
        <div class="w-36 h-53 items-center inline-block text-center bg-background-gray mt-1 rounded-lg">
            <div class="absolute right-0"><i class="fas fa-heart text-secondary-black"></i></div>
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