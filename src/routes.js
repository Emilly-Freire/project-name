import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Profile from './pages/Profile';

const router = createBrowserRouter([

    {
        path: "/", 
        element: <Home /> 
    },
    {
        path: "/profile", 
        element: <Profile /> 
    },
    {
        path: "/contact", 
        element: <Contact /> 
    },
])

export default router