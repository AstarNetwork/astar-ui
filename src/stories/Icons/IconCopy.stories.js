import IconBase from "packages/Icons/src/IconBase.vue";
import IconCopy from "packages/Icons/src/IconCopy.vue";

export default {
  title: 'Icons/IconCopy',
  component: IconCopy
};

const Template = (args) => ({
  components: { IconBase, IconCopy },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconCopy /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
  viewBox: "0 0 24 24"
};
