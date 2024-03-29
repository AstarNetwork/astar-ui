<template>
  <div
    :class="[
      'noti',
      alertType,
      'animate__animated',
      show && 'show',
      show ? 'animate__fadeInRight' : 'animate__fadeOutRight',
    ]"
  >
    <div class="noti-content">
      <div class="row--close">
        <div class="column--title">
          <span v-if="isSuccessType" class="icon--check">
            <IconCircleCheck size="20" />
          </span>
          <span v-else class="icon--check">
            <IconWarning size="20" />
          </span>
          {{ alertTypeTitle }}
        </div>
        <div class="column--close" @click="close">
          <IconClose />
        </div>
      </div>
      <div class="message">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType, computed } from 'vue';
import Button from '../../Buttons/src/Button.vue';
import IconCircleCheck from '../../Icons/src/IconCircleCheck.vue';
import IconWarning from '../../Icons/src/IconWarning.vue';
import IconClose from './IconClose.vue';

export enum AlertType {
  Success = 'success',
  Warning = 'warning',
  Error = 'error',
}

export default defineComponent({
  name: 'NotificationBar',
  components: { Button, IconClose, IconCircleCheck, IconWarning },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    alertType: {
      type: String as PropType<AlertType>,
      required: true,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const close = () => {
      emit('close');
    };

    const alertTypeTitle = computed(() => {
      if (props.alertType === AlertType.Success) {
        return 'Success';
      } else if (props.alertType === AlertType.Warning) {
        return 'Note';
      } else {
        return 'Error';
      }
    });

    const isSuccessType = computed(() => props.alertType === AlertType.Success);

    return {
      ...toRefs(props),
      alertTypeTitle,
      isSuccessType,
      close,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../../styles/main.scss";
@import "../../styles/utils.scss";
.noti {
  display: none;
  border: 1px solid $astar-blue;
  border-radius: 6px;
  color: $navy-1;
  width: 323px;
  background: rgb(240, 247, 255);
  mix-blend-mode: normal;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    background: $astar-blue;
    height: 100%;
    width: 8px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .icon--check {
    color: $astar-blue;
    margin-right: 8px;
  }
}

.noti-content {
  padding: 16px;
}

.warning {
  background: #fcf3d4;
  border-color: $warning-yellow;

  &::before {
    background: $warning-yellow;
  }
  .icon--check {
    color: $warning-yellow;
  }
}

.error {
  background: #feede7;
  border-color: $warning-red;

  &::before {
    background: $warning-red;
  }
  .icon--check {
    color: $warning-red;
  }
}

.noti.show {
  display: block;
}

.row--close {
  display: flex;
  color: #b1b7c1;
  justify-content: space-between;
  font-weight: 330;
}

.column--title {
  display: flex;
  justify-content: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: $navy-1;
}

.column--close {
  width: 16px;
  height: 16px;
  border: 1px solid $gray-4;
  border-radius: 30px;
  color: $gray-4;
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

.message {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: $navy-1;
  text-align: left;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 8px;
}
.btn--check {
  width: 90%;
  height: 33px;
  margin-top: 10px;
}

.body--dark {
  .noti {
    background: #182735;
  }
  .column--title {
    color: $gray-1;
  }
  .column--close {
    color: $gray-4;
    border-color: $gray-4;
    &:hover {
      color: $astar-blue;
      border-color: $astar-blue;
    }
  }
  .message {
    color: $gray-1;
  }
}
</style>
