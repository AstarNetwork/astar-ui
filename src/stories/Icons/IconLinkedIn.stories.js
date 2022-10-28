import IconBase from "packages/Icons/src/IconBase.vue";
import IconLinkedIn from "packages/Icons/src/IconLinkedIn.vue";

export default {
  title: "Icons/IconLinkedIn",
  component: IconLinkedIn,
};

const Template = (args) => ({
  components: { IconBase, IconLinkedIn },
  setup() {
    return { args };
  },
  template: '<IconBase v-bind="args"><IconLinkedIn /></IconBase>',
});

export const DefaultIconBase = Template.bind({});
DefaultIconBase.args = {
  width: 25,
  height: 25,
  viewBox: "0 0 72 72",
};
