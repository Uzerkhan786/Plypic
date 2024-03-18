import { useState, useEffect } from 'react'
import ProductDetails from './ProductDetails';
import Shimmer from './Shimmer';
const AllProducts = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [items, setItems] = useState(null);
    const Fetch = async () => {
        const res = await fetch('http://localhost:3001/api/v1/products');
        const json = await res.json();
        setItems(json?.data)
    }
    useEffect(() => {
        Fetch();
    }, [])

    return (
        <>
            {user == null ? (<h1 className='text-3xl text-red-500 font-bold text-center mt-10'>Please login first</h1>) : (
                <div>
                    <h1 className='text-3xl text-red-500 font-bold text-center mt-10'>All the Products</h1>
                    {items == null ? (<Shimmer />) : (<div className='flex flex-wrap mx-16 my-3'>
                        {items?.map((item, index) => <ProductDetails key={index} obj={item} />)}
                    </div>)}

                </div>
            )}


            {/* { */}



        </>
    )
}

export default AllProducts
