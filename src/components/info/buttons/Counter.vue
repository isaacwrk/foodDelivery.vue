<template>
    <div class="bg-background-gray rounded-md  flex w-28 h-14 text-2xl justify-center mx-2 py-2">
        <div class="text-primary-black" @click="decreaseCounter">-</div>
        <div class="text-primary-black">{{counter}}</div>
        <div class="text-primary-black" @click="increaseCounter">+</div>
    </div>
</template>

<script lang='ts'>
import { defineComponent,ref } from 'vue';

const Counter = defineComponent({
    props:{
        initalValue:{
            type:Number
        },
    },

    setup(){
        let counter = ref(0);

        const decreaseCounter = function(){
            if(counter.value > 0){
                return counter.value--;
            }
            
        };
        const increaseCounter = function(){
            counter.value++;
        };
        
        return{ 
            counter,
            decreaseCounter,
            increaseCounter 
        };
    }
});

export default Counter;
</script>

<style>

</style>