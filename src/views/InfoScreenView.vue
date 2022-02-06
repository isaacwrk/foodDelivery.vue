<template>
    <div>
        <ProductPhoto/>
        <Description/>
    </div>
 
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import ProductPhoto from "@/components/info/ProductPhoto.vue";
import Description from "@/components/info/Description.vue";

const InfoScreenView = defineComponent({
    components:{
        ProductPhoto,
        Description
    }
});

export default InfoScreenView;
</script>

<style>

</style>