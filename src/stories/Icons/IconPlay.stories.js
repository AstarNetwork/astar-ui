import IconPlay from "packages/Icons/src/IconPlay.vue";

export default {
  title: "Icons/IconPlay",
  component: IconPlay,
};

export const DefaultIcon = () => ({
  components: { IconPlay },
  template: "<IconPlay />",
});
