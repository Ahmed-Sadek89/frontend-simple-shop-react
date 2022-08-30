import { Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { memo } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import distroyCookie from '../../Hooks/distroyCookie';
import getCookie from '../../Hooks/getCookie';

const Header = ({cart}) => {
  console.log('hello i am Header components');
  const token = JSON.parse(getCookie('token') ? getCookie('token') : null)
  
  const navigate = useNavigate()

  const handleLogout = () => {
    console.log('logout!');
    distroyCookie('userID');
    distroyCookie('token')
    
    navigate('/')
    window.location.reload()
  }

  return (
    <div className='navbar container'>
        <div className="part1">
          <select>
            <option>en</option>
            <option>ar</option>
          </select>
          <div className='search'>
            <input type='text' placeholder='Search..'/>
            <SearchIcon className='SearchIcon'/>
          </div>
        </div>
        <div>
          <Link to='/' className="part2">sadek.</Link>
        </div>
        <div className="part3">
          {
            token ?
            <>
              <button onClick={handleLogout}>
                logout
              </button>
              <Link to='/cart'>
                <Badge
                  badgeContent={cart} 
                  color="primary" 
                  className='badge' 
                  overlap="rectangular"
                >
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </>
            :
            <>
              <button>
                <Link to='/register'>register</Link>
              </button>
              <button>
                <Link to='/login'>login</Link>
              </button>
            </>
          }
          
        </div>
    </div>
  )
}

export default memo(Header)