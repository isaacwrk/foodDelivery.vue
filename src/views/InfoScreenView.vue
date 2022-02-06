<template>
    <div class="relative">
        <ProductPhoto/>
        <Description/>
        <Details/>
    </div>
 
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import ProductPhoto from "@/components/info/ProductPhoto.vue";
import Description from "@/components/info/Description.vue";
import Details from "@/components/info/Details.vue";

const InfoScreenView = defineComponent({
    components:{
        ProductPhoto,
        Description,
        Details
    }
});

export default InfoScreenView;
</script>

<style>

</style>