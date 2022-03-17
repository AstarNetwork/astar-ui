<template>
  <button type="button">
    &times;
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export interface ButtonType {
  identifier: string;
}

export default defineComponent({
  name: "IconCloseBtn",
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

  width: 40px;
  height: 40px;
  font-size: 40px;
  font-weight: 100;
  line-height: 30px;
  left: 20px;
  top: 20px;

  /* 005gray */
  background: #2C3335;
  border-radius: 30px;
  color: #B1B7C1;
}

button:hover,
button:focus {
  color: #fff;
}

</style>
