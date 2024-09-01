<template>
  <view>
    <text>list</text>
    <text>{{ username }}</text>
  </view>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["username"]),
  },
  methods: {
    ...mapActions(["login", "logout"]),
  },
};
</script>

<style></style>
