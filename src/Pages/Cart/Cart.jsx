import { memo } from 'react';
import Announcement from '../../Components/Announcement/Announcement'
import CartComponent from '../../Components/CartComponent/CartComponent';
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import SADEK from '../../Components/SADEK/SADEK';


const Cart = ({cart}) => {
  console.log('hello i am card page');
  const {data} = cart
  return (
    <>
        <Navbar cart={data?.status === 200 && data?.count} />
        <Announcement />

        <CartComponent cart={cart} />
        
        <Newsletter />
        <Footer />
        <SADEK />
    </>
  )
}

export default memo(Cart)