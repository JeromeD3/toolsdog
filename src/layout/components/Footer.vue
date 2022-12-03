<script setup>
import { getConfig } from '@/config/index'
</script>
<template>
  <div class="w-1200px flex justify-between items-center min-h-48px">
    <div class="w-full h-48px flex justify-center items-center">
      <span> Copyright ⓒ 2022</span>
      <a-link :href="getConfig('me.github')" target="_blank">
        {{ getConfig('me.name') }}
      </a-link>
    </div>
  </div>
</template>
