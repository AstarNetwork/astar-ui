<template>
  <div class="header">
    <div class="header-left">
      {{ title }}
    </div>
    <div class="header-right">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    title: {
      type: String
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
.header {
  overflow: hidden;
  height: 6rem;
  padding: 1.25rem 0.625rem;
  background-color: #5F656F;
}

.header-left {
  float: left;
  display: flex;
  height: 100%;
  align-items: center;
  font-weight: 590;
  font-size: 1.625rem;
  padding: 0.75rem;

  color: #F7F7F8;
}

.header-right {
  float: right;
  display: flex;
  height: 100%;
  align-items: center;
  padding: 0.75rem;
}

@media screen and (max-width: 500px) {
  .header {
    height: 3rem;
    padding: 0.5rem 1rem;
  }

  .header-left {
    padding: 0rem;
  }
  
  .header-right {
    padding: 0rem;
  }
}
</style>
