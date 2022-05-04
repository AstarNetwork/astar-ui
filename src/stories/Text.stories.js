import Text from "packages/Text/src/Text.vue";

export default {
  title: 'Text',
  component: Text,
};

export const Text1 = () => ({
  components: { Text },
  template: '<Text type="H1">Text</Text>',
});

export const Text2 = () => ({
  components: { Text },
  template: '<Text type="H2">Text</Text>',
});

export const Text3 = () => ({
  components: { Text },
  template: '<Text type="H3">Text</Text>',
});

export const Text4 = () => ({
  components: { Text },
  template: '<Text type="H4">Text</Text>',
});

export const Text5 = () => ({
  components: { Text },
  template: '<Text type="H5">Text</Text>',
});

export const Text6 = () => ({
  components: { Text },
  template: '<Text type="H6">Text</Text>',
});

export const Text7 = () => ({
  components: { Text },
  template: '<Text type="H7">Text</Text>',
});