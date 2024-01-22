/* eslint-disable */

import { App, Plugin } from 'vue';

import { TextPlugin } from './Text';
import { SpinnerPlugin } from './Spinner';
import { ModalsPlugin } from './Modals';
import { HeaderPlugin } from './Header';
import { ButtonsPlugin } from './Buttons';
import { IconsPlugin } from './Icons';

const AstarUIPlugin: Plugin = {
  install(app: App) {
    TextPlugin.install?.(app);
    SpinnerPlugin.install?.(app);
    ModalsPlugin.install?.(app);
    HeaderPlugin.install?.(app);
    ButtonsPlugin.install?.(app);
    IconsPlugin.install?.(app);
  },
};

export default AstarUIPlugin;

export * from './Text';
export * from './Spinner';
export * from './Modals';
export * from './Header';
export * from './Buttons';
export * from './Icons';

export * from './export_type';
