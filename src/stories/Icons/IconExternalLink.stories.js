import IconExternalLink from "packages/Icons/src/IconExternalLink.vue";

export default {
  title: 'Icons/IconExternalLink',
  component: IconExternalLink
};

export const DefaultIcon = () => ({
  components: { IconExternalLink },
  template: '<IconExternalLink />',
});
