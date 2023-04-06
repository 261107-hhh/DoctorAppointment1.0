import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import loginvalidation from '../validation/loginvalidation'
import userservice from '../services/userservice'
import { Card } from '@mui/material';

function LoginPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [errmsg, setErrmsg] = useState(null)

  const [user, setUser] = useState()
  const [errors, setErrors] = useState({})

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleReset = (e) => {
    e.preventDefault()
    document.querySelector('#f1').reset()
    setUser(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(loginvalidation(user))
    console.log(Object.keys(errors))
    console.log(user)
    if (Object.keys(errors).length === 0) {
      console.log(user)
      userservice
        .validate(user)
        .then((resp) => {
          let result = resp.data
          console.log(result)
          sessionStorage.setItem('userid', result.userid)
          sessionStorage.setItem('uname', result.uname)
          sessionStorage.setItem('role', result.role)
          sessionStorage.setItem('id', result.uid)
          sessionStorage.setItem('token', result.accessToken)
          dispatch({ type: 'IsLoggedIn' })
          if (result.role === 'Doctor') navigate('/uhome')
          else navigate('/membership')
        })
        .catch((error) => {
          console.log('Error', error)
          setErrmsg('Invalid username or password')
        })
    }
  }

    return (
        <div className='bg-white' style={{height:"44rem"} } >
          <div className='jumbotron p-4 shadow mb-4  rounded text-center text-white font-weight-bold font-italic' style={{ backgroundColor: 'green' }} >
              <h4>Hospital Management System</h4>
          </div>
          <div className='container pt-4 ' >
              <div className='row ' style={{ height:"30rem"} }>
                  <div className='col-sm-5 mx-auto'>
                      <form className='card shadow mt-5 ' id='f1' onSubmit={handleSubmit} style={{ backgroundColor: 'green' }}>
              <div className='card-header bg-white'>
                <h5 className='text-center'>Login Page</h5>
              </div>
              <div className='card-body'>
                <div className='form-group form-row'>
                                  <label className='col-sm-4 col-form-label text-white font-weight-bold'>User Id</label>
                  <div className='col-sm-8'>
                    <input
                      type='text'
                      name='userid'
                      required
                      className='form-control'
                      placeholder='User Id'
                      value={user?.userid}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                <div className='form-group form-row'>
                                  <label className='col-sm-4 col-form-label text-white font-weight-bold'>Password</label>
                  <div className='col-sm-8'>
                    <input
                      type='password'
                      required
                      className='form-control'
                      name='pwd'
                      placeholder='Password'
                      value={user?.pwd}
                      onChange={handleInput}
                    />
                  </div>
                </div>
                              <button className='btn btn-light float-right font-weight-bold text-success'>Login</button>
                <button
                  onClick={handleReset}
                                  className='btn btn-light float-right mr-2 font-weight-bold text-danger'
                >
                  Reset
                </button>
              </div>
                          <div className='card-footer bg-white '>
                {errmsg != null ? (
                  <div className='alert  text-danger text-center font-weight-bold'>
                    {errmsg}
                  </div>
                              ) : null}

                              <Card >
                                  <div header style={{ padding: 7, backgroundColor: 'green', textAlign: 'center' }}>
                                      <button style={{ margin: 5 }}><Link to='/register' style={{ color: 'red', fontWeight: 'bold' }}>Patient Registration</Link></button> 
                                      <br />
                                      <button style={{ margin: 5 }}><Link to='/doctors' style={{ color: 'green', fontWeight: 'bold' }}>All Doctors</Link></button>
                                  </div>
                                  
                          </Card>
                 
              </div>
            </form>
          </div>
              </div>

      </div>
    </div>
  )
}

export default LoginPage
