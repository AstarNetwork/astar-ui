<template>
  <button type="button" :style="`width: ${width}px; height: ${height}px;`" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
  },
  setup(props) {
    return {
      ...toRefs(props)
    };
  }
});
</script>

<style lang="css" scoped>
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  padding: 0.5rem 1rem;

  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  font-style: normal;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  cursor: pointer;
  background: #191D1F;
  border-radius: 30px;
  color: #05B6FD;
}

button:hover {
  background: #05B6FD;
  color: #fff;
}

button:focus {
  background: #0085FF;
  color: #fff;
}

button:disabled {
  background: #191D1F;
  color: #B1B7C1;
}
</style>
