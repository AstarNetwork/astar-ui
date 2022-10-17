import DefaultModal from "packages/Modals/src/DefaultModal.vue";

export default {
  title: 'Modals/DefaultModal',
  component: DefaultModal,
};

const Template = (args) => ({
  components: { DefaultModal },
  setup() {
    return { args };
  },
  template: '<DefaultModal v-bind="args"><div>Test</div></DefaultModal>',
});

export const TemplateModal = Template.bind({});
TemplateModal.args = {
  title: 'modal title',
  width: 400,
  height: 150,
  show: true,
};