# Astar-UI

## Tech stack
Vue3, SCSS, Storybook, Typescript, Vite

## Storybook
https://625fa762a035be003a9814c1-dmcehevpsl.chromatic.com/

## Project setup

### Install
```
yarn install
```

### Build Library
```
yarn build:lib
```

### Run Storybook
```
yarn storybook
```

### Build Storybook
```
yarn build-storybook
```

### Run Demo page (DEPRECATED)
```
yarn dev
```

### Run script for generating package (DEPRECATED)
```
yarn gen
```

### Build Docs (DEPRECATED)
```
yarn build:doc
```

## Usage Of Components Built
**As Component**
```
  import { Header } from 'astar-ui';
  ...
  components:{
    Header
  }
```

**As Plugin**
```
  import astarUI from 'astar-ui';
    ...
  app.use(astarUI)
```

then use like
```
  <astar-button @click="click" />
  <astar-simple-modal>Test</astar-simple-modal>
```

## How to contribute

### Implement components in `/packages`
```
[DirectoryName]
 > src
 >> [Component.vue]
 > index.ts (need to register as plugin, keep following the rule of component name :: app.component('astar-[component-name]', ComponentName) )
```

### Implement story for the component in `/src/stories`
refer: https://storybook.js.org/docs/vue/writing-stories/introduction

### Run storybook in local
```
yarn storybook
```

### Send PR for reviewing
Once it merged to `main`, it automatically deploy & publish to npm with new version in github action workflow.
**there's no need to update version manually or build library & storybook before sending PR.**

### View updated storybook
https://625fa762a035be003a9814c1-dmcehevpsl.chromatic.com/

### Use component
Update ui library version
then use like
```
  <astar-button @click="click" />
  <astar-simple-modal>Test</astar-simple-modal>
```