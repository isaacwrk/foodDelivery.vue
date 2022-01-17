<template>
    <div class="min-h-screen">
        <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component"></component>
            </transition>   
        </RouterView>
        
        <NavBar>
            <NavigationBarItem icon="uil uil-home" 
                               :selected="$route.name == 'home'"
                               @click="$router.replace({name:'home'})"/>
            <NavigationBarItem icon="uil uil-info-circle" 
                               :selected="$route.name == 'info'"
                               @click="$router.replace({name:'info'})"/>
            <NavigationBarItem icon="uil uil-heart-alt" 
                               :selected="$route.name == 'favorites'"
                               @click="$router.replace({name:'favorites'})"/>
            <NavigationBarItem icon="uil uil-setting" 
                               :selected="$route.name == 'settings'"
                               @click="$router.replace({name:'settings'})"/>
        </NavBar>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import NavigationBarItem from '@/components/NavigationBarItem.vue';

const HomeView = defineComponent({
    components:{
        NavBar,
        NavigationBarItem
    }
});

export default HomeView;
</script>

<style>

</style>