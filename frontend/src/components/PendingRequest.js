import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom';
const PendingRequest = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [request, setRequest] = useState(null);
    const fetchData = async () => {
        const res = await fetch(`http://localhost:3001/api/v1/review`);
        const json = await res.json();
        if (json.data.length !== 0) {
            setRequest(json?.data);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <>

            <div class="h-full bg-gray-100 pt-7 mb-10">
                <h1 className='text-3xl text-red-500 font-bold text-center mt-4 pb-10'>Pending Request</h1>
                {request ? request.map((item) => {
                    return <Link to={`/pending-requests/${item._id}`}> <div class="mx-auto max-w-5xl justify-center px-4 md:flex md:space-x-6 xl:px-0">
                        <div class="rounded-lg md:w-2/3">

                            <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm: sm:justify-start">
                                <button type="button" class="inline-flex   m-auto justify-center gap-x-1.5 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">{item.status}</button>
                                <h1 className='text-center text-3xl font-bold text-gray-900 pb-5'>Present state</h1>
                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between pb-10">
                                    <div className='flex '>

                                        <div className='my-auto mx-20'>
                                            <img className='rounded-md h-40 w-44' src={item?.present?.image} alt="" />
                                            {/* <input type="file" onChange={change} id='image' placeholder='image' /> */}
                                        </div>

                                        <div>
                                            <div class="mt-5 sm:mt-0">
                                                <h2 class="text-lg font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Name: </span>{item?.present?.productName}</h2>

                                            </div>
                                            <div class="mt-5 sm:mt-0">
                                                <h2 class="text-lg font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Category: </span>{item?.present?.department}</h2>

                                            </div>
                                            <div class="mt-5 sm:mt-0 pb-2">
                                                <h2 class="text-lg font-bold text-gray-900"><span className='font-semibold text-xl'>Price: </span>₹ {item?.present?.price}</h2>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                                <h1 className='text-center text-3xl font-bold text-gray-900 pb-5'>To be Updated</h1>
                                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between pb-12">
                                    <div className='flex '>

                                        <div className='my-auto mx-20'>
                                            <img className='rounded-md h-40 w-44' src={item?.update?.image} alt="" />
                                            {/* <input type="file" onChange={change} id='image' placeholder='image' /> */}
                                        </div>

                                        <div>
                                            <div class="mt-5 sm:mt-0">
                                                <h2 class="text-lg font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Name: </span>{item?.update?.productName}</h2>

                                            </div>
                                            <div class="mt-5 sm:mt-0">
                                                <h2 class="text-lg font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Category: </span>{item?.update?.department}</h2>

                                            </div>
                                            <div class="mt-5 sm:mt-0 pb-2">
                                                <h2 class="text-lg font-bold text-gray-900"><span className='font-semibold text-xl'>Price: </span>₹ {item?.update?.price}</h2>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <button type="button" class="inline-flex  justify-center gap-x-1.5 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">Details ....</button>
                            </div>
                        </div>
                    </div>
                    </Link>
                }) : (<h1 className='text-3xl text-red-500 font-bold text-center mt-10'>There is no pending request </h1>)}
            </div>
        </>


    )
}

export default PendingRequest
