import { App, Plugin } from 'vue';
import IconBase from './src/IconBase.vue';
import Icon3dots from './src/Icon3dots.vue';
import IconAssets from './src/IconAssets.vue';
import IconClose from './src/IconClose.vue';
import IconCopy from './src/IconCopy.vue';
import IconDappStaking from './src/IconDappStaking.vue';
import IconDashboard from './src/IconDashboard.vue';
import IconExternalLink from './src/IconExternalLink.vue';
import IconNetwork from './src/IconNetwork.vue';
import IconSearch from './src/IconSearch.vue';
import IconWallet from './src/IconWallet.vue';
 
export const IconsPlugin: Plugin = {
  install(app: App) {
    app.component('astar-icon-base', IconBase);
    app.component('astar-icon-3dots', Icon3dots);
    app.component('astar-icon-assets', IconAssets);
    app.component('astar-icon-close', IconClose);
    app.component('astar-icon-copy', IconCopy);
    app.component('astar-icon-dapp-staking', IconDappStaking);
    app.component('astar-icon-dashboard', IconDashboard);
    app.component('astar-icon-external-link', IconExternalLink);
    app.component('astar-icon-network', IconNetwork);
    app.component('astar-icon-search', IconSearch);
    app.component('astar-icon-wallet', IconWallet);
  },
};

export {
  IconBase,
  Icon3dots,
  IconAssets,
  IconClose,
  IconCopy,
  IconDappStaking,
  IconDashboard,
  IconExternalLink,
  IconNetwork,
  IconSearch,
  IconWallet,
};
