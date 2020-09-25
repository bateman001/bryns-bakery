import React, {useState} from 'react'
import TokenService from '../../services/token-service'
import AuthService from '../../services/auth-api-service'
import PropTypes from 'prop-types'

export default function Login(props){
const [error, setError] = useState(null)
	
	const handleLoginSuccess = () => {
		const { history } = props
		const destination = '/AdminView'
		history.push(destination)
	}

    const submitCredentials = (ev) => {
		ev.preventDefault()
		setError(null)
		const { username, password } = ev.target
	
		AuthService.postLogin({
		  name: username.value.trim(),
		  password: password.value.trim()
		})
		.then(res => {
			username.value = ''
			password.value = ''
			TokenService.saveAuthToken(res.authToken)
			handleLoginSuccess()
		  })
		  .catch(res => {
			setError({ error: res.error })
		  })
					  
    }
	
    return(
        <>
	<form onSubmit={(e) => submitCredentials(e)} className='login' id='admin-login'>
		<h1>Admin Login</h1>
		<p>If you're not Bryn, this isn't for you!</p>
		<label htmlFor='username'>Username</label>
		<input type='text' name='username' id='username'  required/>

		<label htmlFor='password'>Password</label>
		<input type='password' name='password' id='password'  required/>

		<input type='submit' className='submit' id='admin-login' />

	</form>

        </>
    )
}

Login.propTypes = {
	history: PropTypes.object.isRequired
}