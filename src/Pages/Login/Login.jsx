import { memo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom' 
import { postLogin } from '../../Redux/API_Slice/Login.slice';
import setCookie from '../../Hooks/setCookie';

const Login = () => {
    console.log('hello i am login page');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector( state => state.login)
    const handleLogin = () => {
        return new Promise(() => {
            dispatch(postLogin({email, password}))
            .then(({payload}) => {
                if (payload.status === 200) {
                    setCookie(
                        "token",
                        JSON.stringify(`barear ${payload.token}`)
                    )
            
                    setCookie(
                        "userID",
                        JSON.stringify(payload.user._id)
                    )
                    window.location.reload()
                    navigate('/')
                }
            }).catch(({payload}) => {
                payload.status !== 200 && navigate('/login')
            })
        })
    }

    return (
        <div className='login'>
            <div className="loginContent container">
                <h2>Login</h2>
                <div className="inputs">
                    <input
                        type="text" 
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        data?.status === 500 && <p>{data?.error}</p>
                    }
                </div>
                {
                    loading === false ? 
                    <button onClick={handleLogin}>Login</button>
                    :
                    <button className='loadingBtn' disabled={true}>loading...</button>
                }
                {
                    (data === 404 || error === true) && 
                    <span className='errMsg'>Something Went Wrong</span>
                }
                <p>
                    do not you remember your password ?
                </p>
                <p onClick={() => navigate('/register')}>
                    create a new account
                </p>
                
            </div>
        </div>
    )
}

export default memo(Login)