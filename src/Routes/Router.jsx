import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Hero from "../ui/Home/Hero/Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
        {
            path: '/',
            element: <Hero/>

        }
    ]
  },
]);