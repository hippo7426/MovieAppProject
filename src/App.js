import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App(){
  return <BrowserRouter basename="/SJflix">
  <Routes>
    <Route path="/" element={< Home field="movie" />} />
    <Route path="TV" element={< Home field="TV" />} />
  </Routes>
  </BrowserRouter>
}

export default App;