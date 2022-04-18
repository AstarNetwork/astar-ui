import SimpleModal from "../../../packages/Modals/src/SimpleModal.vue";

export default {
  title: 'Modals/SimpleModal',
  component: SimpleModal,
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { SimpleModal },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    // Story args can be spread into the returned object
    return { args };
  },
  // Then, the spread values can be accessed directly in the template
  template: '<SimpleModal v-bind="args"><div>Test</div></SimpleModal>',
});

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  title: 'modal title',
  width: 400,
  height: 150,
  show: true,
  isAnimation: true
};
