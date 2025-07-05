import { createBrowserRouter } from "react-router";
import Layout from "../layout/layout";
import HomePage from "../pages/home";


const root = createBrowserRouter([
   {
    path:"",
    Component:Layout, 
    children:[
        {
            path:'',
            Component: HomePage,
        },
    ]
   }
])

export default root