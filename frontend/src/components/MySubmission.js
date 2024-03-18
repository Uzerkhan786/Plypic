import React, { useState, useEffect } from 'react'
const MySubmission = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [submission, setSubmission] = useState();
    const fetchData = async () => {
        const res = await fetch(`https://plypicker-vvy3.onrender.com/api/v1/review?author=${user?.data?._id}`);
        const json = await res.json();
        setSubmission(json?.data);
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div class="h-screen bg-gray-100 pt-7">
            <h1 class="text-4xl text-red-500 font-bold text-center pb-10 ">Requested Submission </h1>
            {submission ? submission.map((item) => {

                

                return <div class="mx-auto max-w-5xl justify-center px-4 md:flex md:space-x-6 xl:px-0 ">
                    <div class="rounded-lg md:w-2/3">

                        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm: sm:justify-start">
                            <h1 className='text-center text-3xl font-bold text-gray-900 pb-7'>Present state</h1>
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between ">

                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-xl font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Name: </span>{item?.present?.productName}</h2>

                                </div>
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-xl font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Category: </span>{item?.present?.department}</h2>

                                </div>
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-xl font-bold text-gray-900"><span className='font-semibold text-xl'>Price: </span>₹ {item?.present?.price}</h2>
                                </div>
                            </div>

                            <h2 class=" sm:ml-4 text-xl  text-gray-900 pb-4"><span className='font-semibold text-xl'>Description: </span>{item?.present?.productDescription}</h2>
                            <h1 className='text-center text-3xl font-bold text-gray-900 py-5'>Given for Approval</h1>
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between ">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-3xl font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Name:  </span> {item?.update?.productName}</h2>
                                </div>
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-xl font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Category:  </span>{item?.update?.department}</h2>
                                </div>
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-xl font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Price: </span>{item?.update?.price}</h2>
                                </div>
                                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div class="flex items-center space-x-4">
                                        <div class="relative inline-block text-left">
                                            <div>
                                                <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                    {item?.status}
                                                    <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                    </svg>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <h2 class=" sm:ml-4 text-xl  text-gray-900 pb-4"><span className='font-semibold text-xl'>Description: </span> {item?.update?.productDescription}</h2>


                        </div>
                    </div>
                </div>
            }) : (<h1 className='text-6xl text-red-500 font-bold text-center mt-10'>There is no pending request </h1>)}
        </div>
    )
}

export default MySubmission
