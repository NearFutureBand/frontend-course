import { Link, BrowserRouter, Routes, Route } from "react-router-dom";

import Main from '../pages/Main';
import Users from '../pages/Users';
import Login from '../pages/Login';
import './styles.css';

const Navigator = () => {
  return (
    <BrowserRouter>
      <div className='navigator'>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/users">Users</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={ <Main />} />
          <Route path="users" element={<Users />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default Navigator;