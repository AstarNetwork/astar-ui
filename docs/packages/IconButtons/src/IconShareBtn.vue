<template>
  <button type="button">
    <svg
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
    >
      <path
        d="M21 12V22H0V3H12V5H2V20H19V12H21ZM24 0H13.012L17.047 4L10.07 11.07L12.898 13.898L19.875 6.828L24 11V0Z"
        fill="currentColor"
      ></path>
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export interface ButtonType {
  identifier: string;
}

export default defineComponent({
  name: "IconShareBtn",
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
  padding: 6px;
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
