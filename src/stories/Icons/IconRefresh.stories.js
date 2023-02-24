import IconBase from "packages/Icons/src/IconBase.vue";
import IconRefresh from "packages/Icons/src/IconRefresh.vue";

export default {
  title: "Icons/IconRefresh",
  component: IconRefresh,
};

const Template = (args) => ({
  components: { IconBase, IconRefresh },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconRefresh /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
};
