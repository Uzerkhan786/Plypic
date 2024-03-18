import React from 'react'
import { Link } from 'react-router-dom';
const ProductDetails = ({ obj }) => {

  const { productName, price, image, _id, department } = obj;

  return (
    <Link to={`/products/${_id}`}><div className='h-60 border border-black  m-2 rounded-md '>
      <img className='w-80 h-40 rounded-md px-1 my-1 ' src={image} alt="" />
      <div className='  mx-2 '>
        <div>
          <h1 className='text-2xl'>{productName}</h1>
        </div>
        <div className='flex justify-between '>
          <h1 className='font-bold '>Price: ₹{price}</h1>
          <h1 className='font-bold '>Category: {department}</h1>
        </div>
      </div>

    </div> </Link>
  )
}

export default ProductDetails
