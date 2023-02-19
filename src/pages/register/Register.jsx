import "./register.scss"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Lama Social.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque ullam laborum nam maxime facilis? Dolorum saepe doloremque facilis odit, voluptates quaerat tenetur veritatis perferendis praesentium totam ipsum ut nobis? Magni.
          </p>
          <span>Don`t you have an account?</span>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>register</h1>
          <form action="">
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="Password" placeholder="Password"/>
            <input type="text" placeholder="Name"/>
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}
