import Home from './components/Home';
import Header from './components/Header';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return <HashRouter >
    <Header/>
    <Routes>
      <Route path="/" element={< Home key="movie" field="movie" />} />
      <Route path="/TV" element={< Home key="TV" field="TV" />} />
    </Routes>
  </HashRouter>
}

export default App;