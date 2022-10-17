<template>
  <div :class="`modalbg ${isShow ? 'show' : ''}`">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">{{ title }}</div>
        <div class="modal-close" @click="close">&times;</div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "DefaultModal",
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

<style lang="scss" scoped>
@import '../../styles/main.scss';
.modalbg {
  display: none; /* Hidden by default */
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(50px);
}
.modalbg.show {
  display: block;
}

.modal-content {
  box-shadow: 0px 0px 24px 4px rgba(0, 0, 0, 0.08);
  border-radius: 6px;
  background: #fff;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 40px;
  width: 24.688rem;
  height: auto;
  color: $gray-5-selected;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
}
.modal-title {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: $gray-5-selected;
}

.modal-close {
  font-family: 'SF Pro Text';
  width: 40px;
  height: 40px;
  border: 1px solid $gray-3;
  border-radius: 30px;
  color: $gray-3;
  font-size: 30px;
  font-weight: 10;
  cursor: pointer;
  display: block;
  text-align: center;
  line-height: 44px;
}
.modal-close:hover {
  color: $astar-blue;
  border-color: $astar-blue;
}

.body--dark {
  .modalbg {
    background: rgba(25, 29, 31, 0.7);
    backdrop-filter: blur(50px);
  }
  .modal-content {
    background: $gray-6;
    color: $gray-1;
  }
  .modal-title {
    color: $gray-1;
  }
  .modal-close {
    color: $gray-4;
    border-color: $gray-4;
  }
  .modal-close:hover {
    color: $astar-blue;
    border-color: $astar-blue;
  }
}
</style>
