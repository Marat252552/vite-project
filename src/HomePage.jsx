import { Button } from "antd"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { LogoutAPI } from "./Api"


const HomePage = () => {
    let navigate = useNavigate()
    let [logout, setLogout] = useState(false)
    useEffect(() => {
        if(logout === true) {
            navigate('/')
        }
    }, [logout])
    let LogoutF = async () => {
        let res = await LogoutAPI()
        console.log(res.status)
        if(res.status === 201) {
            setLogout(true)
        }
    }
    return <div>
        HomePage
        <Button onClick={LogoutF}>Logout</Button>
    </div>
}

export default HomePage