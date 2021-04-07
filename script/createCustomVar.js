const { generate } = require('@ant-design/colors');
const inquirer = require('inquirer');

inquirer
  .prompt({
    type: 'input',
    name: 'color',
    message: '请输入主题色:',
  })
  .then(({ color }) => {
    // Use user feedback for... whatever!!
    if (!color) {
      console.warn('请输入颜色值!');
      return;
    }

    const colors = generate(color);

    if (!colors.length) {
      console.log('请检查颜色输入是否正确');
      return;
    }

    colors.forEach((color, index) => {
      console.log(`$color-${index + 1}: ${color};`)
    })

    console.log(`$color: ${colors[5]};`)
  });
