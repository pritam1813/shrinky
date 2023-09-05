import { Routes, Route } from "react-router-dom";
import { Signup, About, Pricing } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
