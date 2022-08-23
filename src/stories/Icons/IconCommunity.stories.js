import IconBase from "packages/Icons/src/IconBase.vue";
import IconCommunity from "packages/Icons/src/IconCommunity.vue";

export default {
  title: 'Icons/IconCommunity',
  component: IconCommunity
};

const Template = (args) => ({
  components: { IconBase, IconCommunity },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconCommunity /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
};
