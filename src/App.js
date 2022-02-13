import Header from "./layout/Header";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:characterId" element={<CharacterDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
