import { Route,Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Art from "./pages/art";
import { AnimatePresence } from "framer-motion";
function App() {

  const location =  useLocation()
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} index />
          <Route element={<Art />} path='/art' />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
