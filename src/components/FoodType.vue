<template>
    <div class="flex flex-1 items-center justify-center" :class="[{h,w}]">
        <p class="text-lg bg-background-gray text-primary-gray transition-all duration-250" :class="{'bg-primary-black text-white' : selected}">{{title}}</p>
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
        selected:{
            type:Boolean,
            required:true
        },
        h:{
            type:String,
            required:true  
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