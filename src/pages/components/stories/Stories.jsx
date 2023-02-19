import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import "./stories.scss";

export default function Stories() {

  const {currentUser} = useContext(AuthContext)

  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ]
  return (
    <div className="stories">
      <div className="story">
        <img src={currentUser.profilePicture} alt="user"/>
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>
      {
        stories.map(story => (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        ))
      }
    </div>
  )
}
