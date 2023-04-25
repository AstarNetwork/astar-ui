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
  border: 1px solid $astar-blue;
  box-sizing: border-box;
  background: transparent;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05));
  border-radius: 32px;
  padding: 1px 12px;
  color: $astar-blue;
  font-weight: 500;
  font-size: 11px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  &:hover {
    transition: all 0.3s ease 0s;
    background-color: $astar-blue;
    color: white;
  }
}

button:disabled {
  border: 1px solid $gray-4;
  background: transparent;
  color: $gray-4;
}

.body--dark {
  button:disabled {
    border: 1px solid $gray-4;
    color: $gray-4;
  }
}
</style>
