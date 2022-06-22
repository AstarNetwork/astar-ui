<template>
  <span :class="`text_${type}`">
    <slot></slot>
  </span>
</template>

<script lang="ts">
import { PropType, defineComponent, toRefs } from "vue";

enum EnumType {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  H7
}
export type TextType = keyof typeof EnumType;

export default defineComponent({
  name: "Text",
  props: {
    type: {
      required: true,
      type: String as PropType<TextType>,
      default: "H1"
    }
  },
  setup(props) {
    return {
      ...toRefs(props)
    };
  }
});
</script>

<style lang="css" scoped>
.text_H1 {
  /* 26 semibold */
  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 590;
  font-size: 1.625rem;
  line-height: 1.9375rem;
  /* identical to box height */
}

.text_H2 {
  /* 26 semibold */
  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 590;
  font-size: 1.375rem;
  line-height: 1.625rem;
  letter-spacing: -0.02em;
  /* identical to box height */
}

.text_H3 {
  /* 26 semibold */
  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.1875rem;
  /* identical to box height */
}

.text_H4 {
  /* 26 semibold */
  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.1875rem;
  /* identical to box height */
}

.text_H5 {
  /* 26 semibold */
  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  /* identical to box height */
}

.text_H6 {
  /* 26 semibold */
  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.0625rem;
  /* identical to box height */
}

.text_H7 {
  /* 26 semibold */
  font-family: "Inter", "SF Pro Text", "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 590;
  font-size: 0.75rem;
  line-height: 0.875rem;
  /* identical to box height */
}
</style>
