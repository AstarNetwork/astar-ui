import IconBase from "packages/Icons/src/IconBase.vue";
import IconForum from "packages/Icons/src/IconForum.vue";

export default {
  title: 'Icons/IconForum',
  component: IconForum
};

const Template = (args) => ({
  components: { IconBase, IconForum },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconForum /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
};
