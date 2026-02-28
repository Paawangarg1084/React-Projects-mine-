import React , {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'



function Login() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser ({username ,password})
    }
  return (
    <div>
        <h2>LoGin</h2>
        <form onSubmit={handleSubmit}>           
        <input type='text' value={username}  onChange={(e) => setUsername(e.target.value) }  placeholder='username'/>{" "}
        <input type='text' value={password}  onChange={(e) => setPassword(e.target.value) }  placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
          </form>
    </div>
  )
}

export default Login