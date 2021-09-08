import { React, useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { useHistory } from "react-router-dom"


export const SignIn = async (user, next) => {

    let isRedirect = false

    try {
        let date = Date.now()
        console.log(date)
        const result = await axios.post('http://localhost:5000/api/v1/auth/login', user)


        console.log(result.data.token)
        if (result.data.token) {

            localStorage.setItem("jwt-token", result.data.token)
            let jwtdata = jwt_decode(result.data.token)
            console.log(jwtdata)
            isRedirect = true
            date = Date.now()
            console.log(date)
            next()

        }
    } catch (error) {
        console.log(error)
    }

    return isRedirect



}


export const SignOut = async (next) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("jwt-token")
        next()
    }


    try {
        const result = await axios.get('http://localhost:5000/api/v1/auth/logout')


        if (result.data) {
            console.log("success")


        }
    } catch (error) {
        console.log(error)
    }
}


export const isAuthenticated = () => {

    if (typeof window === "undefined") {
        console.log('jwt-token not found')

        return false
    }

    if (localStorage.getItem("jwt-token")) {
        let jwtdata = jwt_decode(localStorage.getItem('jwt-token'))
        console.log(jwtdata)
        if (jwtdata.id) {
            return true
        }
        else {
            console.log("Kyu be hecker")
        }
        // return true
    }
    else {
        console.log("Inside false error")
        return false
    }
}