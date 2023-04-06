import { Link } from 'react-router-dom'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

function Membership() {
  
  return (
    <>
      <div className='container-fluid'>
        <div className='row '>
                  <div className='col-sm-7 mx-auto p-3 font-italic'>
                      <div className='card shadow ' style={{ color: 'white' }}>
                          <div className='card-header ' style={{ backgroundColor: 'green' }} >
                <h5>Membership Page</h5>
              </div>
                          <div className='card-body'>
                              <img src="https://afterhoursmedical.com/wp-content/uploads/2014/03/MedicalMembership-gray.png" alt="not Found"></img>
                              <Link to='/uhome' style={{ color: 'green', fontWeight: 'bolder' }}>Skip to Portal</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Membership
