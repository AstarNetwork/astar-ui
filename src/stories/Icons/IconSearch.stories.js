import IconSearch from "packages/Icons/src/IconSearch.vue";

export default {
  title: 'Icons/IconSearch',
  component: IconSearch
};

export const DefaultIcon = () => ({
  components: { IconSearch },
  template: '<IconSearch />',
});
