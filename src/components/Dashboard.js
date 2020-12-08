import React from "react"
import Container from "react-bootstrap"
import useEffect from "react"
import useRef from "react"
import useHistory from "react-router-dom"
export default function Dashboard() {

    const [error, setError] = useState('')
    const history = useHistory()
    const {currentUser, logout} = useAuth()

    async function handleLogout() {
        setError("")

        try{
            // After we logout redirect to the login page with react-dom
            await logout()
            history.push("/login")
        } catch{
            setError("Failed to log out :(")
        }
    }
}