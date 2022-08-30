import {memo} from 'react'
import { Link } from 'react-router-dom';
import {categories} from '../../Assets/Data';

const Categories = () => {
    console.log('hello i am categories components');
    return (
    <div className='categories'>
        <div>
            <div className="categoriesContent">
                {categories.map(index => (
                    <div className='content' key={index.id}>
                        <div className="catImage">
                            <img src={index.img} alt={index.title} />
                        </div>
                        <div className="catInfo">
                            <h1>{index.title}</h1>
                            <Link to={`/products/${index.cat}`}>
                                <button>
                                    SHOP NOW
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default memo(Categories)