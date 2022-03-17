/* eslint-disable */

import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { FooPlugin } from './Foo';

const MYKitPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    FooPlugin.install?.(app);
  },
};

export default MYKitPlugin;

export * from './Button'
export * from './Foo'