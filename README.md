# Astar-UI

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
