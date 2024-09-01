<template>
  <view>
    <text>child component {{ message }}</text>
    <button @click="onClick">click</button>
  </view>
</template>

<script>
export default {
  name: "child",
  props: ["message"],
  data() {
    return {};
  },
  methods: {
    onClick() {
      uni.$emit("getInfo");
      //this.$emit('childEvent', '蜡笔小新')
    },
  },
};
</script>

<style scope>
* {
  color: red;
}
</style>
