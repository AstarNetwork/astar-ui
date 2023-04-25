<template>
  <div class="modal" :class="[isShow && 'show', isClosing? fadeOutClass: fadeInClass]" @click="close">
    <div
      class="modal-content"
      :class="zoomInClass"
      :style="`width: ${width}px; height: ${height}px;`"
    >
      <div v-if="isCloseIcon" class="row--close">
        <div class="column--close">
          <IconClose  />
        </div>
      </div>
      <div class="title" :class="!isCloseIcon && 'title--no-close-icon'">
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, toRefs } from "vue";
import IconClose from "./IconClose.vue";

const fadeInClass = "fade-in";
const fadeOutClass = "fade-out";
const zoomInClass = "zoom-in";

export default defineComponent({
  components: { IconClose },
  name: "SimpleModal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
    isCloseIcon: {
      type: Boolean,
      require: false,
      default: true,
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

    watchEffect(() => {
      if (isShow.value !== props.show) {
        isShow.value = props.show;
      }
    });

    const close = (e: any) => {
      if (!props.isCloseIcon) return;
      const openClass = "modal show fade-in";
      if (
        e.target.className === openClass ||
        // Memo: svg object
        e.target.className.baseVal === "" ||
        e.target.className === "column--close"
      ) {
        emit("close");
      }
    };

    return {
      ...toRefs(props),
      isShow,
      close,
      zoomInClass,
      fadeInClass,
      fadeOutClass
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/main.scss";
@import "../../styles/animation.scss";
@import "../../styles/utils.scss";

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
  background: rgba(255, 255, 255, 0.5);
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
  background-color: $gray-1;
  margin: auto;
  padding: 20px;
  border: 0px solid transparent;
  width: rem(360);
  height: auto;

  @media (min-width: $xs) {
    width: 375px;
  }
  @media (min-width: $sm) {
    width: 395px;
  }
}

.title {
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 590;
  font-size: rem(22);
  line-height: rem(26);
  letter-spacing: -0.02em;
  margin-top: rem(-8);
  color: $navy-1;
}

.title--no-close-icon {
  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  margin-top: rem(24);
}

.row--close {
  display: flex;
  color: #b1b7c1;
  justify-content: flex-end;
  font-weight: 330;
  margin-right: rem(12.8);
  height: rem(30);
  @media (min-width: $sm) {
    margin-right: 0px;
  }
}

.column--close {
  cursor: pointer;
  padding-top: 6px;
}

.close:hover {
  color: #d8e2f1;
}

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

.body--dark {
  .modal {
    background: rgba(25, 29, 31, 0.5);

    .modal-content {
      box-shadow: 0 0 15px 4px #00000080;
      background-color: $gray-5;

      .title {
        color: $gray-1;
      }
    }
  }
}

@media screen and (max-width: $sm) {
  .modal-content {
    width: 100% !important;
    position: absolute;
    top: 0;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 40px;
    box-shadow: -5px 2px 8px 4px rgba(0, 0, 0, 0.5);
  }
}
</style>
