import IconBase from "packages/Icons/src/IconBase.vue";
import IconOutlineMoon from "packages/Icons/src/IconOutlineMoon.vue";

export default {
  title: 'Icons/IconOutlineMoon',
  component: IconOutlineMoon
};

const Template = (args) => ({
  components: { IconBase, IconOutlineMoon },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconOutlineMoon /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
  viewBox: "0 0 24 24"
};

