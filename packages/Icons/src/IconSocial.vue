<template>
  <img v-if="icon===SocialIcon.Twitter" src="../img/twitter.png" :alt="`${icon} icon`" :class="!isClass && 'default'" />

  <img v-if="icon===SocialIcon.Discord" src="../img/discord.png" :alt="`${icon} icon`" :class="!isClass && 'default'" />

  <img v-if="icon===SocialIcon.Reddit" src="../img/reddit.png" :alt="`${icon} icon`" :class="!isClass && 'default'" />

  <img v-if="icon===SocialIcon.Facebook" src="../img/facebook.png" :alt="`${icon} icon`" :class="!isClass && 'default'" />

  <img v-if="icon===SocialIcon.Youtube" src="../img/youtube.png" :alt="`${icon} icon`" :class="!isClass && 'default'" />

  <img v-if="icon===SocialIcon.Instagram" src="../img/instagram.png" :alt="`${icon} icon`" :class="!isClass && 'default'" />

  <img v-if="icon===SocialIcon.Ticktok" src="../img/tiktok.png" :alt="`${icon} icon`" :class="!isClass && 'default'" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

enum SocialIcon {
  Twitter = "twitter",
  Discord = 'discord',
  Reddit = 'reddit',
  Facebook = 'facebook',
  Youtube = 'youtube',
  Instagram = 'instagram',
  Ticktok = 'tiktok'
}

export default defineComponent({
  props:{
    isClass: {
      type: Boolean,
      required: false,
      default: false
    },
    icon: {
      type: Object as PropType<SocialIcon>,
      required: true,
    },
  },
  setup() {
    return { SocialIcon }
  }
});
</script>

<style scoped>
.default {
  border-radius: 100%;
  height: 60px;
  width:60px;
}
</style>
