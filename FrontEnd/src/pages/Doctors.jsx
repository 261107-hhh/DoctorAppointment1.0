import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import doctorservice from '../services/doctorservice'

function Doctors() {
  const [Doctors, setDoctors] = useState([])
  const token = sessionStorage.getItem('token')

  const loadData = () => {
    console.log('Token ', token)
    doctorservice.getDoctors().then((resp) => {
      setDoctors(resp.data.data)
      console.log(Doctors)
    })
  }
  const handleDelete = (id) => {
    let result = window.confirm('Are you sure to delete this record ?')
    if (result) {
      doctorservice
        .deleteDoctor(id)
        .then((resp) => {
          alert(resp.data.data)
          console.log(resp.data)
          loadData()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
                  <div className='col-sm-12'>
                      <Link to='/' className='float-left bg-white btn btn-sm m-3 font-weight-bold text-success '  >Home</Link>
            <Link
              to='/adddoctor'
              className='float-right btn btn-sm btn-light m-3 text-danger font-weight-bold'
            >
              Add New
            </Link>
                      <h4 className='p-3 shadow  rounded text-center text-white font-weight-bold font-italic text-center border-bottom border-success' style={{ backgroundColor: 'green' }} >
              All Doctors
            </h4>
            <table className='table table-sm table-light table-striped table-hover'>
                          <thead>
                              <tr style={{ color: 'green' }}>
                  <th>Id</th>
                  <th>Doctor Name</th>
                  <th>Address</th>
                  <th>Qualification</th>
                  <th>Phone</th>
                  <th>Speciality</th>
                  <th>Gender</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Doctors.map((x) => (
                  <tr key={x.id}>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.address}</td>
                    <td>{x.qualification}</td>
                    <td>{x.phone}</td>
                    <td>{x.speciality}</td>
                    <td>{x.gender}</td>
                    <td>
                      <button
                        onClick={(e) =>
                          (window.location.href = '/doctors/' + x.id)
                        }
                        className='btn btn-success mr-2 btn-sm'
                      >
                        Edit
                      </button>
                      <button
                        onClick={(e) => handleDelete(x.id)}
                        className='btn btn-danger btn-sm'
                      >
                        Delete
                      </button>
                    </td>
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

export default Doctors
