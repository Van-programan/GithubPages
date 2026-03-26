import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Info from './Info';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;