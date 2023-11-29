import path from 'path';
import webpack from 'webpack';
const HtmlWebpackPlugin = require('html-webpack-plugin');

import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'production' | 'development';

type EnvVariables = {
  mode: Mode,
};

const devServer: DevServerConfiguration = {
  port: 3000,
  open: true
};

export default (env: EnvVariables) => {
  const config: webpack.Configuration =  {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    devtool: 'inline-source-map',
    plugins: [new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')})],
    module: {
      rules: [
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },       
        {
          test: /\.s[ac]ss$/i,
          use: ["style-loader", "css-loader", "sass-loader",],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: devServer,
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js',
      clean: true,
    },
  }

  return config;
};