import './App.css';
//import './assets/sb-admin-2.min.css';
import './assets/admin.css';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Table from './components/Table';
import Charts from './components/Charts';
import Createuser from './Createuser';
import Button from './components/Button';
import Cardcomp from './components/Cardcomp';
import Colors from './components/Colors';
import Login from './components/Login';
import {BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
          <div id="wrapper">
          <Sidebar/>
              <div id="content-wrapper" class="d-flex flex-column">
                  <div id="content">
                  <Topbar/>
                        <div class="container-fluid">
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/tables" element={<Table/>}/>
                            <Route path="/tables/createuser" element={<Createuser/>}/>
                            <Route path="/charts" element={<Charts/>}/>
                            <Route path="/buttons" element={<Button/>}/>
                            <Route path="/cards" element={<Cardcomp/>}/>
                            <Route path="/colors" element={<Colors/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                        </div>
                  </div> 
              <Footer/>   
              </div>     
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;

