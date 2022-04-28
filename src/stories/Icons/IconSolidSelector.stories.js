import IconBase from "packages/Icons/src/IconBase.vue";
import IconSolidSelector from "packages/Icons/src/IconSolidSelector.vue";

export default {
  title: 'Icons/IconSolidSelector',
  component: IconSolidSelector
};

const Template = (args) => ({
  components: { IconBase, IconSolidSelector },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconSolidSelector /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25
};
