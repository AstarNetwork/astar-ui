const fs = require('fs-extra')
const handlebars = require('handlebars')
const { resolve } = require('path')

const getTplFilePath = (meta) => ({
  // docs
  readme: {
    from: './.template/docs/README.md.tpl',
    to: `../../packages/${meta.compName}/docs/README.md`
  },
  demo: {
    from: './.template/docs/demo.vue.tpl',
    to: `../../packages/${meta.compName}/docs/demo.vue`
  },
  // src
  vue: {
    from: './.template/src/index.vue.tpl',
    to: `../../packages/${meta.compName}/src/index.vue`
  },
  install: {
    from: './.template/index.ts.tpl',
    to: `../../packages/${meta.compName}/index.ts`
  },
})

const compFilesTplReplacer = (meta) => {
  const filePaths = getTplFilePath(meta)
  Object.keys(filePaths).forEach(key => {
    const fileTpl = fs.readFileSync(resolve(__dirname, filePaths[key].from), 'utf-8')
    const fileContent = handlebars.compile(fileTpl)(meta)
    fs.outputFile(resolve(__dirname, filePaths[key].to), fileContent, err => {
      if (err) console.log(err)
    })
  })
}

// packages/list.json
const listJsonTplReplacer = (meta) => {
  const listFilePath = '../../packages/list.json'
  const listFileTpl = fs.readFileSync(resolve(__dirname, listFilePath), 'utf-8')
  const listFileContent = JSON.parse(listFileTpl)
  listFileContent.push(meta)
  const newListFileContentFile = JSON.stringify(listFileContent, null, 2)
  fs.writeFile(resolve(__dirname, listFilePath), newListFileContentFile, err => {
    if (err) console.log(err)
  })
  return listFileContent
}

// router.ts
const routerTplReplacer = (listFileContent) => {
  const routerFileFrom = './.template/router.ts.tpl'
  const routerFileTo = '../../src/router.ts'
  const routerFileTpl = fs.readFileSync(resolve(__dirname, routerFileFrom), 'utf-8')
  const routerMeta = {
    routes: listFileContent.map(comp => {
      return `{
    title: '${comp.compZhName}',
    name: '${comp.compName}',
    path: '/components/${comp.compName}',
    component: () => import('packages/${comp.compName}/docs/README.md'),
  }`
    })
  }
  const routerFileContent = handlebars.compile(routerFileTpl, { noEscape: true })(routerMeta)
  fs.outputFile(resolve(__dirname, routerFileTo), routerFileContent, err => {
    if (err) console.log(err)
  })
}

// install.ts
const installTsTplReplacer = (listFileContent) => {
  const installFileFrom = './.template/install.ts.tpl'
  const installFileTo = '../../packages/index.ts'
  const installFileTpl = fs.readFileSync(resolve(__dirname, installFileFrom), 'utf-8')
  const installMeta = {
    importPlugins: listFileContent.map(({ compName }) => `import { ${compName}Plugin } from './${compName}';`).join('\n'),
    installPlugins: listFileContent.map(({ compName }) => `${compName}Plugin.install?.(app);`).join('\n    '),
    exportPlugins: listFileContent.map(({ compName }) => `export * from './${compName}'`).join('\n'),
  }
  const installFileContent = handlebars.compile(installFileTpl, { noEscape: true })(installMeta)
  fs.outputFile(resolve(__dirname, installFileTo), installFileContent, err => {
    if (err) console.log(err)
  })
}

module.exports = (meta) => {
  compFilesTplReplacer(meta)
  const listFileContent = listJsonTplReplacer(meta)
  routerTplReplacer(listFileContent)
  installTsTplReplacer(listFileContent)
}
