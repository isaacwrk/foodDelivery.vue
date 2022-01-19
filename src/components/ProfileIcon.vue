<template>
    <div class="relative py-2 mr-5 mt-8">
        <div class="w-10 h-10 border-2 border-gray-200 rounded-full text-center py-1">
            <i :class="icon" class="text-primary-gray"></i>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const ProfileIcon = defineComponent({
    props:{
        icon:{
            Type:String,
            required:true
        }
    }
});

export default ProfileIcon;
</script>

<style>

</style>