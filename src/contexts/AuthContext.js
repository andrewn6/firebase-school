import React from 'react'
import {useContext} from 'react'
import {userState} from 'react'
import {auth} from '../firebase'
import {useEffect} from 'react'
const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()

    const value = {
        currentUser
    }

    function signup(email, password) {
        auth.createUserWithEmailAndPassword(email, password)
    }
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
        return auth.signOut()
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })

        return unsubscribe
        
    }, [])
    
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}
