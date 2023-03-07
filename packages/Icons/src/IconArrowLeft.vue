<template>
  <IconKeyboardArrowLeft
    class="material-symbols"
    :style="size && `font-size: ${size}px`"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconKeyboardArrowLeft } from "@iconify-prerendered/vue-ic";
export default defineComponent({
  components: { IconKeyboardArrowLeft },
  props: {
    size: {
      type: String,
      required: false,
      default: "",
    },
  },
});
</script>
<style scoped lang="scss">
@use 'packages/styles/main.scss';
</style>
