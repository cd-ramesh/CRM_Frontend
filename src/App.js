import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';
import Admin from './pages/Admin';
import Customer from './pages/Customer';
import Engineer from './pages/Engineer';
import Check from './hoc/check';

function App() {



  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/admin" element={<Check> <Admin/> </Check>}/>
            <Route path="/customer" element={<Check> <Customer/> </Check>}/>
            <Route path="/engineer" element={<Check> <Engineer/> </Check>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
