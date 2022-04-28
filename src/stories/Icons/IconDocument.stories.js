import IconBase from "packages/Icons/src/IconBase.vue";
import IconDocument from "packages/Icons/src/IconDocument.vue";

export default {
  title: 'Icons/IconDocument',
  component: IconDocument
};

const Template = (args) => ({
  components: { IconBase, IconDocument },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconDocument /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
  viewBox: "0 0 24 24"
};
