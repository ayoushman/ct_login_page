import React from "react"
import { SignOut } from "../auth"
import { useHistory } from "react-router"

const UserPage = () => {
    let history = useHistory()
    return (
        <div onClick={() => {
            SignOut(() => {
                history.push('/sign-in')
            })
        }}>
            Protected Component

        </div>
    )

}


export default UserPage