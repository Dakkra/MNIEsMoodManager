import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import LandingPage from "./LandingPage.tsx";
import EntriesPage from "./EntriesPage.tsx";
import StatsPage from "./StatsPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage></LandingPage>,
    },
    {
        path: "/entries",
        element: <EntriesPage></EntriesPage>
    },
    {
        path: "/stats",
        element: <StatsPage></StatsPage>
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
)
