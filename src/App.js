import Home from './components/Home';
import {
  //BrowserRouter,
  Link,
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return <HashRouter >
    <Link to="/">Home </Link>
    <Link to="/TV">TV</Link>
    <Routes>
      <Route path="/" element={< Home key="movie" field="movie" />} />
      <Route path="/TV" element={< Home key="TV" field="TV" />} />
    </Routes>
  </HashRouter>
}

export default App;