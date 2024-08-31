<template>
  <nut-row>
    <nut-col :span="22" :offset="1">
      <nut-cell title="我的订单" :is-link="true"></nut-cell>
      <nut-cell title="我的地址" :is-link="true"></nut-cell>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="22" :offset="1">
      <nut-button block type="primary">联系客服</nut-button>
    </nut-col>
  </nut-row>
</template>

<script setup>
import {ref} from 'vue';

</script>

<style>

</style>
