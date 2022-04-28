import IconBase from "packages/Icons/src/IconBase.vue";
import IconGithub from "packages/Icons/src/IconGithub.vue";

export default {
  title: 'Icons/IconGithub',
  component: IconGithub
};

const Template = (args) => ({
  components: { IconBase, IconGithub },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconGithub /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
  viewBox: "0 0 512 512"
};
