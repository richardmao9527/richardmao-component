<template>
  <svg class="poly-icon" aria-hidden="true">
    <!-- <use :xlink:href="`#${icon}`" /> -->
  </svg>
</template>

<script>
// import "./../styles/icon";
export default {
  name: "poly-icon",
  props: {
    icon: {
      type: String,
      require: true, // 设置必传
    },
  },
};
</script>

<style>
.poly-icon {
  width: 30px;
  height: 30px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
