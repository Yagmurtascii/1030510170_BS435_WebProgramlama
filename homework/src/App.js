import './App.css';
import MainPage from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ModePage from "./ModePage";
import ClassicMode from "./ClassicMode";
import TimingMode from "./TimingMode";
import PunishmentMode from "./PunishmentMode";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}> </Route>
                <Route path='/mode' element={<ModePage/>}></Route>
                <Route path='/classic' element={<ClassicMode/>}></Route>
                <Route path='/timing' element={<TimingMode/>}></Route>
                <Route path='/punishment' element={<PunishmentMode/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
