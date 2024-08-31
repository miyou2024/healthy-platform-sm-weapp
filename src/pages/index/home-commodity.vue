<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useReachBottom } from '@tarojs/taro'
import { IconFont } from '@nutui/icons-vue-taro'

const n = ref(0);
const empty = ref(false);

const data = ref(new Array(10).fill(0))

const state = ref({
  imgUrl:
      '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
})

onMounted(() => {
  data.value = data.value.map((_: number, index: number) => index + 1)
})

const onScrollBottom = () => {
  console.log(`onScrollBottom`, new Date());
  if (n.value >= 3) {
    empty.value = true;
    return;
  }
  n.value++;
  let arr = new Array(10).fill(0)
  const len = data.value.length
  data.value = data.value.concat(arr.map((_: number, index: number) => len + index + 1))
}

useReachBottom(() => {
  console.log('onReachBottom');
  onScrollBottom();
})

</script>

<template>
  <div class="demo-list">
    <div class="list-item" :key="index" v-for="(item, index) in data">
      <nut-card
          :img-url="state.imgUrl"
          :title="state.title + index"
          :price="state.price"
          :vip-price="state.vipPrice"
          :shop-desc="state.shopDesc"
          :delivery="state.delivery"
          :shop-name="state.shopName">
        <template v-if="index === 0" #footer>
            <span>
              <IconFont :size="18" name="cart2"></IconFont>
              <IconFont :size="26" name="minus"></IconFont>
              <text>2</text>
              <IconFont :size="26" name="plus"></IconFont>
            </span>
        </template>
      </nut-card>
    </div>
    <nut-divider v-if="empty"> 没有更多了~</nut-divider>
  </div>
</template>

<style lang="less">
.demo-list {
  .list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    //height: 150px;
    //background-color: #f4a8b6;
    border-radius: 10px;
  }
}
</style>
