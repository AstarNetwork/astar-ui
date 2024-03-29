import ModalDrawer from "packages/Modals/src/ModalDrawer.vue";

export default {
  title: 'Modals/ModalDrawer',
  component: ModalDrawer,
};

const Template = (args) => ({
  components: { ModalDrawer },
  setup() {
    return { args };
  },
  template: '<ModalDrawer v-bind="args"><div>Test</div></ModalDrawer>',
});

export const DefaultModal = Template.bind({});
DefaultModal.args = {
  title: 'modal title',
  show: true,
  isClosing: false,
};

// export const DefaultModalDark = Template.bind({});
// DefaultModalDark.args = DefaultModal.args;
// DefaultModalDark.decorators = [() => ({ template: '<div class="body--dark"><story /></div>' })];