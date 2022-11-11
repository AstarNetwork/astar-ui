import IconBase from "packages/Icons/src/IconBase.vue";
import IconInstagram from "packages/Icons/src/IconInstagram.vue";

export default {
  title: 'Icons/IconInstagram',
  component: IconInstagram
};

const Template = (args) => ({
  components: { IconBase, IconInstagram },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconInstagram /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 18,
  height: 18,
  viewBox: "0 0 18 18"
};
