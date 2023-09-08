import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import { Admin, SuperAdmin, User } from './pages';

function App() {

  return (
    <div className="text-white">
      <Routes>
          <Route path="/" element={<Home  />}/>
          <Route path="/admin" element={<Admin  />}/>
          <Route path="/superadmin" element={<SuperAdmin  />}/>
          <Route path="/user" element={<User  />}/>

      </Routes>
    </div>
  )
}

export default App
