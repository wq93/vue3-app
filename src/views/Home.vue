<script setup>
  import {storeToRefs} from 'pinia'
  import {useUserStore} from '../stores/user.js'
  const counter = useUserStore()
  const { count } = storeToRefs(counter)
  const handleClick = () => {
    counter.increment(4)
    // counter.count +=2
    // counter.$patch({
    //   count: counter.count + 3
    // })
  }
</script>

<template>
Home
  Store : {{ count }}
  <button @click="handleClick">Button</button>
</template>

<style scoped>

</style>
