<template>
  <button type="button" :disabled="disabled">
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
    }
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

  background: transparent;
  border: none;
  cursor: pointer;
  color: $astar-blue;
}

button:disabled {
  color: $gray-4;
}

.body--dark {
  button:disabled {
    color: $gray-4;
  }
}
</style>
