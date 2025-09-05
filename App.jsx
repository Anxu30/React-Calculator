import { useState } from 'react';
import styles from './app.module.css'
import H1 from './components/H1'


function App(){
 const calArr=['C','1','2','+','3','4','-','5','6','*','7','8','/','9','0','=','.'];
 const operators=['+','-','*','/','.'];
 let [value,setVal]=useState('');
 const onSetClickButton=((val)=>{
if(val==='C'){
    setVal('');
    return;
  } 
  if(val==='='){
    try{
    let result=eval(value);
    setVal(result.toString());
    return;
    }
    catch(error){
setVal('Invalid Input');
return;
    }
  }

const operator=value.slice(-1);
if(operators.includes(operator)&&operators.includes(val)){
  value=value.slice(0,-1)+val;
  setVal(value);
  return true;
}
  
setVal((prev)=>prev+val);
 return; 
 });

  return (
  <>
<H1 operators={operators} calArr={calArr} onSetClickButton={onSetClickButton} val={value}></H1>
  
  
  </>
   
  )
}

export default App;
