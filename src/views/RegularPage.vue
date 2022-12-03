<script setup>
const state = reactive({
  foo: 1,
  bar: 2
})
let fooRef = toRef(state, 'foo')
const ADD = () => {
  fooRef.value++
}
const ADD2 = () => state.bar++
</script>

<template>
  <div @click="ADD">{{ state }}</div>
  <button @click="ADD2">ADD</button>
</template>

<style scoped></style>
