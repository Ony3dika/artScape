import { Route, Router, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Art from "./pages/art";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./utils/scroll";
function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence mode='wait'>
        <div>
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            <Route element={<Home />} index />
            <Route element={<Art />} path='/art' />
          </Routes>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
