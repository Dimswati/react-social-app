import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Navbar from "./pages/components/navBar/Navbar";
import Leftbar from "./pages/components/leftBar/Leftbar"
import RightBar from "./pages/components/rightBar/Rightbar"

import "./styles.scss";

import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from  "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";


function App() {

  let currentUser = true

  const {darkMode} = useContext(DarkModeContext)
  console.log(darkMode)

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }

  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <Leftbar/>
          <div style={{flex: 6}}>
            <Outlet/>
          </div>
          <RightBar/>
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (<ProtectedRoute><Layout/></ProtectedRoute>),
      children: [
        {
          path: "/",
          element: <Home/>
        },

        {
          path: "/profile/:id",
          element: <Profile/>
        }
      ]
    },

    {
      path: "/login",
      element: <Login/>,
    },

    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
