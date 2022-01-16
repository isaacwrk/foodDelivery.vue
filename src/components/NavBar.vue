<template>
    <nav class="fixed bottom-0 h-14 z-50 bg-grey-700 flex w-full left-0 rounded-2xl">
        <slot/>
    </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

const NavBar = defineComponent({
});

export default NavBar;
</script>

<style>

</style>