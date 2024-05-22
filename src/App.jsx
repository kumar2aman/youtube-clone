import { useState } from 'react'
import Navbar from "./components/navbar"
import Body from "./components/body"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WatchVideo from './components/watchVideo'
import Feed from './components/feed'
import Sidebar from './components/sidebar'
import Test from './components/test'


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,

      children: [
        {
          path: "/",
          element: < Test />,

        },




        {
          path: "/watch",
          element: <WatchVideo />

        },

      ]
    }
  ])

  return (
    <>

      <Navbar />
      <div>

        <RouterProvider router={appRouter} />
      </div>

      </>
  )
}

export default App
