import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AllChallenges from "./pages/AllChallenges";
import OngoingChallenges from "./pages/OngoingChallenges";


const router = createBrowserRouter([
    {
        path:'/',
        children:[
            {index:true,element:<Dashboard/>},
            {path:"dashboard",element:<Dashboard/>},
            {path:"allChallenges",element:<AllChallenges/>},
            {path:"ongoingChallenges",element:<OngoingChallenges/>}
        ]
    }
])

export default router;