<template>
  <nut-row>
    <nut-col :span="24">
      <CartCommodity></CartCommodity>
      <nut-empty image="empty" description="empty"></nut-empty>
    </nut-col>
  </nut-row>
</template>

<script setup>
import CartCommodity from "./cart-commodity.vue";
</script>

<style>

</style>
