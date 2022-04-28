import IconBase from "packages/Icons/src/IconBase.vue";
import IconTwitter from "packages/Icons/src/IconTwitter.vue";

export default {
  title: 'Icons/IconTwitter',
  component: IconTwitter
};

const Template = (args) => ({
  components: { IconBase, IconTwitter },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconTwitter /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
  viewBox: "0 0 512 512"
};
