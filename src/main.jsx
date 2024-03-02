import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import ErrorPage from './components/Error/ErrorPage.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import ChatContainer from './ChatContainer.jsx';
import socketIO from 'socket.io-client';
import SetUserData from './components/SetUserData.jsx';

const socket = socketIO.connect('http://localhost:3000');
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <SetUserData socket={socket}/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />
  },
  {
    path: "/app",
    element: <App />,
    errorElement: <ErrorPage />,
    children:
      [
        {
          index:true,
          element: <ChatContainer socket={socket}/>,
        }
      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  ///* </React.StrictMode> */
)
