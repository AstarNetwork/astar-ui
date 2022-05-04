import Spinner from "packages/Spinner/src/Spinner.vue";

export default {
  title: 'Spinner',
  component: Spinner,
};

export const DefaultSpinner = () => ({
  components: { Spinner },
  template: '<Spinner />',
});