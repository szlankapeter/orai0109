import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout.js';
import NoPages from './pages/NoPages.js';
import Gepel from './pages/Gepel.js';
import Rendez from './pages/Rendez.js';
import Valaszto from './pages/Valaszto.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Valaszto />} />
          <Route path="rendez" element={<Rendez />} />
          <Route path='gepel' element={<Gepel />} />
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
