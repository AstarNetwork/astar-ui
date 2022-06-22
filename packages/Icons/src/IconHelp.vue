<template>
  <GoogleMaterialIcon />
  <span class="material-symbols-outlined icon" :style="size && `font-size: ${size}px`"> help </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GoogleMaterialIcon from './GoogleMaterialIcon.vue'

export default defineComponent({
  components:{ GoogleMaterialIcon },
  props:{
    size: {
      type: String,
      required: false,
      default:""
    },
  }
});
</script>


<style scoped>
.icon {
  cursor: default;
}
</style>
