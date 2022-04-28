import IconBase from "packages/Icons/src/IconBase.vue";
import IconOutlineSun from "packages/Icons/src/IconOutlineSun.vue";

export default {
  title: 'Icons/IconOutlineSun',
  component: IconOutlineSun
};

const Template = (args) => ({
  components: { IconBase, IconOutlineSun },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconOutlineSun /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
  viewBox: "0 0 24 24"
};
