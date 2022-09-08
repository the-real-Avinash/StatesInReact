import React, { useState } from 'react'

const UsestateArray = () => {
    const arr = [
        {id:1,name:"Avinash", post: "SDE"},
        {id:2,name:"Abhijeet", post: "DA"},
        {id:3,name:"Abhijeet", post: "DA"},
        {id:4,name:"Abhijeet", post: "DA"},
        {id:5,name:"Abhijeet", post: "DA"},  
    ];
   const [myArr, setMyArr] =  useState(arr);

   const clearArray = () =>{
    setMyArr([]);
   }
   const removeEle = (id) =>{
    const myNewArray = myArr.filter((ele)=>{
        return ele.id != id;
    })
    setMyArr(myNewArray);
   }
  
  return (
        <>
           {myArr.map((ele)=>{
            return <h1 key={ele.id}>ID: {ele.id} Name: {ele.name} POST: {ele.post}
            <button onClick={() =>removeEle(ele.id)}>Remove</button>
            </h1>
           })} 
           <button onClick={clearArray}>CLEAR</button>
        </>
    
  )
}

export default UsestateArray