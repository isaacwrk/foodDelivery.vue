<template>
    <div class="h-25 ml-5 mt-3 bg-background-gray text-center rounded-lg mx-3 relative">
        <img :src="image" class="w-24 h-24 ml-3 object-contain" />
        <div class="absolute right-5 top-4"><i class="fas fa-heart text-secondary-black"></i></div>
        <div class="absolute left-32 top-4 text-left">
            <p class="text-primary-black text-lg">{{title}}</p>
            <p class="text-blacked-gray text-sm">{{description}}</p>
            <div class="flex flex-1">
                <i class="far fa-clock text-xs text-blacked-gray mr-1"></i><p class="text-blacked-gray text-xs">{{readyIn}}</p>
            </div>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const TopOfWeek = defineComponent({
    props:{
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        readyIn:{
            type:String,
            required:true
        },
        image:{
            type:String,
            required:true
        }    

    }
});

export default TopOfWeek;
</script>

<style>
</style>