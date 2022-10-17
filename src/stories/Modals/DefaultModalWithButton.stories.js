import DefaultModal from "packages/Modals/src/DefaultModal.vue";
import Button from "packages/Buttons/src/Button.vue";

export default {
  title: 'Modals/DefaultModalWithButton',
  component: DefaultModal,
};

const Template = (args) => ({
  components: { DefaultModal, Button },
  setup() {
    return { args };
  },
  template: `
    <DefaultModal v-bind="args">
      <h3>Test</h3>
      <Button width='400' height='42'>Confirm</Button>
    </DefaultModal>
  `,
});

export const TemplateModal = Template.bind({});
TemplateModal.args = {
  title: 'modal title',
  width: 544,
  height: 250,
  show: true,
};