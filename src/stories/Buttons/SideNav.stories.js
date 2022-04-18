import SideNav from "../../../packages/Buttons/src/SideNav.vue";

export default {
  title: 'Buttons/SideNav',
  component: SideNav
};

export const DefaultButton = () => ({
  components: { SideNav },
  template: '<SideNav title="Assets">Test</SideNav>',
});
