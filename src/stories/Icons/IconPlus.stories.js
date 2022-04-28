import IconBase from "packages/Icons/src/IconBase.vue";
import IconPlus from "packages/Icons/src/IconPlus.vue";

export default {
  title: 'Icons/IconPlus',
  component: IconPlus
};

const Template = (args) => ({
  components: { IconBase, IconPlus },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconPlus /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25
};
