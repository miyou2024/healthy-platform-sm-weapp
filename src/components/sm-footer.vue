<script setup lang="ts">
import { ref } from 'vue'

const icon = {
  active: 'https://img11.360buyimg.com/imagetools/jfs/t1/70423/4/20553/3652/62e74629E23ba550e/aeeed0e3b9f43ae6.png',
  unactive: 'https://img13.360buyimg.com/imagetools/jfs/t1/23319/19/18329/3084/62e7c346E957c54ef/6c3e8a49e52b76f2.png'
}
const active = ref(0)

const tabSwitch = (item: Record<string, unknown>, index: number) => {
  console.log(item, index)
}
</script>

<template>
  <nut-tabbar v-model="active" @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="首页">
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.unactive" alt="" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车">
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.unactive" alt="" />
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="我的">
      <template #icon="props">
        <img :src="props.active ? icon.active : icon.unactive" alt="" />
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<style scoped>

</style>
