<template>
    <MenuList/>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import MenuList from '@/components/MenuList.vue';

const HomeView = defineComponent({
    components:{
        MenuList
    }
});

export default HomeView;
</script>

<style>

</style>