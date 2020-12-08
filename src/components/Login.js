import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from 'react-router-dom'
import {useRef} from "react"
export default function Login({children}) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setErrors] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()
    }

    try{
        setError('')
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push('/')


    } catch{
        setError("Failed to log in :/")
        
    setLoading(false)
    }
    
    return(

    )
}