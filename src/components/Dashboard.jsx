import React from "react";
import Container from "react-bootstrap";
import useEffect from "react";
import useRef from "react";
import useHistory from "react-router-dom";
import {Card, Button, Alert} from "react-bootstrap";
import { logout, updateEmail, updatePassword, useAuth } from '../contexts/AuthContext';

export default function Dashboard() {

    const [error, setError] = useState('')
    const history = useHistory()
    const {currentUser, logout} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        iff (passwordRef.current.value !== passwordConfirmRef.current.value)
    }
    async function handleChangeEmail() {
        setError("")
        try {
            history.push("/")
        } catch {
            setError("Failed to update email!")
        }
    }

    async function handleLogout() {
        setError("")

        try{
            
            await logout()
            history.push("/login")
        } catch{
            setError("Failed to log out!")
        }
    }


    async function changeEmail(){

        setError("")

        try{
            
            history.push("")
        } catch{
            setError("Failed to change email :(")
        }

    }
  
    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"></h2>
                   
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong> {currentUser.email}
                    <strong>Password:</strong> {currentUser.password}
                </Card.Body>
            </Card>
            <div className="w-100 text-right mt-2">
           
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
                <Button variant="link" onClick={handleChangePassword}>
                    Change Password
                </Button>
                <Button variant="link" onClick={handleChangeEmail}>
                    Change Email
                </Button>
            </div>
        </>
    )
}
