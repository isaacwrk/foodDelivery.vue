<template>
    <div class="w-full h-81 bg-primary-black relative">
        <div class="flex flex-1 justify-between">
            <div class="border-2 w-10 h-10 mt-8 ml-5 border-blacked-gray rounded-full text-center py-1.5"  @click="$router.replace({name:'home'})">
                <i class="fas fa-chevron-left text-background-gray"></i>
            </div>
            <div class="border-2 w-10 h-10 mt-8 mr-5 border-blacked-gray rounded-full text-center py-1.5"  @click="$router.replace({name:'favorites'})">
                <i class="fas fa-heart text-background-gray"></i>
            </div>
        </div>
        <div class="">
            <img src="~@/assets/img/topofweek1.png" alt="Tasty Margherita Pizza">
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const Description = defineComponent({
});

export default Description;
</script>

<style>

</style>