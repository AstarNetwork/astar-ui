<template>
  <input
    type="radio"
    :checked="checked"
    @change="change"
  />
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "RadioBtn",
  props: {
    checked: {
      type: Boolean,
      default: false
    },
  },
  emits: ["change"],
  setup(props, { emit }) {

    const change = () => {
      emit('change');
    }

    return {
      ...toRefs(props),
      change
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';
@import "../../styles/utils.scss";

input[type='radio'] {
  width: rem(16);
  height: rem(16);
  border-radius: 50%;
  box-shadow: 0 0 0 1px $gray-4;
  -webkit-appearance: none;
  display: flex;
  align-items: center;
  margin-right: rem(12);
  &:checked {
    border: 3px solid white;
    background-color: $astar-blue;
    box-shadow: 0 0 0 2px $astar-blue;
  }
}

.body--dark {
  input[type='radio'] {
    box-shadow: 0 0 0 1px white;

    &:checked {
      box-shadow: 0 0 0 2px $astar-blue;
      border: 3px solid $gray-5;
    }
  }
}
</style>