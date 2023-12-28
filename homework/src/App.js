import MainPage from "./MainPage/MainPage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ModePage from "./ModePage/ModePage";
import ClassicMode from "./ClassicGame/ClassicMode";
import TimingMode from "./TimingGame/TimingMode";
import PunishmentMode from "./PunishmentGame/PunishmentMode";
import ClassicGenerate from "./ClassicGame/ClassicGenerate";
import CustomerGame from "./CustomerGame/CustomerGame";
import TimingGenerate from "./TimingGame/TimingGenerate";
import PunishmentGenerate from "./PunishmentGame/PunishmentGenerate";
import Loading from "./Loading/Loading";
import Login from "./User/Login";
import ForgetPassword from "./User/Password";
import SignIn from "./User/SignIn";


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
        path: "/classic",
        element: <ClassicMode/>
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
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/signIn",
        element: <SignIn></SignIn>,
    },
    {
        path: "/password",
        element: <ForgetPassword></ForgetPassword>,
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
    {
        path: "/loading",
        element: <Loading></Loading>,
    },
]);

function App() {

    return (
        <><RouterProvider router={router}/></>
    );
}

export default App;
