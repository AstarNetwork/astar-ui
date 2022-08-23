import IconBase from "packages/Icons/src/IconBase.vue";
import IconDocs from "packages/Icons/src/IconDocs.vue";

export default {
  title: 'Icons/IconDocs',
  component: IconDocs
};

const Template = (args) => ({
  components: { IconBase, IconDocs },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconDocs /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
};
