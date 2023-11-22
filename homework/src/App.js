import './App.css';
import MainPage from "./MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ModePage from "./ModePage";
import ClassicMode from "./ClassicMode";
import TimingMode from "./TimingMode";
import PunishmentMode from "./PunishmentMode";
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
        element: <ClassicMode></ClassicMode>
    },
    {
        path: "/timing",
        element: <TimingMode></TimingMode>
    },
    {
        path: "/punishment",
        element: <PunishmentMode></PunishmentMode>
    },


]);

function App() {

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
