import IconBase from "packages/Icons/src/IconBase.vue";
import IconShare from "packages/Icons/src/IconShare.vue";

export default {
  title: "Icons/IconShare",
  component: IconShare,
};

const Template = (args) => ({
  components: { IconBase, IconShare },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconShare /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
};
