import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../shared"
import { AuthContext } from '../context'

useForm

export const AuthPage = () => {

  const [ errorState, setErrorState ] = useState(false)
  const {login} = useContext( AuthContext )

  const { user, password, inputChange } = useForm({
    user: '',
    password: ''
  })

  const navigate = useNavigate()

  const lastPath = localStorage.getItem('lastPath') || '/'

  const onLogin = (event) => {
    event.preventDefault()

    if( user !== 'Alberto' || password !== '123456' ) {
      setErrorState(true)
    } else {
      setErrorState(false)
      login('Alberto');
      navigate( lastPath , { replace: true })
    }

  }

  return (
    <>
    <div className="cover-login">
      <div className="container pt-5">
        <div className="row mt-5 pt-5">
          <div className="col-sm-4 offset-sm-4">
            <div className="card shadow shadow-sm bg-light p-3">
              <form onSubmit={onLogin}>
                <img src="/heroes/dc-marvel.jpg" className="img-fluid rounded" />
                <div className="form-group mt-3">
                  <label htmlFor="user">Username</label>
                  <input type="text" className="form-control form-control-sm" name="user" placeholder="Enter user" onChange={inputChange}/>
                </div>
                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control form-control-sm" name="password" placeholder="Password" onChange={inputChange}/>
                </div>
                <div className="form-group mt-3">
                  <button type="submit" className="btn btn-primary w-100 btn-sm">
                    Login
                  </button>
                </div>
                {
                  errorState && <div className="alert alert-danger alert-sm mt-5 text-center fw-bold">User or password incorrect</div>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
