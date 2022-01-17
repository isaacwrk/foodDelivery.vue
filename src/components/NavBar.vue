<template>
    <nav class="fixed bottom-0 h-16 z-50 bg-primary-black rounded-t-3xl flex w-full left-0">
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