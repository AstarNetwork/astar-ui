import { App, Plugin } from "vue";
import IconBase from "./src/IconBase.vue";
import Icon3dots from "./src/Icon3dots.vue";
import IconAccountSample from "./src/IconAccountSample.vue";
import IconAssets from "./src/IconAssets.vue";
import IconBridge from "./src/IconBridge.vue";
import IconClose from "./src/IconClose.vue";
import IconCommunity from "./src/IconCommunity.vue";
import IconCopy from "./src/IconCopy.vue";
import IconDappStaking from "./src/IconDappStaking.vue";
import IconDashboard from "./src/IconDashboard.vue";
import IconDiscord from "./src/IconDiscord.vue";
import IconDocs from "./src/IconDocs.vue";
import IconDocument from "./src/IconDocument.vue";
import IconExternalLink from "./src/IconExternalLink.vue";
import IconForum from "./src/IconForum.vue";
import IconGithub from "./src/IconGithub.vue";
import IconNetwork from "./src/IconNetwork.vue";
import IconOutlineMoon from "./src/IconOutlineMoon.vue";
import IconOutlineSun from "./src/IconOutlineSun.vue";
import IconPlus from "./src/IconPlus.vue";
import IconReddit from "./src/IconReddit.vue";
import IconSearch from "./src/IconSearch.vue";
import IconSolidSelector from "./src/IconSolidSelector.vue";
import IconTelegram from "./src/IconTelegram.vue";
import IconTwitter from "./src/IconTwitter.vue";
import IconWallet from "./src/IconWallet.vue";
import IconHide from "./src/IconHide.vue";
import IconUnhide from "./src/IconUnhide.vue";
import IconHelp from "./src/IconHelp.vue";
import IconVert from "./src/IconVert.vue";
import IconGroup from "./src/IconGroup.vue";
import IconHistory from "./src/IconHistory.vue";
import IconSync from "./src/IconSync.vue";
import IconCircleCheck from "./src/IconCircleCheck.vue";
import IconExpand from "./src/IconExpand.vue";
import IconYoutube from "./src/IconYoutube.vue";

export const IconsPlugin: Plugin = {
  install(app: App) {
    app.component("astar-icon-base", IconBase);
    app.component("astar-icon-3dots", Icon3dots);
    app.component("astar-icon-account-sample", IconAccountSample);
    app.component("astar-icon-assets", IconAssets);
    app.component("astar-icon-bridge", IconBridge);
    app.component("astar-icon-close", IconClose);
    app.component("astar-icon-community", IconCommunity);
    app.component("astar-icon-copy", IconCopy);
    app.component("astar-icon-dapp-staking", IconDappStaking);
    app.component("astar-icon-dashboard", IconDashboard);
    app.component("astar-icon-discord", IconDiscord);
    app.component("astar-icon-docs", IconDocs);
    app.component("astar-icon-document", IconDocument);
    app.component("astar-icon-external-link", IconExternalLink);
    app.component("astar-icon-forum", IconForum);
    app.component("astar-icon-github", IconGithub);
    app.component("astar-icon-network", IconNetwork);
    app.component("astar-icon-outline-moon", IconOutlineMoon);
    app.component("astar-icon-outline-sun", IconOutlineSun);
    app.component("astar-icon-plus", IconPlus);
    app.component("astar-icon-reddit", IconReddit);
    app.component("astar-icon-search", IconSearch);
    app.component("astar-icon-solid-selector", IconSolidSelector);
    app.component("astar-icon-telegram", IconTelegram);
    app.component("astar-icon-twitter", IconTwitter);
    app.component("astar-icon-wallet", IconWallet);
    app.component("astar-icon-hide", IconHide);
    app.component("astar-icon-unhide", IconUnhide);
    app.component("astar-icon-help", IconHelp);
    app.component("astar-icon-vert", IconVert);
    app.component("astar-icon-history", IconHistory);
    app.component("astar-icon-group", IconGroup);
    app.component("astar-icon-sync", IconSync);
    app.component("astar-icon-expand", IconExpand);
    app.component("astar-icon-circle-check", IconCircleCheck);
    app.component("astar-icon-youtube", IconYoutube);
  },
};

export {
  IconBase,
  Icon3dots,
  IconAccountSample,
  IconAssets,
  IconBridge,
  IconClose,
  IconCommunity,
  IconCopy,
  IconDappStaking,
  IconDashboard,
  IconDiscord,
  IconDocs,
  IconDocument,
  IconExternalLink,
  IconForum,
  IconGithub,
  IconNetwork,
  IconOutlineMoon,
  IconOutlineSun,
  IconPlus,
  IconReddit,
  IconSearch,
  IconSolidSelector,
  IconTelegram,
  IconTwitter,
  IconWallet,
  IconHide,
  IconUnhide,
  IconHelp,
  IconVert,
  IconHistory,
  IconGroup,
  IconSync,
  IconCircleCheck,
  IconExpand,
  IconYoutube 
};
