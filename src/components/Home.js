import React from "react"
import { useHistory } from "react-router"


const Home = () => {


    const history = useHistory()
    return (
        <div>
            Hey nothing here yet

            <div>
                <button onClick={() => {
                    history.push('/sign-in')
                }}>Sign In</button>
            </div>
        </div>

    )
}


export default Home
