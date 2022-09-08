import React, { useState, useEffect  } from 'react'

const UseEffects2 = () => {
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () =>{
        // console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
      }
      
      useEffect( ()=>{
        window.addEventListener("resize", actualWidth);

        return () =>{
            window.removeEventListener("resize", actualWidth);
        }
      });
  return (
    <>
    <h1>The Actual size of Screen is </h1>
    <h2>{widthCount}</h2>
    </>
  )
}

export default UseEffects2