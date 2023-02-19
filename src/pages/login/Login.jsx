import "./login.scss"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"

export default function Login() {

  const {login, currentUser} = useContext(AuthContext)

  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello WOrld.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ullam laborum nam maxime facilis? Dolorum saepe doloremque facilis odit, voluptates quaerat tenetur veritatis perferendis praesentium totam ipsum ut nobis? Magni.
          </p>
          <span>Don`t you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="">
            <input type="text" placeholder="Username"/>
            <input type="Password"/>
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}
