<template>
    <div class="flex flex-1 mt-7 justify-items-start px-5">
        <div class="flex border-2 rounded-xl w-81 h-10">
            <button class="flex items-center justify-center px-4 pl-3">
                <i :class="icon" class="text-gray-400"></i>
            </button>
            <input type="text" class=" py-2 pl-2 w-80" :placeholder="searchText">
            <i class="fa fa-sliders-h text-gray-400 hover:text-green-500 hover:cursor-pointer mt-3 mr-4"></i>
        </div>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const SearchBar = defineComponent({
    props:{
        searchText:{
            type:String,
            default:'Search...'
        },
        icon:{
            type:String,
            default:'fa fa-search'
        }
    }
});

export default SearchBar;
</script>

<style>

</style>