import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import { Admin, SuperAdmin, User } from './pages';
import Invalid from './pages/Invalid';

function App() {

  return (
    <div className="text-white">
      <Routes>
          <Route path="/" element={<Home  />}/>
          <Route path="/admin" element={<Admin  />}/>
          <Route path="/superadmin" element={<SuperAdmin  />}/>
          <Route path="/user" element={<User  />}/>
          <Route path="/invalid" element={<Invalid  />}/>

      </Routes>
    </div>
  )
}

export default App
