// 根据配置写入文件

const fs = require('fs-extra');
const store = require('./store');
const version = require('../package.json').version;

// index.html 模板文件
const htmlTemp = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--<link rel="shortcut icon" href="./favicon.ico">-->
    <!--
      Notice the use of %PUBLIC_URL% in the tag above.
      It will be replaced with the URL of the 'public' folder during the build.
      Only files inside the 'public' folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running 'npm run build'.
    -->
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run 'npm start'.
      To create a production bundle, use 'npm run build'.
    -->
  </body>
</html>
`;


// config.js 配置文件
const configTemp = `var path = require('path');
var fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

// We support resolving modules according to 'NODE_PATH'.
// This lets you use absolute paths in imports inside large monorepos:
// https://github.com/facebookincubator/create-react-app/issues/253.

// It works similar to 'NODE_PATH' in Node itself:
// https://nodejs.org/api/modules.html#modules_loading_from_the_global_folders

// We will export 'nodePaths' as an array of absolute paths.
// It will then be used by Webpack configs.
// Jest doesn’t need this because it already handles 'NODE_PATH' out of the box.

// Note that unlike in Node, only *relative* paths from 'NODE_PATH' are honored.
// Otherwise, we risk importing Node.js core modules into an app instead of Webpack shims.
// https://github.com/facebookincubator/create-react-app/issues/1023#issuecomment-265344421

var nodePaths = (process.env.NODE_PATH || '')
  .split(process.platform === 'win32' ? ';' : ':')
  .filter(Boolean)
  .filter(folder => !path.isAbsolute(folder))
  .map(resolveApp);

// config after eject: we're in ./config/
module.exports = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  demoPublic: resolveApp('demo'),
  demoHtml: resolveApp('demo/index.html'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules'),
  nodePaths: nodePaths
};
`;

// package.json
const packageTemp = `{
    "name": "${store.dirname}",
    "version": "0.0.1",
    "description": "Rc HTML5 Project",
    "author": "",
    "license": "ISC",
    "main": "./src/index.js",
    "files": [
        "dist"
    ],
    "scripts": {
        "demo": "webpack-dev-server --open --config ./webpack.demo.conf.js",
        "lint": "eslint --ext .js --ext .jsx ./src",
        "lintfix": "eslint --ext .js --ext .jsx ./src --fix",
        "build": "webpack --mode production --config ./webpack.prod.conf.js",
        "test": "webpack-dev-server --open --config ./test/webpack.config.js",
        "prepublish": "cnpm run build"
    },
    "dependencies": {
      "@Rvc/Core": "^0.1.3",
      "antd": "^3.24.3",
      "axios": "^0.19.0",
      "connected-react-router": "^6.5.2",
      "fbjs": "^0.8.17",
      "history": "^4.10.1",
      "lodash": "^4.17.15",
      "prop-types": "^15.7.2",
      "qs": "^6.8.0",
      "react": "^16.10.0",
      "react-dom": "^16.10.0",
      "react-loadable": "^5.5.0",
      "react-redux": "^7.1.1",
      "react-router-dom": "^5.1.1",
      "redux": "^4.0.4",
      "redux-saga": "^1.1.1",
      "rxjs": "^6.5.3",
      "swiper": "^5.2.0",
      "url": "^0.11.0",
      "xml-js": "^1.6.11"
    }
}
`;

// tsconfig.json
const tsTemp = `{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}
`;
/**
 * 遍历创建文件
 * @param {string} dest 相对路径 + 文件名
 * @param {string} temp 文件模板
 */


const confList = [
  { // 创建配置文件
    dest: `./${store.dirname}/configs/paths.js`,
    temp: configTemp,
  },
  { // 创建package.json文件
    dest: `./${store.dirname}/package.json`,
    temp: packageTemp,
  },
  { //ts 配置文件
    dest: `./${store.dirname}/tsconfig.json`,
    temp: tsTemp,
  }
];

// 创建 ts 配置文件
// if (store.options.typescript) {
//   confList.push({
//     dest: `./${store.dirname}/tsconfig.json`,
//     temp: tsTemp,
//   });
// }

module.exports = function appendFiles() {
  confList.forEach(item => {
      console.log('appendfiles items',item)
      console.log('appendfiles items dest',item.dest)
    fs.appendFileSync(
      item.dest,
      item.temp,
      {
        flag: 'w'
      }
    );
  });
};
