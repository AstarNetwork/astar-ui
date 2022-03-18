<template>
  <div>
    <my-button @click="onClick(1)">Test</my-button>
    <my-button @click="onClick(2)">Test</my-button>
    <my-button @click="onClick(3)">Test</my-button>
  </div>
</template>

<script setup>
const onClick = (num) => { console.log(`Test ${num}`) }
</script>