const calc={
    calculate:(operator,a,b)=>{
        switch(operator){
            case 'add':return a+b;
            case 'sub':return a-b;
            case 'mul':return a*b;
            case 'div':return b!==0?a/b:'Error';
            default:return 'Invalid operator';
        }
    }
};
export default calc;