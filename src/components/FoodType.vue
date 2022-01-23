<template>
    <div class="items-center text-center inline-block h-10" :class="w">
        <div class="text-md bg-background-gray text-primary-gray rounded-2xl transition-all duration-250 hover:bg-primary-black hover:text-white">
            <p>{{title}}</p>
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