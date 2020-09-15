import React, { Component, useState } from 'react';

const TextBox = () => {
    // Below code for single text field
    // const [data,handleChange] = useState("Enter");
    // return <div><input type="text" value={data}
    //     onChange = {
    //         e => {
    //             handleChange(e.target.value)
    //         }
    //     }/>
    //     <h6>{data}</h6>
    // </div>

    //Below code for Object
    const [register, handleChange] = useState({
        firstName:"",
        lastName:"",
        age:"",
        gender:""
    });
    return <div>
        <input type="text"
    name="firstName"
    value={register.firstName}
        onChange={e => {
            handleChange({...register,firstName:e.target.value})
        }}
    />
    <input type="text"
    name="lastName"
    value={register.lastName}
        onChange={e => {
            handleChange({...register,lastName:e.target.value})
        }}
    />
   <h6>{register.firstName}</h6>
   <h6>{register.lastName}</h6>
    </div>
}

export default TextBox;


