import { useContext } from "react"
import { AuthContext } from "../../../context/authContext"
import "./comments.scss"

export default function Comments() {
  const {currentUser} = useContext(AuthContext)
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit a inventore. Iure magnam voluptatem veritatis tempora et.",
      name: "paul macharia",
      userId: 1,
      profilePicture: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi fugit a inventore. Iure magnam voluptatem veritatis tempora et.",
      name: "paul macharia",
      userId: 2,
      profilePicture: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePicture} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>send</button>
      </div>
      {
        comments.map(comment => (
          <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <p>{comment.desc}</p>
            </div>
            <span className="date">1 hour ago</span>
          </div>
        ))
      }
    </div>
  )
}
