<template>
  <button type="button" :class="selected ? 'selected' : ''">
    <i class="fa">
      <slot></slot>
    </i>
    <span class="title">
      {{ title }}
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "SideNav",
  props: {
    title: {
      type: String
    },
    selected: {
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
  display: inline-flex;
  width: 11rem;
  margin: 0;
  padding: 0.5rem 1rem;

  font-family: "SF Pro Text", "Noto Sans KR", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  text-decoration: none;

  border: none;
  cursor: pointer;
  background: #2C3335;
  border-radius: 6px;
  color: #F7F7F8;
}

button:hover,
button:focus {
  background: #313A3D;
}

button.selected {
  background: #3C4649;
}

.fa {
  display: inline-flex;
  width: 1.375rem;
  height: 1.375rem;
}

.title {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
}
</style>
