import Header from "packages/Header/src/Header.vue";

export default {
  title: 'Header/Header',
  component: Header,
};

const Template = (args) => ({
  components: { Header },
  setup() {
    return { ...args };
  },
  template: '<Header :title="title" />',
});

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
  title: 'header title',
};

// export const DefaultHeaderDark = Template.bind({});
// DefaultHeaderDark.args = DefaultHeader.args;
// DefaultHeaderDark.decorators = [() => ({ template: '<div class="body--dark"><story /></div>' })];