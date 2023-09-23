import { Route, BrowserRouter,Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path="/"/>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
