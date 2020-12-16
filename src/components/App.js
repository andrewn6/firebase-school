
import { Container }  from 'react-bootstrap'
import AuthProvider from "./contexts/AuthContext"

function App() {
  return(
    <AuthProvider>
      <Container>
        <div className='flex-'>

        </div>
      </Container>
    </AuthProvider>
  )
  
}

export default App;
