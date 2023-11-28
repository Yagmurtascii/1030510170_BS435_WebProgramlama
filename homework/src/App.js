import './App.css';
import MainPage from "./MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ModePage from "./ModePage";
import ClassicMode from "./ClassicMode";
import TimingMode from "./TimingMode";
import PunishmentMode from "./PunishmentMode";
import ClassicGenerate from "./ClassicGenerate";
import CustomerGame from "./CustomerGame";
import TimingGenerate from "./TimingGenerate";
import PunishmentGenerate from "./PunishmentGenerate";

const router = createBrowserRouter([

    {
        path: "/",
        element: <MainPage></MainPage>
    },
    {
        path: "/mode",
        element: <ModePage></ModePage>
    },
    {
        path: "/mode",
        element: <ModePage></ModePage>
    },

    {
        path: "/classic",
        element: <ClassicMode />
    },

    {
        path: "/timing",
        element: <TimingMode></TimingMode>
    },
    {
        path: "/punishment",
        element: <PunishmentMode></PunishmentMode>
    },
    {
        path: "/generateClassic",
        element: <ClassicGenerate></ClassicGenerate>,
    },

    {
        path: "/generateTiming",
        element: <TimingGenerate></TimingGenerate>,
    },

    {
        path: "/generatePunishment",
        element: <PunishmentGenerate></PunishmentGenerate>,
    },

    {
        path: "/generate",
        element: <CustomerGame></CustomerGame>,

    },


]);

function App() {

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
