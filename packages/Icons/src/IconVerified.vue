<template>
  <GoogleMaterialIcon />
  <span class="material-symbols-outlined" :style="size && `font-size: ${size}px`"> verified </span>
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


