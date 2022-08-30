import {memo} from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link } from './Styles';

const Footer = () => {
    console.log('hello i am Footer components');

  return (
    <div className='footer'>
        <div className="container">
            <div className="content">
                <div className="parts part1">
                    <h2>SADEK.</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but
                        the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don’t look even slightly believable.
                    </p>
                    <div className="socialLinks">
                        <Link color="3B5999">
                            <FacebookIcon/>
                        </Link>
                        <Link color="E4405F">
                            <InstagramIcon/>
                        </Link>
                        <Link color="55ACEE">
                            <TwitterIcon/>
                        </Link>
                        <Link color="E60023">
                            <PinterestIcon/>
                        </Link>
                    </div>
                </div>
                <div className="parts part2">
                    <h4>useful links</h4>
                    <div className="links">
                        <ul>
                            <li>home</li>
                            <li>man fashion</li>
                            <li>accessories</li>
                            <li>order tracking</li>
                            <li>wishlist</li>
                        </ul>
                        <ul>
                            <li>cart</li>
                            <li>women fashion</li>
                            <li>my account</li>
                            <li>wishlist</li>
                            <li>terms</li>
                        </ul>
                    </div>
                </div>
                <div className="parts part3">
                    <h2>contact</h2>
                    <div className="contact">
                        <LocationOnIcon />
                        <span>622 Dixie Path , South Tobinchester 98336</span>
                    </div>
                    <div className="contact">
                        <PhoneIcon />
                        <span>+1 234 56 78</span>
                    </div>
                    <div className="contact">
                        <MailOutlineIcon />
                        <span>contact@sadek.dev</span>
                    </div>
                    <img alt='payment' src="https://i.ibb.co/Qfvn4z6/payment.png" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default memo(Footer)