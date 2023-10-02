import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/Layout/Layout"
import HomePage from "../pages/HomePage"


export  const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index:true,
                element: <HomePage/>
            }
        ]
    }
])