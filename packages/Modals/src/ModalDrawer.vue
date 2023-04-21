<template>
  <div :class="show && 'wrapper--modal-drawer'">
    <div
      class="animate__animated animate__faster modal"
      :class="[isClosing ? slideOutClass : slideInClass, show && 'show']"
    >
      <div class="modal-content">
        <div class="row-title-close">
          <div class="title">{{ title }}</div>
          <div class="column-right-buttons">
            <div v-if="isBack" class="modal-close" @click="backHandler">
              <IconBackWithColor />
            </div>
            <div class="modal-close" @click="closeHandler">
              <IconCloseWithColor />
            </div>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
import IconCloseWithColor from "./IconCloseWithColor.vue";
import IconBackWithColor from "./IconBackWithColor.vue";

const slideInClass = "animate__slideInRight";
const slideOutClass = "animate__slideOutRight";

export default defineComponent({
  name: "ModalDrawer",
  components: { IconCloseWithColor, IconBackWithColor },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    isClosing: {
      type: Boolean,
      required: false,
      default: false,
    },
    isBack: {
      type: Boolean,
      required: false,
      default: false,
    },
    handleBack: {
      type: Function,
      required: false,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const animation = ref<string>(slideInClass);

    const closeHandler = (): void => {
      emit("close");
    };

    const backHandler = (): void => {
      props.handleBack && props.handleBack();
    };

    return {
      ...toRefs(props),
      animation,
      slideOutClass,
      slideInClass,
      closeHandler,
      backHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/main.scss";
@import "../../styles/utils.scss";

.wrapper--modal-drawer {
  position: absolute;
  width: 100vw;
  height: 100vh;
  height: calc(100vh - 104px);
  background: transparent;
  z-index: 100;
  @media (min-width: $lg) {
    height: calc(100vh - 110px);
  }
}

.modal {
  display: none; /* Hidden by default */
  position: fixed;
  z-index: 10;
  top: 104px;
  right: 0px;
  width: 544px;
  height: calc(100% - 104px);
  text-align: center;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: -1px 0px 3px rgba(0, 0, 0, 0.1);
  @media (min-width: $lg) {
    top: 110px;
    height: calc(100% - 110px);
  }
}
.modal.show {
  display: flex;
}

.modal-content {
  border-radius: 6px;
  background-color: $gray-1;
  border: 0px solid transparent;
  padding: 46px 40px !important;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media (min-width: $xs) {
    width: 375px;
  }
  @media (min-width: $sm) {
    width: 544px;
  }
}

.row-title-close {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  display: flex;
  justify-content: flex-start;
  font-style: normal;
  font-weight: 590;
  font-size: rem(22);
  line-height: 27px;
  letter-spacing: -0.02em;
  color: $gray-5;
}

.modal-close {
  width: 40px;
  height: 40px;
  border: 1px solid $gray-3;
  border-radius: 30px;
  color: $gray-3;
  font-size: 30px;
  font-weight: 10;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: $astar-blue;
    border-color: $astar-blue;
  }
}

.column-right-buttons {
  display: flex;
  flex-direction: row;
  column-gap: 16px;
}

.body--dark {
  .modal {
    background-color: $gray-5;
    box-shadow: -2px 0px 6px rgba(0, 0, 0, 0.25);

    .modal-content {
      background-color: $modal-bg-dark;
      box-shadow: -5px 0px 20px 5px rgba(0, 0, 0, 0.8);

      .title {
        color: $gray-1;
      }
    }
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
  .modal {
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    backdrop-filter: blur(8px);
    @supports (-moz-appearance: none) {
      background: $backdrop-transparent-dark-firefox !important;
    }
  }
  .modal-content {
    width: 100% !important;
    height: auto;
    position: absolute;
    top: 0;
    margin: 0;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 40px;
    box-shadow: -5px 2px 8px 4px rgba(0, 0, 0, 0.5);
  }
  .title {
    margin-left: 45px;
  }
  .modal-close {
    margin-right: 40px;
  }
}
</style>
