import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AllChallenges from "./pages/AllChallenges";


const router = createBrowserRouter([
    {
        path:'/',
        children:[
            {index:true,element:<Dashboard/>},
            {path:"dashboard",element:<Dashboard/>},
            {path:"allChallenges",element:<AllChallenges/>}
        ]
    }
])

export default router;