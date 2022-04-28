import { App, Plugin } from 'vue';
import IconBase from './src/IconBase.vue';
import Icon3dots from './src/Icon3dots.vue';
import IconAccountSample from './src/IconAccountSample.vue';
import IconAssets from './src/IconAssets.vue';
import IconBridge from './src/IconBridge.vue';
import IconClose from './src/IconClose.vue';
import IconCopy from './src/IconCopy.vue';
import IconDappStaking from './src/IconDappStaking.vue';
import IconDashboard from './src/IconDashboard.vue';
import IconDiscord from './src/IconDiscord.vue';
import IconDocument from './src/IconDocument.vue';
import IconExternalLink from './src/IconExternalLink.vue';
import IconGithub from './src/IconGithub.vue';
import IconNetwork from './src/IconNetwork.vue';
import IconOutlineMoon from './src/IconOutlineMoon.vue';
import IconOutlineSun from './src/IconOutlineSun.vue';
import IconPlus from './src/IconPlus.vue';
import IconSearch from './src/IconSearch.vue';
import IconSolidSelector from './src/IconSolidSelector.vue';
import IconTelegram from './src/IconTelegram.vue';
import IconTwitter from './src/IconTwitter.vue';
import IconWallet from './src/IconWallet.vue';
 
export const IconsPlugin: Plugin = {
  install(app: App) {
    app.component('astar-icon-base', IconBase);
    app.component('astar-icon-3dots', Icon3dots);
    app.component('astar-icon-account-sample', IconAccountSample);
    app.component('astar-icon-assets', IconAssets);
    app.component('astar-icon-bridge', IconBridge);
    app.component('astar-icon-close', IconClose);
    app.component('astar-icon-copy', IconCopy);
    app.component('astar-icon-dapp-staking', IconDappStaking);
    app.component('astar-icon-dashboard', IconDashboard);
    app.component('astar-icon-discord', IconDiscord);
    app.component('astar-icon-document', IconDocument);
    app.component('astar-icon-external-link', IconExternalLink);
    app.component('astar-icon-github', IconGithub);
    app.component('astar-icon-network', IconNetwork);
    app.component('astar-icon-outline-moon', IconOutlineMoon);
    app.component('astar-icon-outline-sun', IconOutlineSun);
    app.component('astar-icon-plus', IconPlus);
    app.component('astar-icon-search', IconSearch);
    app.component('astar-icon-solid-selector', IconSolidSelector);
    app.component('astar-icon-telegram', IconTelegram);
    app.component('astar-icon-twitter', IconTwitter);
    app.component('astar-icon-wallet', IconWallet);
  },
};

export {
  IconBase,
  Icon3dots,
  IconAccountSample,
  IconAssets,
  IconBridge,
  IconClose,
  IconCopy,
  IconDappStaking,
  IconDashboard,
  IconDiscord,
  IconDocument,
  IconExternalLink,
  IconGithub,
  IconNetwork,
  IconOutlineMoon,
  IconOutlineSun,
  IconPlus,
  IconSearch,
  IconSolidSelector,
  IconTelegram,
  IconTwitter,
  IconWallet,
};
