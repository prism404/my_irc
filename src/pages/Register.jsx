import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

function Register() {

    const [values, setValues] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("form");
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    }
  return (
    <>
        <FormContainer>
            <form onSubmit={(event)=> handleSubmit(event)} >
                <div className="brand">
                    <img src="" alt="" />
                    <h1>Slide</h1>
                        <input type="text" placeholder='Username' name='username' onChange={(e) => handleChange(e)} />
                        <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)} />
                        <input type="password" placeholder='UConfirm Password' name='confirmPassword' onChange={(e) => handleChange(e)} />
                    <button type="submit">Join In</button>
                    <span>Already a member ? <Link to="/login">Login</Link></span>
                </div>
            </form>
        </FormContainer>
    </>
  );
}

const FormContainer = styled.div``;

export default Register