
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Navbar />
      <h1>Hola</h1>
    </Router>
  );
}

export default App;
