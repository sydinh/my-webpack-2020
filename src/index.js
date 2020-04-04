import add from './add';
import subtract from './subtract';

document.getElementById('app').innerHTML = 'Hello Webpack';

console.log(add(1, 1));
console.log(subtract(1, 1));

console.log(process.env.NODE_ENV);
