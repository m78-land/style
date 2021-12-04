const fs = require('fs');
const path = require('path');
const { presetPalettes } = require('@ant-design/colors');

let tpl = '';
const newLine = '\r\n';

// gray系列色板有问题 先手动加上
presetPalettes.gray = [
  '#ffffff',
  '#fafafa',
  '#f5f5f5',
  '#d9d9d9',
  '#bfbfbf',
  '#8c8c8c',
  '#434343',
  '#262626',
  '#1f1f1f',
  '#000000',
];

Object.entries(presetPalettes).forEach(([key, colors]) => {
  colors.forEach((color, index) => {
    tpl += `  --m78-${key}-${++index}: ${color};${newLine}`;
  });
  tpl += newLine;
});

tpl = `
:root {
${tpl}
}
`

fs.writeFile(path.resolve(__dirname, '../colors.scss'), tpl, (err) => {
  if (err) throw err;
  console.log('generrate => color.scss');
});
