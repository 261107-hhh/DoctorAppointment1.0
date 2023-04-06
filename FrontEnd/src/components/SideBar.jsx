import { Link } from 'react-router-dom'

function SideBar() {
  const role = sessionStorage.getItem('role')
  console.log('Role ', role)
  const isadmin = role === 'Admin' 
  const isdoctor = role === 'Doctor'
  const ispatient = role === 'Patient'
  return (
    <div className='list-group list-group-flush '>
      {isdoctor ? (
        <>
          <Link
            to='/uhome'
                      className='list-group-item list-group-item-action p-2 text-left  bg-light  font-weight-bold' style={{ color: 'green' }}
          >
            Profile
          </Link>
          <Link
            to='/patients'
                      className='list-group-item list-group-item-action p-2 text-left  bg-light  font-weight-bold' style={{ color: 'green' }}
          >
            Patients
          </Link>
          <Link
            to='/appointments'
                      className='list-group-item list-group-item-action p-2 text-left  bg-light  font-weight-bold' style={{ color: 'green' }}
          >
            Appointments
          </Link>
          <Link
            to='/bills'
                      className='list-group-item list-group-item-action p-2 text-left  bg-light  font-weight-bold' style={{ color: 'green' }}
          >
            Bills
          </Link>
          
        </>
      ) : null}
      {ispatient ? (
        <>
          <Link
                      to='/uhome'
                      className='list-group-item list-group-item-action p-2 text-left bg-light  font-weight-bold' style={{ color: 'green' }}
          >
            Profile
          </Link>
          <Link
            to='/book'
                      className='list-group-item list-group-item-action p-2 bg-light text-left  font-weight-bold ' style={{ color: 'green' }}
          >
            Book Appointment
          </Link>
          <Link
            to='/myappointments'
                      className='list-group-item list-group-item-action p-2 bg-light text-left font-weight-bold ' style={{ color: 'green' }}
          >
            My Appointments
          </Link>
          {/* <Link
            to='/testreq'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Test Request
          </Link>
          <Link
            to='/mytests'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            My Tests
          </Link>
          <Link
            to='/history'
            className='list-group-item list-group-item-action p-2 text-left'
          >
            Treatment History
          </Link> */}
        </>
      ) : null}
    </div>
  )
}

export default SideBar
