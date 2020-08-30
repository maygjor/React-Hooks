import React,{useEffect,useState,useRef} from 'react';
import { useFetch } from './UseFetch';

export const Hello=()=>{
    const renders= useRef(0);
   const [count,setCount] = useState(
       JSON.parse(localStorage.getItem('count'))
       );
  const {data,loading} = useFetch(`http://numbersapi.com/${count}/trivia`);
  useEffect(()=>{
    localStorage.setItem('count',JSON.stringify(count));
   },[count]);
console.log('hello renders:',renders.current++);
   return(
       <div>
    <p>{!data?'loading...':data}</p>
    <div>
<div>count: {count}</div>
    </div>
    <button onClick={()=>setCount((c)=>c+1)}>Increment</button>
    </div>
   ) 
}
