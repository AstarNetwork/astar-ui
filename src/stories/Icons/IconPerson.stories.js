import IconPerson from "packages/Icons/src/IconPerson.vue";

export default {
  title: 'Icons/IconPerson',
  component: IconPerson
};

export const DefaultIcon = () => ({
  components: { IconPerson },
  template: '<IconPerson />',
});
