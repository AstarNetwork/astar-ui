import IconBase from "packages/Icons/src/IconBase.vue";
import IconReddit from "packages/Icons/src/IconReddit.vue";

export default {
  title: 'Icons/IconReddit',
  component: IconReddit
};

const Template = (args) => ({
  components: { IconBase, IconReddit },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconReddit /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
};
