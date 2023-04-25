<template>
  <button type="button" :style="`width: ${width}px; height: ${height}px;`" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "IrregularButton",
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
  background: transparent;
  border-radius: 500px;
  color: $astar-blue;

  transition: 0.5s;
}

button:hover {
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), $astar-blue;
  color: $gray-1;
}

button:focus {
  background: $astar-blue;
  color: #fff;
}

button:disabled {
  background: transparent;
  color: $gray-4;
}

.body--dark {
  button:disabled {
    color: $gray-4;
  }
}
</style>
