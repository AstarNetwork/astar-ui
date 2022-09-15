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

<style lang="scss" scoped>
@import '../../styles/main.scss';

button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;

  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  display: inline-block;
  width: auto;

  border: none;
  cursor: pointer;
  background: $astar-blue;
  border-radius: 500px;
  color: $gray-1;

  transition: 0.5s;
  background: linear-gradient(100.62deg, var(--c1, $astar-blue), var(--c2, #0297FB) 51%, var(--c1, #0070EB)) var(--x, 0)/ 200%;
}

button:hover {
  --x: 100%;
}

button:disabled {
  border: 1px solid $gray-3;
  background: transparent;
  color: $gray-3;
}

.body--dark {
  button:disabled {
    border: 1px solid $gray-4;
    color: $gray-4;
  }
}
</style>
