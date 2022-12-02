<template>
  <a-space>
    <a-typography-text>Space:</a-typography-text>
    <a-tag v-if="true" color="arcoblue">Tag</a-tag>
    <a-button type="primary" @click="handleClickMini">Item1</a-button>
    <a-button type="primary">Item2</a-button>
    <a-switch defaultChecked />
    <button class="btn-style">Button</button>
  </a-space>
  <HelloWorld />
  <icon-ep-alarm-clock class="" />
</template>

<script setup>
const handleClickMini = () => {
  AMessage.info("hello isboyjc, click mini AButton!")
}
</script>

<style scoped>
.btn-style {
  @apply bg-blue-400 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200;
  @apply hover: bg-blue-500;
  @apply dark: bg-blue-500 dark:hover:bg-blue-600;
}
</style>
