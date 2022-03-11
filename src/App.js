import "./App.scss";
import Index from "./pages/index";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Esports from "./pages/Esports/Esports";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/index" element={<Index />} />
          <Route path="/" element={<Esports />} />
        </Routes>

    </>
  );
};

export default App;