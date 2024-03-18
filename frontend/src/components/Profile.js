import React, { useEffect, useState } from 'react'

const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const [stats, setStats] = useState()
    const fetchStats = async () => {
        const res = await fetch(`https://plypicker-vvy3.onrender.com/api/v1/review?author=${user.data._id}`)
        const json = await res.json();
        setStats(json?.data);
    }

    const fetchStatsAdmin = async () => {
        const res = await fetch(`https://plypicker-vvy3.onrender.com/api/v1/review`)
        const json = await res.json();
        setStats(json?.data);
    }

    const filterPending = stats?.filter((item) => {
        return item.status === 'PENDING'
    })
    const filterApproved = stats?.filter((item) => {
        return item.status === 'APPROVED'
    })
    const filterRejected = stats?.filter((item) => {
        return item.status === 'REJECTED'
    })

    useEffect(() => {
        if (user?.data?.role === 'TEAM_MEMBER') {
            fetchStats();
        }
        else {
            fetchStatsAdmin();
        }


    }, [])

    return (
        <>
            <h1 className='text-6xl text-red-500 font-bold text-center mt-10'>STATISTICS</h1>

            <div className='my-20 mx-16 flex justify-around '>

                <div class="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">

                    <h5 class="mb-2 text-4xl font-bold tracking-tight text-yellow-300 dark:text-white">PENDING</h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{filterPending && filterPending.length}</h5>
                </div>

                <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">

                    <h5 class="mb-2 text-4xl font-bold tracking-tight text-red-500 dark:text-white">REJECTED</h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{filterRejected && filterRejected.length}</h5>
                </div>


                <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">

                    <h5 class="mb-2 text-4xl font-bold tracking-tight text-green-500 dark:text-white">APPROVED</h5>
                    <h5 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{filterApproved && filterApproved.length}</h5>
                </div>

            </div>
        </>
    )
}

export default Profile
