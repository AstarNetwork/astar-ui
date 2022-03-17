<template>
  <button type="button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
      />
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export interface ButtonType {
  identifier: string;
}

export default defineComponent({
  name: "IconCopyBtn",
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
  padding: 4px;
  cursor: pointer;
  border: 0;

  width: 32px;
  height: 32px;
  left: 20px;
  top: 20px;

  /* 005gray */
  background: #2C3335;
  border-radius: 16px;
  color: #05B6FD;
}

button:hover,
button:focus {
  background: #05B6FD;
  color: #fff;
}

</style>
