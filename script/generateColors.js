const fs = require('fs');
const path = require('path');
const { presetPalettes, generate } = require('@ant-design/colors');

let tpl = '';
const newLine = '\r\n';

// gray系列色板有问题 先手动加上
presetPalettes.grey = [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#f0f0f0',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#595959',
  '#434343',
  '#262626',
  '#1f1f1f',
  '#141414',
  '#000000',
];

Object.entries(presetPalettes).forEach(([key, colors]) => {
  colors.forEach((color, index) => {
    tpl += `$${key}-${++index}: ${color};${newLine}`;
  });
  tpl += newLine;
});

fs.writeFile(path.resolve(__dirname, '../var/colors.scss'), tpl, (err) => {
  if (err) throw err;
  console.log('generrate => color.scss');
});
