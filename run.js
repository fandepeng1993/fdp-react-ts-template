/* v 0.0.1 */
const fs = require('fs');
const mock = process.argv[2] || '';// mock 调试模式

const indexPath = './src/index.tsx';
const data = fs.readFileSync(indexPath);
const index = data.toString().replace(/(\/\* @dynamic (.*?) \*\/\n*\n*\r*\s*\t*)(.*?)(\n*\n*\r*\s*\t*\/\* @dynamic end \*\/)/gi, (a, s1, s2, s3, s4) => {
  let code = '';
  switch (s2) {
    case 'mock':
      code = mock === 'mock' ? `import './mock';` : ``;
  }
  return `${s1}${code}${s4}`;
});
try {
  fs.writeFileSync(indexPath, index);
} catch (err) {
  console.log(err);
}
console.log('正在启动 react-cli ...');
