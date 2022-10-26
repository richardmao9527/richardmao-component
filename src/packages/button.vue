<template>
  <button class="poly-button" :class="className">
    <!-- 使用icon标签，并且在有icon传入时才显示 -->
    <poly-icon :icon="icon" v-if="icon" class="icon"></poly-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "poly-button",
  props: {
    type: {
      type: String,
      default: "",
      validator: function (type) {
        let typeArr = ["primary", "warning", "danger", "success", "info"];
        if (type && typeArr.indexOf(type) == -1) {
          console.error("type的类型必须为primary,warning,danger,success,info");
          return true;
        }
        return true;
      },
    },
    icon: {
      // 接收icon参数
      type: String,
    },
  },
  mounted() {},
  computed: {
    className() {
      let classes = [];
      if (this.type) {
        classes.push(this.type);
      }
      return classes;
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_var.scss"; // 导入公共样式
$height: 42px; // 设置一些公共变量
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.poly-button {
  border-radius: $border-radius;
  border: 1px solid $border-color;
  color: $color;
  background: #fff;
  height: $height;
  cursor: pointer;
  font-size: $font-size;
  line-height: 1;
  padding: 12px 20px;
  display: inline-flex;
  justify-content: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color;
    background-color: $background;
  }
  &:focus,
  &:active {
    color: $active-color;
    border-color: $active-color;
    background-color: $background;
    outline: none;
  }
  // 设置按钮icon大小
  .icon {
    width: 16px;
    height: 16px;
  }
  // 当icon组件后面有span时，给span加一个左边的外间距
  .icon + span {
    margin-left: 5px;
  }
}
$color-list: (
  primary: $primary,
  success: $success,
  info: $info,
  warning: $warning,
  danger: $danger,
);
@each $c123, $c2 in $color-list {
  #{"." + $c123} {
    background: #{$c2};
    border: 1px solid #{$c2};
    color: #fff;
    fill: #fff; //把颜色填充到当前元素内
  }
}
@each $type,
  $color
    in (
      primary: $primary-hover,
      success: $success-hover,
      info: $info-hover,
      warning: $warning-hover,
      danger: $danger-hover
    )
{
  #{"." + $type}:hover {
    background: #{$color};
    border: 1px solid #{$color};
    color: #fff;
  }
}
@each $type,
  $color
    in (
      primary: $primary-active,
      success: $success-active,
      info: $info-active,
      warning: $warning-active,
      danger: $danger-active
    )
{
  #{"." + $type}:active,
  #{"." + $type}:focus {
    background: #{$color};
    border: 1px solid #{$color};
    color: #fff;
  }
}
</style>
