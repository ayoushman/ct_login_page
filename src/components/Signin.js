import React from "react"
import "./css/Signin.css"

import Form from "./form/form"
import Capital from "../assets/capital_trust.svg"



const SignIn = () => {
    return (
        <div className="Signin-div">
            <div className="left-div">
                <h1 className="head">Sign In</h1>
                <p className="para">to use all features of the applicaions  </p>

                <img className="img" src={Capital} alt="" />
            </div>
            <div className="form-div">
                <Form />
            </div>
        </div>
    )
}

export default SignIn