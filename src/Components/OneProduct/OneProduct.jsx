import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { memo, useState } from 'react';
import getCookie from '../../Hooks/getCookie';
import { SpanColor } from './Styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { postCart } from '../../Redux/API_Slice/CartAdd.slice';
import { getCart } from '../../Redux/API_Slice/CartGet.slice';

const OneProduct = ({productState, cart}) => {
    console.log('hello i am OneProduct components');
    const location = useLocation();
    const navigate = useNavigate()
    const {loading, data, error} = productState
    const {product} = data ? data : {} 
    // setState and its fn
    // needed : 
    const dispatch = useDispatch();
    const {
        loading: cartLoading, 
        data: cartData, 
        error: cartError 
    } = useSelector(state => state.cart_add );
    const token = getCookie('token') && JSON.parse(getCookie('token'))
    const userId = getCookie('userID') && JSON.parse(getCookie('userID'))
    const productId = location.pathname.split('/')[2];
    const [ color, setColor ] = useState('');
    const [ size, setSize ] = useState('');
    const [ quantity, setQuantity ] = useState(1)
    const handleAddToCart = async () => {
        if(!token){
            navigate('/login')
        }else{
            const addToCart = {
                userId,
                cart: {
                    productId,
                    title: product?.title,
                    image: product?.img,
                    price: product?.price,
                    color,
                    size,
                    quantity
                }
            }
            const res = await dispatch(postCart(addToCart))
            .then(() => dispatch(getCart(userId)))
            return res
        }
    }

    return (
        <div className='oneProduct'>
            <div className="container">
                {
                    (data === null && loading === false ) &&
                    <h1>no product here...</h1>
                }
                {
                    loading === true &&
                    <h1>loading...</h1>
                }
                {
                    error === true &&
                    <h1 style={{color: 'red'}}>something went wrong...</h1>
                }
                {
                product &&
                <div className="productContent">
                    <div className="productImg">
                        <img src={product.img} alt={product.title} />
                    </div>
                    <div className="productInfo">
                        <h2>{product.title}</h2>
                        <p className="desc">
                            {product.desc}
                        </p>
                        <p className="price">$ {product.price}</p>
                        <div className="productFiltering1">
                            <div className="colorFiltering">
                                <span className='titleColor'>color</span>
                                {
                                    product?.color.map(i => (
                                        <SpanColor
                                            className='spanColor' 
                                            key={i} 
                                            color={i}
                                            onClick={() => setColor(i)}
                                        />
                                    ))
                                }
                                {
                                    cartData?.status === 500 &&
                                    <p style={{color: "red", marginTop: '15px'}}>{cartData?.errors.color}</p>
                                }
                            </div>
                            <div className="sizefiltering">
                                <span>Size</span>
                                <select onChange={(e) => setSize(e.target.value)}>
                                    <option value='' >none</option>
                                {
                                    product?.size.map(i => (
                                        <option key={i}>{i}</option>
                                    ))
                                }
                                </select>
                                {
                                    cartData?.status === 500 &&
                                    <p style={{color: "red", marginTop: '5px'}}>{cartData?.errors.size}</p>
                                }
                            </div>
                        </div>
                        <div className="productFiltering2">
                            <div className="chooseCount">
                                <button onClick={() => setQuantity(quantity + 1)}>
                                    <AddIcon />
                                </button>
                                <div
                                    style={{
                                        border: "1px solid teal",
                                        padding: "5px 10px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {quantity}
                                </div>
                                <button onClick={() => setQuantity(quantity - 1)}>
                                    <RemoveIcon />
                                </button>
                                {
                                    cartData?.status === 500 &&
                                    <p style={{color: "red"}}>{cartData?.errors.quantity}</p>
                                }
                            </div>
                            
                            {
                                cartLoading === true ?
                                <button className='loading' disabled={true}>
                                    Loading...
                                </button>
                                :
                                <button className='add' onClick={handleAddToCart}>
                                    add to cart
                                </button>
                            }
                        </div>
                        {
                            (cartError === true || cartData === 404 ) &&
                            <p style={{color: "red"}}>something went wrong ....</p>
                        }
                        {
                            cartData?.status === 200 &&
                            <p style={{color: "teal"}}>product (({product.title})) added successfully ...</p>
                        }
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default memo(OneProduct)