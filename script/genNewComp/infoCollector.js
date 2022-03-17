const inquirer = require('inquirer')
const fs = require('fs-extra')
const { resolve } = require('path')

const listFilePath = '../../packages/list.json'

const RegxMap = {
  IS_COMP_NAME: /^[A-Z]/,
}

const kebabCase = string => string
  .replace(/([a-z])([A-Z])/g, "$1-$2")
  .replace(/[\s_]+/g, '-')
  .toLowerCase();

module.exports = async () => {
  const meta = await inquirer
    .prompt([
      {
        type: 'input',
        message: 'input',
        name: 'compName',
        validate(answer) {
          const done = this.async()
          const validateRes = RegxMap.IS_COMP_NAME.test(answer)
          if (!validateRes) {
            done('input')
            return
          }
          const listData = fs.readJSONSync(resolve(__dirname, listFilePath))
          if (listData.find(item => item.compName === answer)) {
            done('input')
            return
          }
          done(null, true)
        }
      },
      {
        type: 'input',
        message: 'input',
        name: 'compDesc',
        default: 'input'
      }
    ])
  const { compName } = meta
  meta.compClassName = kebabCase(compName)
  return meta
}