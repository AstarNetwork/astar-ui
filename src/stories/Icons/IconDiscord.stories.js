import IconBase from "packages/Icons/src/IconBase.vue";
import IconDiscord from "packages/Icons/src/IconDiscord.vue";

export default {
  title: 'Icons/IconDiscord',
  component: IconDiscord
};

const Template = (args) => ({
  components: { IconBase, IconDiscord },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconDiscord /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
  viewBox: "0 0 512 512"
};
