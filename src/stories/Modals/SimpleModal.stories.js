import SimpleModal from "packages/Modals/src/SimpleModal.vue";

export default {
  title: 'Modals/SimpleModal',
  component: SimpleModal,
};

const Template = (args) => ({
  components: { SimpleModal },
  setup() {
    return { args };
  },
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

// export const DefaultModalDark = Template.bind({});
// DefaultModalDark.args = DefaultModal.args;
// DefaultModalDark.decorators = [() => ({ template: '<div class="body--dark"><story /></div>' })];