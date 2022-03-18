<template>
  <div :class="`modal ${isShow ? 'show' : ''}`">
    <div class="modal-content">
      <span class="close" @click="close">&times;</span>
      <p class="title">{{ title }}</p>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "SimpleModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    }
  },
  setup(props) {
    const isShow = ref(props.show);
    const close = () => {
      isShow.value = false;
    };

    return {
      isShow,
      close
    };
  }
});
</script>

<style lang="css" scoped>
.modal {
  display: none; /* Hidden by default */
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.6);
}
.modal.show {
  display: block;
}

.modal-content {
  box-shadow: 0px 0px 15px 4px rgba(0, 0, 0, 0.5);
  border-radius: 6px 0px 0px 6px;
  background: #2C3335;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 24.688rem;
  height: auto;
}

.title {
  font-style: normal;
  font-weight: 590;
  font-size: 1.375rem;
  line-height: 1.625rem;
  letter-spacing: -0.02em;
  color: #F7F7F8;
}

.close {
  width: 40px;
  height: 40px;
  color: #B1B7C1;
  float: right;
  font-size: 40px;
  cursor: pointer;
}
</style>
