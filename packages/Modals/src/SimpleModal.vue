<template>
  <div :class="`modal ${isShow ? 'show' : ''}`" @click="close">
    <div class="modal-content" :style="`width: ${width}px; height: ${height}px;`">
      <span class="close" @click="close">&times;</span>
      <div class="title">{{ title }}</div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, toRefs } from "vue";

export default defineComponent({
  name: "SimpleModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  emits: ['close'],
  setup(props, { emit }) {
    const isShow = ref(props.show);

    watchEffect(() => {
      if (isShow.value !== props.show) {
        isShow.value = props.show;
      }
    })

    const close = (e: any) => {
      if (e.target.className === 'modal show' || e.target.className === 'close') {
        emit('close');
      }
    };

    return {
      ...toRefs(props),
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
  text-align: center;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.5);
  backdrop-filter: blur(8px);
  @supports (-moz-appearance: none) {
    background: $backdrop-transparent-dark-firefox !important;
  }
}
.modal.show {
  display: flex;
}

.modal-content {
  box-shadow: 0 0 15px 4px #00000030;
  border-radius: 6px;
  background: #2C3335;
  margin: auto;
  padding: 20px;
  border: 0px solid transparent;
  width: 24.688rem;
  height: auto;
}

.title {
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 590;
  font-size: 1.375rem;
  line-height: 1.625rem;
  letter-spacing: -0.02em;
  margin-top: -0.6rem;
  color: #F7F7F8;
}

.close {
  display: flex;
  color: #B1B7C1;
  justify-content: flex-end;
  font-size: 1.775rem;
  font-weight: 330;
  cursor: pointer;
  margin-top: 0.2rem;
  margin-right: 0.8rem;
}
.close:hover {
  color: #d8e2f1;
}
</style>
