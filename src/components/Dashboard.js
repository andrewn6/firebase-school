import React from "react"
import Container from "react-bootstrap"
import useEffect from "react"
import useRef from "react"
import useHistory from "react-router-dom"
import {Card, Button, Alert} from "react-bootstrap"
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

    // React stuff here
    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"></h2>
                    // Error handling is very cool
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                // Use handle logout function :)
                <Button variant="link" onClick={handleLogout}>
                    Log out
                </Button>
            </div>
        </>
    )
}