<template>
  <button type="button" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "ActionBtn",
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

<style lang="css" scoped>
button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
  padding: 0.5rem 2rem;

  font-family: "SF Pro Text", "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  text-decoration: none;

  display: inline-block;
  width: auto;

  border: none;
  cursor: pointer;
  background: #0085FF;
  border-radius: 30px;
  color: #FFFFFF;
}

button:hover,
button:focus {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), #0085FF;
}

button:disabled {
  background: #191D1F;
  color: #B1B7C1;
}
</style>
