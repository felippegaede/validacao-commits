#!/bin/bash
originalPath=`pwd`

echo "
  {
    'name': 'validacao-commits',
    'devDependencies': {
      '@commitlint/cli': '^11.0.0',
      '@commitlint/config-conventional': '^11.0.0',
      'commitizen': '^4.2.1',
      'cz-conventional-changelog': '^3.3.0',
      'husky': '^4.3.0'
    }
  }
" > package.json
npm i
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
./node_modules/.bin/commitizen init cz-conventional-changelog --save-dev --save-exact

echo "export NVM_DIR='$HOME/.nvm' [ -s '$NVM_DIR/nvm.sh' ] && \. '$NVM_DIR/nvm.sh'" > .huskyrc
echo "node_modules/" > .gitignore