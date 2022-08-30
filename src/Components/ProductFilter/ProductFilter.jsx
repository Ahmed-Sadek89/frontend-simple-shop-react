import { memo, useState } from 'react'
import { useLocation } from 'react-router-dom';
import useProductsInCatHook from '../../Hooks/useProductsInCatHook';
import ProductsInCat from '../ProductsInCat/ProductsInCat';

const ProductFilter = () => {
  console.log('hello i am ProductFilter components');
  
  const location = useLocation();
  const catName = location.pathname.split('/')[2];
  const products = useProductsInCatHook(catName)
  
  const [filteredData, setFilteredData] = useState({})
  const [sortingData, setSortingData] = useState('');

  const handleFilteredData = (e) => {
    setFilteredData(() => {
      if(e.target.value !== ''){
        return {
          ...filteredData,
          [e.target.name]: e.target.value
        }
      }else{
        delete filteredData[e.target.name]
        return{
          ...filteredData,
        }
      }
    })
  }

  return (
    <>
      <div className='productFilter'>
        <div className="container">
            <h2>{catName}</h2>
            <div className="filterOptions">
              <div className="filterDetails">
                <span>filter products</span>
                <div className="select">
                  <select 
                    className='colorSelect' 
                    name="color"
                    onChange={handleFilteredData}
                  >
                    <option disabled>
                      Color
                    </option>
                    <option value=''>All</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                  </select>
                  <select
                    name="size"
                    onChange={handleFilteredData}
                  >
                    <option disabled>
                      Size
                    </option>
                    <option value=''>All</option>
                    <option value="xs">XS</option>
                    <option value="sm">S</option>
                    <option value="md">M</option>
                    <option value="lg">L</option>
                    <option value="xl">XL</option>
                    <option value="xxl">2XL</option>
                    <option value="3xl">3XL</option>
                  </select>
                </div>
              </div>
              <div className="filterSort">
                <span>sort products</span>
                <select onChange={(e) => setSortingData(e.target.value)} defaultValue={sortingData}>
                  <option value="newest">Newest</option>
                  <option value="asc">Price (asc)</option>
                  <option value="desc">Price (desc)</option>
                </select>
              </div>
            </div>
        </div>
      </div>
      <ProductsInCat
        products={products}
        catName={catName}
        filterdColorAndSize={filteredData}
        sortingData={sortingData}
      />
    </>
  )
}

export default memo(ProductFilter)
