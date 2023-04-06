import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import doctorservice from '../services/doctorservice'
import patientservice from '../services/patientservice'

function UserHome() {
  const cid = sessionStorage.getItem('id')
  const [empInfo, setempInfo] = useState()
  const role = sessionStorage.getItem('role')
  useEffect(() => {
    if (role === 'Doctor') {
      doctorservice
        .getDoctorDetails(cid)
        .then((resp) => {
          console.log('Info', resp.data.data)
          setempInfo(resp.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (role === 'Patient') {
      patientservice
        .getPatientDetails(cid)
        .then((resp) => {
          console.log('Info', resp.data.data)
          setempInfo(resp.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  return (
    <>
      <Header />
      <div className='container-fluid '>
        <div className='row ' >
          <div
                      className='col-sm-3 p-1  border-right border-success '
                      style={{ backgroundColor: 'green', height: 'calc(100vh - 80px)' }}
          >
            <SideBar />
          </div>
                  <div className='col-sm-6 ml-5 mt-5 '>
                      <div className='card shadow-lg p-1 ml-5 mt-5 rounded ' style={{ backgroundColor: 'green' }}>
                          <div className='card-header bg-white rounded font-weight-bold font-italic' style={{ color: 'green' }}>
                <h5>Details</h5>
              </div>
              <div className='card-body   '>
                <table className='table bg-white rounded'>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <th>{empInfo?.name}</th>
                    </tr>
                    <tr>
                      <th>Address</th>
                      <th>{empInfo?.address}</th>
                    </tr>
                    <tr>
                      <th>Age</th>
                      <th>{empInfo?.age} years</th>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <th>{empInfo?.phone}</th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserHome
