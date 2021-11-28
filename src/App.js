import Home from './components/Home';
import Header from './components/Header';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Detail from './components/Detail';
import './App.css';

function App() {
  return <HashRouter >
    <Header/>
    <Routes>
      <Route path="/" element={< Home key="movie" field="movie" />} />
      <Route path="/TV" element={< Home key="TV" field="TV" />} />
      <Route path="/movie/:movieId" element={<Detail media="movie"/>} />
      <Route path="/TV/:tvId" element={<Detail media="TV"/>} />
    </Routes>
  </HashRouter>
}

export default App;