
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import './App.css'

import Home from "../src/page/Home"
import ErrorPage from "../src/ErrorPage"
function App() {

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
]);

  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
