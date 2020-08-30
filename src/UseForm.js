import {useState} from 'react';

export  const UseForm= initialState =>{
    const [values,setValues]= useState(initialState);

    return [values,e=>setValues({...values,[e.target.name]:e.target.value})]
}