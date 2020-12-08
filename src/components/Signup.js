import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'

export default function Signup() {
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control> type="email" ref={emailRef} required /</Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control> type="Password" ref={passwordRef} required /</Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control> type="password-confirm" ref={passwordConfirmRef} required /</Form.Control>
                        </Form.Group>
                        <Button className="w-100" type="submit">Sign up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
