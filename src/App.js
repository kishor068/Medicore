import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from './Pages/Register';
import User from './Pages/User';
import AppForm from './Pages/AppForm';
import Login from './Pages/Login';
import Doctor from './Pages/Doctor';
import Home from './Pages/Home';
import Pending from './Pages/Pending';
import Approved from './Pages/Approved';
import AppStatus from './Pages/AppStatus';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar></Navbar> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/form/:id' element={<AppForm />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user/doctor/:id' element={<Doctor />} />
          <Route path='/doctor/pending/:id' element={<Pending />} />
          <Route path='/doctor/approved/:id' element={<Approved/>} />
          <Route path='/status/:id' element={<AppStatus/>} />
          
          {/* Additional routes can be added here */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
