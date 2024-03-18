import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom'
const Product = () => {


  const user = JSON.parse(localStorage.getItem('user'));
  const [flag, setFlag] = useState(true)
  const [product, setProduct] = useState();
  const { id } = useParams();
  const fetchProduct = async () => {
    const res = await fetch(`https://plypicker-vvy3.onrender.com/api/v1/products/${id}`);
    const json = await res.json();
    setProduct(json?.data);
  }
  useEffect(() => {
    fetchProduct();
    console.log(product);
  }, [product])


  const [item, setItem] = useState(null);
  const updateData = async () => {
    const res = await fetch(`https://plypicker-vvy3.onrender.com/api/v1/products/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        email: user.data.email,
        productName: item.productName,
        productDescription: item.productDescription,
        department: item.department,
        price: item.price,
        image: product.image
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const json = await res.json();
    setProduct(json.data)
  }
  const formSubmit = (e) => {
    e.preventDefault();
    if (item == null) {
      return toast.error('Please edit some thing')
    }
    setFlag(!flag)
    updateData();

  }
  const change = (e) => {
    setItem({ ...item, [e.target.id]: e.target.value })
  }

  return (
    <>
      <div><Toaster /></div>
      <form className="space-y-4 md:space-y-6" enctype="multipart/form-data" onSubmit={formSubmit}  >
        <div class="mr-96 min-h-screen bg-gray-100 py-3 flex flex-col justify-center sm:py-12">
          <div class=" relative py-3 sm:max-w-xl sm:mx-auto">
            <div
              class="w-[900px] absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
            </div>
            <div class="relative w-[900px]  bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <div class="max-w-full mx-auto">
                <div>
                  <h1 class="text-4xl font-semibold text-center">Product Details</h1>
                </div>
                <div className='flex justify-between'>
                  <div className='my-auto mr-16'>
                    <img className='rounded-md h-56 w-64' src={product?.image} alt="" />
                    {/* <input type="file" onChange={change} id='image' placeholder='image' /> */}
                  </div>

                  <div class="divide-y divide-gray-200 w-[500px]">


                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div class="relative">
                        <input autocomplete="off" id="productName" type="text" onChange={change} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder={product?.productName} />
                        <label for="productName" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{product?.productName}</label>
                      </div>
                      <div class="relative">
                        <input autocomplete="off" id="productDescription" type="text" onChange={change} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder={product?.productDescription?.substr(0, 5)} />
                        <label for="productDescription" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{product?.productDescription?.substr(0, 60)}</label>
                      </div>
                      <div class="relative">
                        <input autocomplete="off" id="department" type="text" onChange={change} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder={product?.department} />
                        <label for="department" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{product?.department}</label>
                      </div>
                      <div class="relative">
                        <input autocomplete="off" id="price" type="text" onChange={change} class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder={product?.price} />
                        <label for="price" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">{product?.price}</label>
                      </div>

                      <div class="relative">
                        <button type='submit' onClick={() => {
                          if (user.data.role === 'ADMIN') {
                            toast.success('Updated the product successfully')
                          }
                          else {
                            toast.success('Successfully send for approval')
                          }
                        }} class="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </form>



    </>


  )
}

export default Product
