<script setup lang="ts">
import {ref} from 'vue';
import Taro from '@tarojs/taro'
import {Image} from '@tarojs/components';
import { FunctionCloudBase } from '../../utils/f.cloud'

const avatar = ref('');

function onLogin() {
  Taro.getUserProfile({
    desc: `使用您的头像昵称用做展示`,
    success: (res) => {
      console.log('success', res)
    },
    fail: (err) => {
      console.log('fail', err)
    }
  });
}

function onGetAvatar(res) {
  console.log('onGetAvatar', res)
  if (res.detail && res.detail.avatarUrl) {
    avatar.value = res.detail.avatarUrl
  }
}

async function onGetPhoneNumber(res) {
  console.log('onGetPhoneNumber', res)

  const fc = new FunctionCloudBase(
      process.env.APP_ID,
      process.env.APP_ENV,
      true
  );

  await fc.initFunctionInstance();
  await fc.initCloudBaseInstance();
  const r = await fc.wxAppInstance.callFunction({
    name: 'passport_get_phone',
    data: {
      code: res.detail.code,
    }
  });
  console.log('r', r);
}

async function  onRequestPayment() {
  console.log('onRequestPayment');
  const fc = new FunctionCloudBase(
      process.env.APP_ID,
      process.env.APP_ENV,
      false
  );
  await fc.initFunctionInstance();
  fc.wxAppInstance.callFunction({
    // 云函数名称
    name: 'get_pay_payment',
    success: (res) => {
      console.log('success', res);
      const payment = (res as any).result.payment
      Taro.requestPayment({
        ...payment,
        totalFre: 1,
        success (res) {
          console.log('pay success', res)
        },
        fail (err) {
          console.error('pay fail', err)
        }
      });
    },
    fail: (err) => {
      console.log('fail', err)
    }
  });
}

</script>


<template>
  <nut-row>
    <nut-col :span="22" :offset="1">
      <nut-avatar v-if="avatar"> <Image style="width: 100%;height: 100%;" mode="aspectFit" :src="avatar" /> </nut-avatar>
      <nut-button block type="primary" open-type="chooseAvatar" @chooseavatar="onGetAvatar">获取头像</nut-button>
      <nut-button block type="primary" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">获取手机号</nut-button>
      <nut-input type="nickname" placeholder="填写昵称"></nut-input>
      <nut-button block type="primary" @click="onLogin">登录</nut-button>
    </nut-col>
    <nut-col :span="22" :offset="1">
      <nut-cell title="我的订单" :is-link="true"></nut-cell>
      <nut-cell title="我的地址" :is-link="true"></nut-cell>
    </nut-col>
    <nut-col :span="22" :offset="1">
      <nut-button block type="primary">联系客服</nut-button>
    </nut-col>
    <nut-col :span="22" :offset="1">
      <nut-button block type="primary" @click="onRequestPayment">支付</nut-button>
    </nut-col>
  </nut-row>
</template>

<style>

</style>
