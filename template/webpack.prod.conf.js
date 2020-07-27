const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const vendors = [];

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist/tutorial'),
    filename: 'bundle.js',
    library: '@Rvc/Tutorial',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'eslint-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader :'file-loader',
            options: {
              name: 'assets/img/[name]-[hash].[ext]'
            }
          }
        ] // ?name=[name].[ext] is only necessary to preserve the original file name
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },{
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader:'sass-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader:'sass-resources-loader',
            options:{
              resources: [
                './src/scenes/assets/css/reset.scss',
                './src/scenes/assets/css/home.scss'
              ]
            }
          }
        ]
      },{
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader:'file-loader',
        options:{
          name:'assets/fonts/[name]-[hash].[ext]'
        }
      },{
        test: /\.(csv|tsv)$/,
        loader:'csv-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      },{
        test: /\.xml$/,
        loader:'xml-loader',
        query:{
          name:'assets/[name]-[hash].[ext]'
        }
      },{
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: [
            ['@babel/plugin-proposal-decorators', {
              legacy: true,
            }],
            ["@babel/plugin-proposal-class-properties", { 
              loose: true 
            }],
            ['@babel/plugin-transform-runtime', {
              "corejs": 2
            }],
            ['babel-plugin-transform-async-to-module-method', {
              module: 'bluebird',
              method: 'coroutine'
            }]
          ]
        }
      }
    ]
  },
  externals: vendors,
  mode: 'production',
  optimization: {
    minimizer: [new UglifyJsPlugin({
      uglifyOptions:{
        compress:{
          drop_console: true,
          drop_debugger: true,
          collapse_vars: true,
          reduce_vars: true
        },
        output: {
          comments: false,
        }
      }
    })],
  },
  performance: {
    // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
    hints: "warning",
    // 开发环境设置较大防止警告
    // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
    maxEntrypointSize: 5000000, 
    // 最大单个资源体积，默认250000 (bytes)
    maxAssetSize: 3000000
  }

};