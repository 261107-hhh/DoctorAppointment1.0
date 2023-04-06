import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import appointmentservice from '../services/appointmentservice'

function MyAppointments() {
  const [data, setdata] = useState([])
  const token = sessionStorage.getItem('token')
  const patid = sessionStorage.getItem('id')
  const navigate = useNavigate()
  const loadData = () => {
    console.log('Token ', token)
    appointmentservice.patientAppointments(patid).then((resp) => {
      setdata(resp.data)
      console.log(data)
    })
  }

  const handleCancel = (id) => {
    appointmentservice
      .updateAppointment({
        appointmentid: id,
        status: 'Cancelled',
        cancelby: 'Patient',
      })
      .then((resp) => {
        alert(resp.data)
        loadData()
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
              Patient Appointments
            </h4>
            <table className='table table-sm table-light table-striped table-hover'>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Doctor Name</th>
                  <th>Date & Time</th>
                  <th>Remarks</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {data.map((x) => (
                  <tr key={x.appointmentid}>
                    <td>{x.appointmentid}</td>
                    <td>{x.doctor.name}</td>
                    <td>
                      {x.date} {x.time}
                    </td>
                    <td>{x.remarks}</td>
                    <td>
                      {x.status}{' '}
                      {x.status == 'Cancelled' ? 'by ' + x.cancelBy : null}
                    </td>
                    <td>
                      {x.status == 'Booked' ? (
                        <button
                          onClick={(e) => handleCancel(x.appointmentid)}
                          className='btn btn-outline-danger btn-sm mr-2'
                        >
                          Cancel
                        </button>
                      ) : null}
                      {x.status === 'Paid' ? (
                        <button
                          onClick={(e) =>
                            navigate('/viewbill/' + x.appointmentid)
                          }
                          className='btn btn-success btn-sm'
                        >
                          View Details
                        </button>
                      ) : null}
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

export default MyAppointments
