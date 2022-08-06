<template>
  <button :class="type" :style="mold">
    <slot />
  </button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: "default",
    },
    mold: {
      type: String,
      default: "pointer",
    },
  },
  created() {},

  methods: {},
};
</script>

<style scoped>
.default {
  height: 40px;
  width: 90px;
  border: none;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}
.serch {
  height: 40px;
  width: 90px;
  border: none;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  background-color: #5f84ff;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
}
.new {
  background-color: #ff6f2a;
  height: 40px;
  width: 90px;
  border: none;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  margin-top: 25px;
}
</style>
