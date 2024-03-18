import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const PendingPageDetails = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const [click, setClick] = useState(true)
    const [review, setReview] = useState();
    const [flag, setFlag] = useState(false)
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`http://localhost:3001/api/v1/review/${id}`);
            const json = await res.json();
            setReview(json?.data)
        }
        fetchProduct();

    }, [review])
    const show = () => {
        setFlag(!flag)
    }

    const postData = async () => {
        const res = await fetch(`http://localhost:3001/api/v1/review/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                status: 'APPROVED',
                admin_id: user.data._id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const json = await res.json();
        console.log(json);
        alert('You have approved the changes')
        setFlag(!flag)
    }

    const rejectData = async () => {
        const res = await fetch(`http://localhost:3001/api/v1/review/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                status: 'REJECTED',
                admin_id: user.data._id
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        const json = await res.json();
        console.log(json);
        alert('You have rejected the changes')
    }

    return (

        <>
            <div class="h-full bg-gray-100 pt-7 mb-10">
                <h1 class="mb-10 text-center text-3xl font-bold text-red-500">Pending Request</h1>

                <div class="mx-auto max-w-5xl justify-center px-4 md:flex md:space-x-6 xl:px-0 ">
                    <div class="rounded-lg md:w-2/3">

                        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm: sm:justify-start">
                            <h1 className='text-center text-3xl font-bold text-gray-900 pb-7'>Present state</h1>
                            <div className='flex '>

                                <div className='my-auto mx-20'>
                                    <img className='rounded-md h-40 w-44' src={review?.present?.image} alt="" />
                                    {/* <input type="file" onChange={change} id='image' placeholder='image' /> */}
                                </div>

                                <div>
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-lg font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Name: </span>{review?.present?.productName}</h2>

                                    </div>
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-lg font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Category: </span>{review?.present?.department}</h2>

                                    </div>
                                    <div class="mt-5 sm:mt-0 pb-2">
                                        <h2 class="text-lg font-bold text-gray-900"><span className='font-semibold text-xl'>Price: </span>₹ {review?.present?.price}</h2>
                                    </div>

                                    <div class="mt-5 sm:mt-0 ">
                                        <h2 class="text-lg font-normal text-gray-900"><span className=' text-xl font-semibold'>Description: </span>{review?.present?.productDescription.substr(0, 50)}</h2>
                                    </div>

                                </div>
                            </div>
                            <h1 className='text-center text-3xl font-bold text-gray-900 py-5'>To be Updated</h1>
                            <div className='flex '>

                                <div className='my-auto mx-20'>
                                    <img className='rounded-md h-40 w-44' src={review?.update?.image} alt="" />
                                    {/* <input type="file" onChange={change} id='image' placeholder='image' /> */}
                                </div>

                                <div>
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-lg font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Name: </span>{review?.update?.productName}</h2>

                                    </div>
                                    <div class="mt-5 sm:mt-0">
                                        <h2 class="text-lg font-bold text-gray-900 pb-4"><span className='font-semibold text-xl'>Category: </span>{review?.update?.department}</h2>

                                    </div>
                                    <div class="mt-5 sm:mt-0 pb-2">
                                        <h2 class="text-lg font-bold text-gray-900"><span className='font-semibold text-xl'>Price: </span>₹ {review?.update?.price}</h2>
                                    </div>

                                    <div class="mt-5 sm:mt-0 ">
                                        <h2 class="text-lg font-normal text-gray-900"><span className=' text-xl font-semibold'>Description: </span>{review?.updatet?.productDescription}</h2>
                                    </div>

                                </div>
                            </div>

                            <div class="mt-10 flex   sm:space-y-6 sm:mt-0 sm:block sm:space-x-6 ">
                                <div class="flex items-center space-x-4 mt-10">
                                    <div class="relative inline-block">
                                        <div>
                                            <button type="button" onClick={show} class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-600" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                                {review?.status}
                                                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                        {flag && <div class="py-3" role="none">
                                            <h1 onClick={postData} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"  >APPROVED</h1>
                                            <h1 onClick={rejectData} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >REJECTED</h1>
                                        </div>}
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PendingPageDetails
