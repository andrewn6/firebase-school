import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {useRef} from "react"
import Alert from "react-bootstrap"
import {Form, Card, Button} from 'react-bootstrap'

export default function Login({children}) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()

        if (passwordRef.Ref.value == passwordRef.Ref.value)
        return setError('Incorrect password try again!')
    }

    try {
        setError('')
        setLoading(true)
        // We use the useAuth() as that is what we imported from contexted :)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push('/')


    } catch{
        setError("Failed to log in :/")
    
    setLoading(false)
    }
    
    
    return(
        <>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-3'>Log in</h2>
                    {error && <Alert variant="danger">{error}Error</Alert>}
                    <Form inSubmit={handleSubmit}>
                    <Form.Group id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" ref={passwordRef} required />
                    </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                    Login
                </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>

        
    )
}