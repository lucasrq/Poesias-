// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BolinhoDeBaunilha from './pages/BolinhoDeBaunilha';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/BolinhoDeBaunilha" element={<BolinhoDeBaunilha />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;