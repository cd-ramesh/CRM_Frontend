import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Customer from './pages/Customer';
import Engineer from './pages/Engineer';

function App() {



  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/customer" element={<Customer/>}/>
            <Route path="/engineer" element={<Engineer/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
