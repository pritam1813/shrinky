import "papercss/dist/paper.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup, About, Pricing } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
