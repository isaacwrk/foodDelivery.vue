<template>
    <div>
        <div class="flex justify-between">
            <MenuList/>
            <ProfileIcon icon="uil uil-user"/>
        </div>
        <h1 class="mt-8 ml-5 text-2xl font-bold text-primary-black">Good Food<br> Fast Delivery.</h1>   
        <SearchBar/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import MenuList from '@/components/MenuList.vue';
import ProfileIcon from '@/components/ProfileIcon.vue';
import SearchBar from "@/components/SearchBar.vue";

const HomeView = defineComponent({
    components:{
        MenuList,
        ProfileIcon,
        SearchBar
    }
});

export default HomeView;
</script>

<style>

</style>