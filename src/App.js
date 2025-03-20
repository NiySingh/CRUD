import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import UserTable from './UserTable';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import ViewDetails from './ViewDetails';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<UserTable/>}></Route>
    <Route path="/user/create" element={<CreateUser/>}></Route>
    <Route path="/user/edit/:userid" element={<EditUser/>}></Route>
    <Route path="/user/view/:userid" element={<ViewDetails/>}></Route>


    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
