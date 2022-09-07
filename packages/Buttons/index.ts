import { App, Plugin } from 'vue';
import Button from './src/Button.vue';
import IrregularButton from './src/IrregularButton.vue';
import RadioBtn from './src/RadioBtn.vue';
import SmallButton from './src/SmallButton.vue';
import TextButton from './src/TextButton.vue';
 
export const ButtonsPlugin: Plugin = {
  install(app: App) {
    app.component('astar-button', Button);
    app.component('astar-irregular-button', IrregularButton);
    app.component('astar-radio-btn', RadioBtn);
    app.component('astar-small-button', SmallButton);
    app.component('astar-text-button', TextButton);
  },
};

export {
  Button,
  IrregularButton,
  RadioBtn,
  SmallButton,
  TextButton
};
