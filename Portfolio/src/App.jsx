import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainPage from './pages/MainPage';
import ThanksPage from './pages/ThanksPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/thanks" element={<ThanksPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
