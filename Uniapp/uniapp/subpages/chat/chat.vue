<template>
  <view>
    <view>
      <block v-for="(item, index) in chatList" :key="index">
        <view>
          <text>{{ item.isMe ? "我" : "执行" }}</text>
          <view>
            <text v-if="item.type === 'text'">{{ item.content }}</text>
            <image :src="item.content" v-else />
          </view>
        </view>
      </block>
    </view>
    <view class="chat-footer">
      <input type="text" cursor-spacing="16" v-model="myInput" />
      <image src="@/static/logo.png" @click="choseImgAndSend"></image>
      <view @click="sendMsg">发送</view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      myInput: "",
      chatList: [
        {
          isMe: false,
          type: "text",
          content: "你好",
        },
        {
          isMe: true,
          type: "text",
          content: "你好",
        },
      ],
    };
  },

  onShow() {
    if (uni.getStorageSync("chatList")) {
      this.chatList = JSON.parse(uni.getStorageSync("chatList"));
    }
  },

  methods: {
    choseImgAndSend() {
      uni.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          let senMsg = {
            isMe: true,
            type: "img",
            content: res.tempFiles[0],
          };
          this.chatList.push(senMsg);
          let resMsg = {
            isMe: false,
            type: "img",
            content: res.tempFiles[0],
          };

          this.chatList.push(resMsg);
          uni.pageScrollTo({
            scrollTop: 99999,
            duration: 0,
          });

          uni.setStorageSync("chatList", JSON.stringify(chatList));
        },
      });
    },

    sendMsg() {
      if (!this.myInput) {
        return;
      }
      let sendMsg = {
        isMe: true,
        type: "text",
        content: this.myInput,
      };
      this.chatList.push(sendMsg);
      let resMsg = {
        isMe: false,
        type: "img",
        content: "我收到了",
      };

      this.chatList.push(resMsg);
      uni.pageScrollTo({
        scrollTop: 99999,
        duration: 0,
      });
    },
  },
};
</script>

<style></style>
