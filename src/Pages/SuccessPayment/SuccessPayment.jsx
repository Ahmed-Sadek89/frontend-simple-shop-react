import {memo} from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {useNavigate} from 'react-router-dom';

const SuccessPayment = () => {
  const navigate = useNavigate()
  console.log('hello i am SuccessPayment page');
  return (
    <div className='success'>
      <div className="successContent">
        <h2 style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>payment success <CheckCircleIcon /></h2>
        <h3>thank you for dealing with us</h3>
        <h4>SADEK</h4>
        <button onClick={() => navigate('/')}>back to main</button>
      </div>
    </div>
  )
}

export default memo(SuccessPayment)
