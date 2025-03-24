import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AllChallenges from "./pages/AllChallenges";
import OngoingChallenges from "./pages/OngoingChallenges";
import DisableChallenges from "./pages/DisableChallenges";
import CompleteChallenges from "./pages/CompleteChallenges";
import EditChallengeDetails from "./pages/EditChallengeDetails";


const router = createBrowserRouter([
    {
        path:'/',
        children:[
            {index:true,element:<Dashboard/>},
            {path:"dashboard",element:<Dashboard/>},
            {path:"allChallenges",element:<AllChallenges/>},
            {path:"ongoingChallenges",element:<OngoingChallenges/>},
            {path:"disableChallenges",element:<DisableChallenges/>},
            {path:"completeChallenges",element:<CompleteChallenges/>},
            {path:"editChallenges",element:<EditChallengeDetails/>}
        ]
    }
])

export default router;