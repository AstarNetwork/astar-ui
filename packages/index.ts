/* eslint-disable */

import { App, Plugin } from 'vue';

import { TextPlugin } from './Text';
import { ModalsPlugin } from './Modals';
import { IconButtonsPlugin } from './IconButtons';
import { HeaderPlugin } from './Header';
import { ButtonsPlugin } from './Buttons';
import { IconsPlugin } from './Icons';

const AstarUIPlugin: Plugin = {
  install(app: App) {
    TextPlugin.install?.(app);
    ModalsPlugin.install?.(app);
    IconButtonsPlugin.install?.(app);
    HeaderPlugin.install?.(app);
    ButtonsPlugin.install?.(app);
    IconsPlugin.install?.(app);
  },
};

export default AstarUIPlugin;

export * from './Text'
export * from './Modals'
export * from './IconButtons'
export * from './Header'
export * from './Buttons'
export * from './Icons'