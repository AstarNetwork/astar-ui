import IconBase from "packages/Icons/src/IconBase.vue";
import IconTelegram from "packages/Icons/src/IconTelegram.vue";

export default {
  title: 'Icons/IconTelegram',
  component: IconTelegram
};

const Template = (args) => ({
  components: { IconBase, IconTelegram },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconTelegram /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
  viewBox: "0 0 512 512"
};
