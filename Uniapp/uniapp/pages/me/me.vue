<template>
  <view>
    <text>me</text>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  onLoad() {
    uni.$on("getInfo", () => {
      console.log("me -> getInfo");
    });
  },
  methods: {},
};
</script>

<style></style>
