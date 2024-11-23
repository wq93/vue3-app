<script setup>
  import {useRoute} from "vue-router"
  console.log(useRoute(), 'router');
</script>

<template>
  Child3
  {{ $route }}}
</template>

<style scoped>

</style>
