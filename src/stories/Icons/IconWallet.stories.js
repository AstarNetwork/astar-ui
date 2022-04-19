import IconWallet from "packages/Icons/src/IconWallet.vue";

export default {
  title: 'Icons/IconWallet',
  component: IconWallet
};

export const DefaultIcon = () => ({
  components: { IconWallet },
  template: '<IconWallet />',
});
