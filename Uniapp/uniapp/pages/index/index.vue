<template>
  <view class="content">
    <text>首页</text>
    <child :message="title" @childEvent="sayHello" />
    <view>
      <navigator url="/subpages/chat/chat">前往聊天</navigator>
    </view>
  </view>
</template>

<script>
import Child from "@/components/child.vue";
export default {
  data() {
    return {
      title: "Hello",
    };
  },
  components: {
    Child,
  },
  onLoad() {},
  methods: {
    sayHello(message) {
      this.title = message;
    },
  },
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
