<script setup>

</script>

<template>
  About
  <nav>
    <router-link to="/about/child1" >Child1</router-link>
    <router-link :to="{path: '/about/child2'}">Child2</router-link>
    <router-link :to="{path: '/about/child3/222'}">Child2</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped>

</style>
