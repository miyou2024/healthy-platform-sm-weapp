<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'

const data = ref(new Array(10).fill({}))

onMounted(() => {
  data.value = data.value.map((_: number, index: number) => {
    return {
      imgUrl:
          '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: `活蟹】湖塘煙雨 ${index}`,
      price: '388',
      vipPrice: `378`,
      shopDesc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>',
      cart_num: index+1,
    }
  })
})

function onItemPlus(dataItem: any, index: number) {
  console.log('onItemPlus');
  dataItem.cart_num++;
  data.value[index] = dataItem;
}

function onItemMinus(dataItem: any, index: number) {
  if (dataItem.cart_num <= 1) {
    console.warn(`商品数量已经为1，不能再少了。`)
    return;
  }
  dataItem.cart_num--;
  data.value[index] = dataItem;
}

</script>

<template>
  <div class="demo-list">
    <div class="list-item" :key="item.title" v-for="(item, index) in data">
      <nut-card
          :img-url="item.imgUrl"
          :title="item.title"
          :price="item.price"
          :vip-price="item.vipPrice"
          :shop-desc="item.shopDesc"
          :delivery="item.delivery"
          :shop-name="item.shopName">
        <template #footer>
          <IconFont :size="26" name="minus" color="#eee" v-if="item.cart_num <= 1" @click="onItemMinus(item, index)"></IconFont>
          <IconFont :size="26" name="minus" color="red" v-else @click="onItemMinus(item, index)"></IconFont>
          <text class="shop-cart-num">{{item.cart_num}}</text>
          <IconFont :size="26" name="plus" color="red" @click="onItemPlus(item, index)"></IconFont>
        </template>
      </nut-card>
    </div>
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
    border-radius: 10px;
  }
  .shop-cart-num {
    //display: flex;
  }
}
</style>
