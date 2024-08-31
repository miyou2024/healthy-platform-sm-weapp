<template>
  <nut-row>
    <nut-col :span="24">
      <SmSwiper></SmSwiper>
    </nut-col>

    <nut-col :span="24">
      <nut-sticky :top="0">
        <HomeSort></HomeSort>
      </nut-sticky>
    </nut-col>

    <nut-col :span="24">
      <HomeCommodity></HomeCommodity>
    </nut-col>
  </nut-row>
</template>

<script setup lang="ts">

import HomeCommodity from './home-commodity.vue'
import HomeSort from './home-sort.vue'

interface IA {
}

</script>

<style>

</style>
