<template>
    <div class="flex justify-between">
        <MenuList/>
        <ProfileIcon icon="uil uil-user"/>
    </div>
    
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import MenuList from '@/components/MenuList.vue';
import ProfileIcon from '@/components/ProfileIcon.vue';

const HomeView = defineComponent({
    components:{
        MenuList,
        ProfileIcon
    }
});

export default HomeView;
</script>

<style>

</style>