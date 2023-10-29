
import './App.css';
import MainPage from "./MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ModePage from "./ModePage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<MainPage/>}>  </Route>
              <Route path='/mode' element={<ModePage/>}></Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
