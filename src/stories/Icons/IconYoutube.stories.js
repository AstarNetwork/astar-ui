import IconBase from "packages/Icons/src/IconBase.vue";
import IconYoutube from "packages/Icons/src/IconYoutube.vue";

export default {
  title: 'Icons/IconYoutube',
  component: IconYoutube
};

const Template = (args) => ({
  components: { IconBase, IconYoutube },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconYoutube /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
};
