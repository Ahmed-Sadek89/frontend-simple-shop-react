import React, { memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { postSignup } from '../../Redux/API_Slice/Signup.slice';


const Signup = () => {
    console.log('hello i am Signup page');

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state => state.signup)
    
    const handleSignup = (e) => {
        e.preventDefault()
        
        return new Promise(() => {
            dispatch(postSignup({
                firstName: fname,
                lastName: lname,
                username,
                email,
                password,
                confirmPassword
            })).then(({payload}) => {
                payload.status === 200 && navigate('/login')
            }).catch(({payload}) => {
                payload.status !== 200 && navigate('/register')
            })
        })
    }
  return (
    <div className='signup'>
        <form className="signupContent container">
            <h2>create an account</h2>
            <div className="inputs">
                <div>
                    <input 
                        type="text" 
                        placeholder='first name' 
                        value={fname} 
                        onChange={(e) => setFname(e.target.value)}
                    /> 
                    {
                        data?.status === 500 && <p>{data?.errors.firstName}</p>
                    }
                    
                </div>
                <div>
                    <input
                        type="text" 
                        placeholder='last name'
                        value={lname} 
                        onChange={(e) => setLname(e.target.value)}
                    />
                    {
                        data?.status === 500 && <p>{data?.errors.lastName}</p>
                    } 
                </div>
            </div>
            
            <div className="inputs">
                <div>
                    <input
                        type="text" 
                        placeholder='username'
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {
                        data?.status === 500 && <p>{data?.errors.username}</p>
                    } 
                </div>
                <div>
                    <input
                        type="email"
                        placeholder='email'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {
                        data?.status === 500 && <p>{data?.errors.email}</p>
                    } 
                </div>
            </div>
            <div className="inputs">
                <div>
                    <input
                        type="password" 
                        placeholder='passsword'
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        data?.status === 500 && <p>{data?.errors.password}</p>
                    }  
                </div>
                <div>
                    <input
                        type="password"
                        placeholder='confirm passsword'
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {
                        data?.status === 500 && <p>{data?.errors.confirmPassword}</p>
                    }  
                </div>
            </div>
            <p>
                By creating an account, I consent to the processing of my personal
                data in accordance with the <br/><b>PRIVACY POLICY</b>
            </p>
            {
                loading === false ? 
                <button className='signupBtn' type='submit' onClick={handleSignup}>create</button>
                :
                <button className='loadingBtn' disabled={true}>loading...</button>
            }
            {
                (data === 404 || error === true) && 
                <span className='errMsg'>Something Went Wrong</span>
            }
        </form>
    </div>
  )
}

export default memo(Signup)