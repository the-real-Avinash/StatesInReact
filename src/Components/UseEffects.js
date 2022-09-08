import React, { useEffect, useState } from 'react'

const UseEffects = () => {

  const [count, setCount] = useState(0);
  useEffect(()=>{
  if(count >=1){
  
    console.log("Hello");
    document.title = `Chats (${count})`;
  
}
},[count]);


useEffect(()=>{
 
    console.log("Hello from second"); 

},[]);
 
  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Click</button>
    </>
  )
}

export default UseEffects