<script setup lang="ts">
import Taro from '@tarojs/taro'
import { ref, reactive } from 'vue'

const data = ref([
  {
    testid: 3,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: false,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  },
  {
    testid: 4,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  },
  {
    testid: 4,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  },
  {
    testid: 4,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  },
  {
    testid: 4,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  },
  {
    testid: 4,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  }
])
const dataOptions = reactive({
  id: 'testid',
  addressDetail: 'testaddressDetail',
  addressName: 'testaddressName'
})
const clickItem = () => {
  console.log('Click To Address')
}
const delClick = () => {
  console.log('Click To Delete')
}
const editClick = () => {
  console.log('Click To Edit')
}
const addAddress = () => {
  console.log('Click To Add')
  Taro.chooseAddress({
    success(result) {
      if (result.errMsg === 'chooseAddress:ok') {
        console.log('选择的地址是', result)
      } else {
        console.log('选择地址报错', result)
      }
    },
    fail(error) {
      if (error.errMsg === 'chooseAddress:fail cancel') {
        console.warn(`用户取消选择地址`);
      } else {
        console.log('fail', error)
      }
    },
  });
}
</script>

<template>
  <nut-row>
    <nut-col :span="22" :offset="1">
      <nut-address-list
          :data="data"
          @add="addAddress"
          @click-item="clickItem"
          @del-icon="delClick"
          @edit-icon="editClick"
          :show-bottom-button="true"
          :data-options="dataOptions"
      >
      </nut-address-list>
    </nut-col>
    <nut-col :span="22" :offset="1">

    </nut-col>
  </nut-row>
</template>

<style lang="less">

</style>
