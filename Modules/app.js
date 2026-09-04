import {add,mul} from './Math.js';
import utils,{APP_NAME,VERSION} from './utils.js';
import calc from './Calc.js'; 
utils.log(`Starting ${APP_NAME} v${VERSION}`);
console.log(`Add:${add(2,2)}`);
console.log(`Mul:${mul(2,2)}`);
utils.log('Result:',calc.calculate('add',5,3));
document.getElementById('advancedBin').addEventListener('click', ()=>{
import('./advaned.js').then(module=>{
    module.advancedCalculator();
});
});