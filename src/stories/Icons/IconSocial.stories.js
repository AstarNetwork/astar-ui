import IconSocial from "packages/Icons/src/IconSocial.vue";

export default {
  title: "Icons/IconSocial",
  component: IconSocial,
};

export const DefaultIcon = () => ({
  components: { IconSocial },
  template: `
    <div style="display: flex; column-gap: 8px;">
      <div v-for="(icon, index) in
        ['twitter', 'discord', 'reddit', 'facebook', 'youtube', 'instagram', 'tiktok']"
        :key="index"
      >
        <IconSocial :icon="icon" />
      </div>
    </div>
    `,
});
