<template>
    <div>
        <div class="flex justify-between">
            <MenuList/>
            <ProfileIcon icon="uil uil-user"/>
        </div>
        <h1 class="mt-8 ml-5 text-2xl font-bold text-primary-black">Good Food<br> Fast Delivery.</h1>   
        <SearchBar/>
        <Carrousel class="mt-6 ml-5">
            <FoodType title="All" w="w-17"/>
            <FoodType title="Fast Food" w="w-32"/>
            <FoodType title="Bakery" w="w-32"/>
            <FoodType title="Japanese" w="w-32"/>
        </Carrousel>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import MenuList from '@/components/MenuList.vue';
import ProfileIcon from '@/components/ProfileIcon.vue';
import SearchBar from "@/components/SearchBar.vue";
import Carrousel from '@/components/Carrousel.vue';
import FoodType from '@/components/FoodType.vue';

const HomeView = defineComponent({
    components:{
        MenuList,
        ProfileIcon,
        SearchBar,
        Carrousel,
        FoodType
    }
});

export default HomeView;
</script>

<style>

</style>