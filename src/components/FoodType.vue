<template>
    <div class="items-center text-center inline-block px-1" :class="w">
        <div class="bg-background-gray h-10 text-primary-gray rounded-lg transition-all duration-250 hover:bg-primary-black hover:text-white">
            <p class="text-sm py-2">{{title}}</p>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const FoodType = defineComponent({
    props:{
        title:{
            type:String,
            required: true
        },
        w:{
            type:String,
            required:true
        }
    }
});

export default FoodType;
</script>

<style>

</style>