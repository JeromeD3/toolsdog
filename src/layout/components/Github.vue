<script setup>
import { getConfig } from '@/config/index'
const openNewWindow = () => window.open(getConfig('github'), '_blank')
</script>
<template>
  <a-button type="text" @click="openNewWindow" class="mx-2">
    <template #icon>
      <icon-mdi-github class="text-[var(--color-text-1)] text-16px" />
    </template>
  </a-button>
</template>
