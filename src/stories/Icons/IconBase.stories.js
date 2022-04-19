import IconBase from "packages/Icons/src/IconBase.vue";
import IconAssets from "packages/Icons/src/IconAssets.vue";

export default {
  title: 'Icons/IconBase',
  component: IconBase
};

const Template = (args) => ({
  components: { IconBase, IconAssets },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconAssets /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 150,
  height: 150,
};
