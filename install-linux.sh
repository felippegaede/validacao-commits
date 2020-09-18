#!/bin/bash
originalPath=`pwd`
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nodejs -y
sudo apt-get install npm -y
curl -O https://raw.githubusercontent.com/felippegaede/validacao-commits/felippe/.cz-config.js
curl -O https://raw.githubusercontent.com/felippegaede/validacao-commits/felippe/commitlint.config.js
echo '
  {
    "name": "validacao-commits",
    "authors": [
      "@ahsouza Aníbal Henrique",
      "@felippegaede Felippe Gaede"
    ],
    "husky": {
      "hooks": {
        "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
        "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true" 
      }
    },
    "scripts": {
      "commit": "./node_modules/cz-customizable/standalone.js"
  	},
    "devDependencies": {
      "@commitlint/cli": "^11.0.0",
      "@commitlint/config-conventional": "^11.0.0",
      "commitizen": "^4.2.1",
      "cz-conventional-changelog": "^3.3.0",
      "cz-customizable": "^6.3.0",
      "husky": "^4.3.0"
    }
  }
' > package.json
npm install
./node_modules/.bin/commitizen init cz-conventional-changelog --save-dev --save-exact
echo "export NVM_DIR='$HOME/.nvm' [ -s '$NVM_DIR/nvm.sh' ] && \. '$NVM_DIR/nvm.sh'" > .huskyrc
echo "node_modules/" > .gitignore
npm run commit