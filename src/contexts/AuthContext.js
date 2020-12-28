import React from 'react'
import {useContext} from 'react'
import {useState} from 'react'
import {auth} from '../firebase'
import {useEffect} from 'react'
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    function signup(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }
    function updatePassword(password) {
        currentUser.updatePassword(password)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
        
    }, [])
    const value = {
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
      }

    return (
        <AuthContext.Provider>
            {!loading && children}
        </AuthContext.Provider>
    )
}
