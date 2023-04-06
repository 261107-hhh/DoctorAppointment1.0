import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/home';

import AddDoctor from './pages/AddDoctor';
import Doctors from './pages/Doctors';
import PageNotFound from './pages/PageNotFound';
import PatientRegister from './pages/PatientRegister';
import UserHome from './pages/UserHome';
import EditDoctor from './pages/EditDoctor';
import Patients from './pages/Patients';
import BookAppointment from './pages/BookAppointment';
import MyAppointments from './pages/MyAppointments';
import Appointments from './pages/Appointments';
import Treatment from './pages/Treatment';
import BilledAppointments from './pages/BilledAppointments';
import CreateBill from './pages/CreateBill';
import ViewBill from './pages/ViewBill';
import Membership from './pages/Membership';

function App() {
  return (
    <div className="App">
      <BrowserRouter>      
        <Routes>
          <Route element={<LoginPage />} path="/" exact />                    
          <Route element={<LoginPage />} path="/login" />
          <Route element={<Membership />} path="/membership" />
          <Route element={<Treatment />} path="/treatment/:aptid" />
          <Route element={<CreateBill />} path="/createbill/:aptid" />
          <Route element={<ViewBill />} path="/viewbill/:aptid" />
          <Route element={<AddDoctor />} path="/adddoctor"/>                                     
          <Route element={<BookAppointment />} path="/book"/>                                     
          <Route element={<PatientRegister />} path="/register"/>                                     
          <Route element={<MyAppointments/>} path="/myappointments"/>
          <Route element={<Appointments/>} path="/appointments"/>
          <Route element={<BilledAppointments/>} path="/bills"/>
          <Route element={<Doctors/>} path="/doctors"/>                                                            
          <Route element={<Patients/>} path="/patients"/>                                                            
          <Route element={<EditDoctor/>} path="/doctors/:docid"/>                              
          <Route element={<UserHome/>} path="/uhome"/>                                                            
         
          <Route element={<PageNotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
