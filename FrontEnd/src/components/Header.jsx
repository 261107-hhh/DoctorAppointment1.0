import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const uname = sessionStorage.getItem('uname')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logout = () => {
    dispatch({ type: 'LogOut' })
    sessionStorage.clear()
    navigate('/')
  }
    return (
        <div className='jumbotron p-3 mb-2 mt-2 ml-2 mr-2 text-white rounded-2' style={{ backgroundColor: 'green' }}>
      <h5 className='float-left m-2'>Welcome ! {uname}</h5>
      <button
        onClick={() => logout()}
        className='float-right btn btn-light btn-sm text-danger font-weight-bold'
      >
        Logout
      </button>
      <h4 className='text-center font-weight-bold font-italic'>Hospital Management Portal</h4>
    </div>
  )
}

export default Header
