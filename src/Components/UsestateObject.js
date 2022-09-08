import React, { useState } from 'react'

const UsestateObject = () => {
    const [myObject, setMyObject] = useState({
        myName: "Avinash", myAge: 22, degree: "BE"
    });
    // console.log(myObject);

    const changeData = () =>{
        setMyObject({...myObject ,myAge : 25});
    }
  return (
    <>
    <h1>Name: {myObject.myName} Age: {myObject.myAge} Degree: {myObject.degree}</h1>
    <button onClick={changeData}>Update</button>
    </>
  )
}

export default UsestateObject