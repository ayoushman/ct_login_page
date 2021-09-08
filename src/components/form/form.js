import { React, useState } from "react"
import "./css/Form.css"
import InputFields from "./inputFields"
import { useHistory } from "react-router"

import { SignIn, isAuthenticated } from "../../auth"
import axios from "axios"

const Form = () => {

    const [input, setInput] = useState({ userid: "", password: "" })
    const [values, setValues] = useState({

        error: false,
        loading: false,
        didRedirect: false,
    });

    let history = useHistory()

    let testData = {
        email: "yashi345@gmail.com",
        password: "123456",
    }
    const onChangeInput = (e) => {
        const { name, value } = e.target

        setInput({ ...input, [name]: value })

    }


    const OnSubmit = () => {


        console.log(input)

        let result = SignIn(testData, () => {
            if (isAuthenticated) {

                history.push("/user")
            }
            console.log("oi oi o i")
        })
        console.log(result)

        //  This does not work here coz token is not set yet its still in the midlle of api calling
        // if (isAuthenticated) {
        //     history.push('/user')
        // }

    }




    return (
        <div className="form">
            <div className="mobile-view">
                <h1 className="head">Sign In</h1>
                <p className="para">to use all features of the applicaions  </p>
            </div>
            <div className="form-components"> <InputFields name="userid" onChange={onChangeInput} value={input.userid} type="number" label="User Id:" placeholder="User Id" />
                <InputFields name="password" onChange={onChangeInput} value={input.password} type="password" placeholder="Password" label="Password" /> </div>
            <div className="btn-div">
                <button onClick={OnSubmit} className="btn" >Login</button>

                <div className="forgot-pass"> <p className="f-para">Forgot Password?</p>
                    <p className="c-para">Change Password</p></div>
            </div>
        </div>
    )
}


export default Form