import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import patientservice from '../services/patientservice'

function Patients() {
  const [Patients, setPatients] = useState([])
  const token = sessionStorage.getItem('token')

  const loadData = () => {
    console.log('Token ', token)
    patientservice.allPatients().then((resp) => {
      setPatients(resp.data.data)
      console.log(Patients)
    })
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='row'>
          <div
            className='col-sm-2 bg-transparent p-0 border-right border-primary'
            style={{ height: 'calc(100vh - 80px)' }}
          >
            <SideBar />
          </div>
          <div className='col-sm-10'>
            <h4 className='text-left p-2 border-bottom border-success'>
              All Patients
            </h4>
            <table className='table table-sm table-light table-striped table-hover'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Patient Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Gender</th>
                </tr>
              </thead>
              <tbody>
                {Patients.map((x) => (
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.address}</td>
                    <td>{x.phone}</td>
                    <td>{x.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default Patients
