<template>
    <div class="relative py-2 ml-5 mt-8">
        <nav>
            <button class="w-10 h-10 relative focus:outline-none rounded-full border-2 border-gray-200" 
                    @click="open = !open">
                <div class="block w-5 absolute left-5 top-1/2 transform -translate-x-1/2 -translate-y-1/2"> 
                    <span class="block absolute h-0.5 w-4 text-primary-gray bg-current transform transition duration-500 ease-in-out" 
                          :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span> 
                    <span class="block absolute h-0.5 w-4 text-primary-gray bg-current transform transition duration-500 ease-in-out"
                          :class="{'opacity-0': open } "></span> 
                    <span class="block absolute h-0.5 w-3 text-primary-gray bg-current transform transition duration-500 ease-in-out" 
                          :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span> </div>
            </button> 
        </nav>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';

const MenuList = defineComponent({
    
    setup(){
        const open = ref(false);

        return{ open };
    }
    
});

export default MenuList;
</script>

<style>

</style>