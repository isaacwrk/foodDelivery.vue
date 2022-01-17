<template>
    <div class="flex items-center justify-center flex-1">
        <i :class="[icon, {'text-strong-purple':selected}]" class="text-xl  text-gray-300 "></i>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const NavigationBarItem = defineComponent({
    props:{
        icon:{
            type:String,
            required:true
        },
        selected:{
            type:Boolean,
            required:true
        }
    }
});

export default NavigationBarItem;
</script>

<style>

</style>