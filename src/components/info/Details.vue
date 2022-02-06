<template>
    <div class="ml-5 mt-25">
        <div class="flex flex-1 justify-between">
            <h1 class="text-primary-black text-2xl font-semibold">Pizza Margherita</h1>
            <h1 class="text-primary-black text-2xl font-semibold mr-5">€ 20.99</h1>
        </div>
        <div class="flex flex-1 mt-2">
            <i class="far fa-clock text-xs text-blacked-gray mr-1"></i><p class="text-blacked-gray text-xs font-semibold">20-30min</p>
        </div>
        <div class="mt-2">
            <p class="text-sm text-blacked-gray break-words mr-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin pharetra sodales maximus. Ut ac porta lectus. 
                Proin quis pharetra enim. Cras vitae purus dignissim, lobortis massa sit amet, commodo libero. Curabitur vitae urna facilisis, rhoncus sem vitae.
            </p>
        </div>
        <div class="flex flex-1 justify-between">
            <Counter/>
            <BuyNow/>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Counter from '@/components/info/buttons/Counter.vue';
import BuyNow from '@/components/info/buttons/BuyNow.vue';

const Details = defineComponent({
    components:{
        Counter,
        BuyNow
    }
});

export default Details;
</script>

<style>

</style>