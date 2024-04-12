<template>
    <div>
        <layout-fixed></layout-fixed>
        <layout-nav></layout-nav>
        <layout-header></layout-header>
        <router-view></router-view>
        <layout-footer></layout-footer>
    </div>
</template>

<script setup lang="ts">
import LayoutFixed from './components/LayoutFixed.vue'
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
</script>

<style scoped>

</style>