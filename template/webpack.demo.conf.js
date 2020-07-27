'use strict';

const path = require('path');
const paths = require('./configs/paths');
const HtmlWebPackPlugin = require("html-webpack-plugin");

// const htmlPlugin = new HtmlWebPackPlugin({
//   template: path.resolve(__dirname, 'public', 'index.html'),
//   filename: path.resolve(__dirname, 'public', 'index.html')
// });

module.exports = {
  stats: { children: false },
  entry: {
    app: [path.resolve(__dirname, 'src', 'index.js')]
  },
  output: {
    path: path.resolve(__dirname, 'dist/demo'),
    publicPath: '/',
    filename: 'js/[name]-[hash:8].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      Assets: path.resolve( __dirname, 'src/scenes/assets'),
      PublicFlow: path.resolve( __dirname, 'src/scenes/publicFlow')
    }
  },
  module: {
    rules: [
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
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: "index.html"
    })
  ],
  devServer: {
    index: '/',
    port: 8003,
    inline: true,
    hot: true,
    historyApiFallback: true,
    openPage : '',
    proxy: {
      '/api':{
        target: 'http://99.1.100.217',
        pathRewrite: {'^/api' : ''},
        changeOrigin: true
      }
    },
    watchOptions: {
      ignored: /node_modules/
    },
    contentBase: paths.demoPublic,
    publicPath: '/'
  }
};
