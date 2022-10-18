<template>
  <div class="modalbg" :class="[isShow && 'show', isClosing? fadeOutClass: fadeInClass]">
    <div class="modal-content" :class="zoomInClass" :style="`width: ${width}px; height: ${height}px;`">
      <div class="modal-header">
        <div class="modal-title">{{ title }}</div>
        <div class="modal-close" @click="close"><IconCloseWithColor  /></div>
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, toRefs } from "vue";
import IconCloseWithColor from "./IconCloseWithColor.vue";
const fadeInClass = "fade-in";
const fadeOutClass = "fade-out";
const zoomInClass = "zoom-in";

export default defineComponent({
  name: "DefaultModal",
  components: { IconCloseWithColor },
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
    },
    isClosing: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const isShow = ref(props.show);
    const close = () => {
      emit("close");
    };

    watchEffect(() => {
      if (isShow.value !== props.show) {
        isShow.value = props.show;
      }
    });

    return {
      ...toRefs(props),
      isShow,
      zoomInClass,
      fadeInClass,
      fadeOutClass,
      close
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../../styles/main.scss';
@import "../../styles/animation.scss";
@import "../../styles/utils.scss";

.fade-in {
  @include fade-in-animation;
}

.fade-out {
  @include fade-out-animation;
}

.zoom-in {
  @media screen and (min-width: $sm) {
    animation: zoom-in-animation 0.2s ease-in;
  }
}

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
  @supports (-moz-appearance: none) {
    background: $backdrop-transparent-dark-firefox !important;
  }
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
  min-width: 200px;
  min-height: 50px;
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

  &:hover {
    color: $astar-blue;
    border-color: $astar-blue;
  }
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
    &:hover {
      color: $astar-blue;
      border-color: $astar-blue;
    }
  }
}

@media screen and (max-width: $sm) {
  .modal-content {
    width: 100% !important;
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0 !important;
    box-shadow: -5px 2px 8px 4px rgba(0, 0, 0, 0.5);
  }
  .modal-header {
    margin: 35px;
  }
}
</style>
