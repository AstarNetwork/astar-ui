import IconBase from "packages/Icons/src/IconBase.vue";
import IconFacebook from "packages/Icons/src/IconFacebook.vue";

export default {
  title: 'Icons/IconFacebook',
  component: IconFacebook
};

const Template = (args) => ({
  components: { IconBase, IconFacebook },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconFacebook /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 18,
  height: 18,
  viewBox: "0 0 18 18"
};
