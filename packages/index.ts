/* eslint-disable */

import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { FooPlugin } from './Foo';
import { TextPlugin } from './Text';
import { ModalsPlugin } from './Modals';
import { IconButtonsPlugin } from './IconButtons';
import { HeaderPlugin } from './Header';
import { ButtonsPlugin } from './Buttons';

const AstarUIPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    FooPlugin.install?.(app);
    TextPlugin.install?.(app);
    ModalsPlugin.install?.(app);
    IconButtonsPlugin.install?.(app);
    HeaderPlugin.install?.(app);
    ButtonsPlugin.install?.(app);
  },
};

export default AstarUIPlugin;

export * from './Button'
export * from './Foo'
export * from './Text'
export * from './Modals'
export * from './IconButtons'
export * from './Header'
export * from './Buttons'