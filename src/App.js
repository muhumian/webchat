import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Chat from './components/Chat/index'
import Page from './pages/Page'
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
      </div>
        <Routes>
          <Route path="/" element={<Page title="Home"/>}/>
          <Route path="/about" element={<Page title="About"/>}/>
          <Route path="*" element={<Page title="Any other"/>}/>
        </Routes>
      </Router>
      <Chat/>
    </div>
  );
}

export default App;
