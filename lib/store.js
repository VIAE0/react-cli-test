// 所有配置信息项

module.exports = {
  // 创建目录名
  dirname: '',
  cmd: '',
  // npm 版本 url
  npmVersionUrl: 'https://registry.npmjs.org/rvc-cli/latest',
  // 选项
  options: {
    eslint: false,
    babel: false,
    typescript: false,
    // 移动端布局
    mobileLayout: false,
    pug: false,
    // css 预处理器
    precss: 'css',
    answers: [],
    //rc-cli新增
    dependencies: [
      {
          name: '@babel/core',
          version: '7.5.5'
      },
      {
          name: '@babel/helper-module-imports',
          version: '7.0.0'
      },
      {
          name: '@babel/plugin-proposal-class-properties',
          version: '7.5.5'
      },
      {
          name: '@babel/plugin-proposal-decorators',
          version: '7.6.0'
      },
      {
          name: '@babel/plugin-transform-runtime',
          version: '7.5.5'
      },
      {
          name: '@babel/preset-env',
          version: '7.5.5'
      },
      {
          name: '@babel/preset-react',
          version: '7.0.0'
      },
      {
          name: '@babel/runtime',
          version: '7.6.0'
      },
      {
          name: '@babel/runtime-corejs2',
          version: '7.6.0'
      },
      {
          name: 'autoprefixer',
          version: '9.7.1'
      },
      {
          name: 'babel-eslint',
          version: '10.0.3'
      },
      {
          name: 'babel-loader',
          version: '8.0.6'
      },
      {
          name: 'babel-plugin-transform-async-to-module-method',
          version: '6.24.1'
      },
      {
          name: 'babel-preset-power-assert',
          version: '3.0.0'
      },
      {
          name: 'core-decorators',
          version: '0.20.0'
      },
      {
          name: 'css-loader',
          version: '3.2.0'
      },
      {
          name: 'ejs',
          version: '2.7.1'
      },
      {
          name: 'eslint',
          version: '6.4.0'
      },
      {
          name: 'eslint-config-airbnb',
          version: '18.0.1'
      },
      {
          name: 'eslint-loader',
          version: '3.0.1'
      },
      {
          name: 'eslint-plugin-babel',
          version: '5.3.0'
      },
      {
          name: 'eslint-plugin-import',
          version: '2.18.2'
      },
      {
          name: 'eslint-plugin-jsx-a11y',
          version: '6.2.3'
      },
      {
          name: 'eslint-plugin-react',
          version: '7.14.3'
      },
      {
          name: 'eslint-plugin-react-hooks',
          version: '1.7.0'
      },
      {
          name: 'express',
          version: '4.17.1'
      },
      {
          name: 'file-loader',
          version: '4.2.0'
      },
      {
          name: 'html-loader',
          version: '0.5.5'
      },
      {
          name: 'html-webpack-plugin',
          version: '3.2.0'
      },
      {
          name: 'jquery',
          version: '3.4.1'
      },
      {
          name: 'less',
          version: '3.10.3'
      },
      {
          name: 'less-loader',
          version: '5.0.0'
      },
      {
          name: 'mocha',
          version: '6.2.0'
      },
      {
          name: 'mocha-loader',
          version: '3.0.0'
      },
      {
          name: 'node-sass',
          version: '4.13.0'
      },
      {
          name: 'postcss-loader',
          version: '3.0.0'
      },
      {
          name: 'power-assert',
          version: '1.6.1'
      },
      {
          name: 'react-hot-loader',
          version: '4.12.14'
      },
      {
          name: 'redux-immutable-state-invariant',
          version: '2.1.0'
      },
      {
          name: 'sass',
          version: '1.23.3'
      },
      {
          name: 'sass-loader',
          version: '8.0.0'
      },
      {
          name: 'sass-resources-loader',
          version: '2.0.1'
      },
      {
          name: 'style-loader',
          version: '0.23.1'
      },
      {
          name: 'uglifyjs-webpack-plugin',
          version: '2.2.0'
      },
      {
          name: 'webpack',
          version: '4.39.3'
      },
      {
          name: 'webpack-cli',
          version: '3.3.7'
      },
      {
          name: 'webpack-dev-middleware',
          version: '3.7.1'
      },
      {
          name: 'webpack-dev-server',
          version: '3.8.0'
      },
    ],
  },
  // 选项列表
  inquirerList: {
    name: 'options',
    type: 'checkbox',
    message: 'Check the features needed for your project',
    choices: [
      {
        name: 'Babel',
        value: 'babel',
        checked: true
      },
      {
        name: 'Eslint',
        value: 'eslint',
        checked: true
      },
      {
        name: 'Typescript',
        value: 'typescript',
      },
      {
        name: 'CSS Pre-processors',
        value: 'precss'
      },
      {
        name: 'Pug(Jade)',
        value: 'pug'
      },
      {
        name: 'Mobile layout',
        value: 'mobileLayout'
      },
    ]
  },
  inquirerPrecssList: {
    name: 'Precss',
    type: 'list',
    message: 'Choose the CSS Pre-processors needed for your project',
    choices: [
      {
        name: 'Sass',
        value: 'scss',
      },
      {
        name: 'Less',
        value: 'less',
      },
      {
        name: 'Stylus',
        value: 'styl',
      },
    ]
  },
  // 预设依赖及版本信息
  dependencies: {
    babel: [
      {
        name: '@babel/runtime',
        version: '7.4.5'
      },
      {
        name: '@babel/plugin-transform-runtime',
        version: '7.4.4'
      },
      {
        name: '@babel/core',
        version: '7.4.5'
      },
      {
        name: '@babel/preset-env',
        version: '7.4.5'
      },
      {
        name: 'babel-loader',
        version: '8.0.6'
      },
    ],
    eslint: [
      {
        name: 'babel-eslint',
        version: '10.0.1'
      },
      {
        name: 'eslint-loader',
        version: '2.1.2'
      },
      {
        name: 'eslint',
        version: '5.16.0'
      },
    ],
    typescript: [
      {
        name: 'typescript',
        version: '3.5.1'
      },
      {
        name: 'ts-loader',
        version: '6.0.2'
      },
      {
        name: 'tslint',
        version: '5.17.0'
      },
    ],
    pug: [
      {
        name: 'pug',
        version: '2.0.3'
      },
      {
        name: 'pug-loader',
        version: '2.4.0'
      },
    ],
    mobileLayout: [
      {
        name: 'px2rem-loader',
        version: '0.1.9'
      },
      {
        name: 'hotcss',
        version: '2.2.1'
      },
    ],
    scss: [
      {
        name: 'node-sass',
        version: '4.12.0'
      },
      {
        name: 'sass-loader',
        version: '7.1.0'
      },
    ],
    less: [
      {
        name: 'less-loader',
        version: '5.0.0'
      },
      {
        name: 'less',
        version: '3.9.0'
      },
    ],
    styl: [
      {
        name: 'stylus-loader',
        version: '3.0.2'
      },
      {
        name: 'stylus',
        version: '0.54.5'
      },
    ],
  },
};