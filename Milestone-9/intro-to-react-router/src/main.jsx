import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from   './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import First from './Component/First/First';
import FriendDetail from './Component/FriendDetail/FriendDetail';



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
    
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <First></First>,
      },
      {
        path: "/about",
        element: <About></About>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: 'friend/:friendId',
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: '*',
        element: <div>Not found 404!</div>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
