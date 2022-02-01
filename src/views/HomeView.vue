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
            <FoodType title="Healthy" w="w-32"/>
        </Carrousel>
        <h1 class="mt-4 ml-5 font-semibold text-xl">{{title}}</h1>
        <Carrousel class="mt-2">
            <OfferFood title="Tacos" description="Mexican Tartillo Tacos" price="14.99" :image="require('@/assets/img/food2.png')"/>
            <OfferFood title="Shrink Soap" description="Tasty Soap of Shrink" price="25.99" :image="require('@/assets/img/food1.png')"/>
            <OfferFood title="Meat and fries" description="Cow Meat with Fries" price="20.99" :image="require('@/assets/img/food3.png')"/>
            <OfferFood title="Meat and fries" description="Cow Meat with Fries" price="30.99" :image="require('@/assets/img/food4.png')"/>
        </Carrousel>
        <h1 class="mt-4 ml-5 font-semibold text-xl">{{title2}}</h1>
        <TopOfWeek/>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import MenuList from '@/components/MenuList.vue';
import ProfileIcon from '@/components/ProfileIcon.vue';
import SearchBar from "@/components/SearchBar.vue";
import Carrousel from '@/components/Carrousel.vue';
import FoodType from '@/components/FoodType.vue';
import OfferFood from '@/components/OfferFood.vue';
import TopOfWeek from '@/components/TopOfWeek.vue';


const HomeView = defineComponent({
    components:{
        MenuList,
        ProfileIcon,
        SearchBar,
        Carrousel,
        FoodType,
        OfferFood,
        TopOfWeek
    },
    setup(){
        const title = "Popular";
        const title2 = "Top of Week";

        return{ title, title2 };
    }
});

export default HomeView;
</script>

<style>

</style>