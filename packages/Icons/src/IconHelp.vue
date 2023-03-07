<template>
  <IconHelpOutline
    class="material-symbols"
    :style="size && `font-size: ${size}px`"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IconHelpOutline } from "@iconify-prerendered/vue-ic";
export default defineComponent({
  components: { IconHelpOutline },
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
