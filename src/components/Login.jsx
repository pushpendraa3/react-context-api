import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const {setUser} = useContext(UserContext)


  const handleSubmit = () => {
    e.preventDefault()
    setUser({userName, password})
  }

  return (
    <div>
      login
      <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" name="" id="" placeholder='email'  />
      <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" name="" id="" placeholder='password'  />
      <button onClick={ handleSubmit }>Submit</button>
    </div>
  )
}

export default Login
