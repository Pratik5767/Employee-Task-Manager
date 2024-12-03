import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    return (
        <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48'>
            <div className='bg-emerald-500 py-2 px-4 flex justify-between rounded mb-2'>
                <h5 className='text-lg font-medium w-1/6'>Employee Name</h5>
                <h5 className='text-lg font-medium w-1/6'>New Task</h5>
                <h5 className='text-lg font-medium w-1/6'>Active Task</h5>
                <h5 className='text-lg font-medium w-1/6'>Completed Task</h5>
                <h5 className='text-lg font-medium w-1/6'>Failed Task</h5>
            </div>

            <div id='admin' className='h-[80%] overflow-auto'>
                {
                    userData.map((e, idx) => {
                        return (
                            <div key={idx} className='border-2 border-emerald-600 py-2 px-4 flex justify-between rounded mb-2'>
                                <h5 className='text-lg font-medium w-1/6 text-white-600'>{e.firstname}</h5>
                                <h5 className='text-lg font-medium w-1/6 text-blue-400'>{e.taskCount.newTask}</h5>
                                <h5 className='text-lg font-medium w-1/6 text-yellow-400'>{e.taskCount.active}</h5>
                                <h5 className='text-lg font-medium w-1/6 text-green-400'>{e.taskCount.completedTask}</h5>
                                <h5 className='text-lg font-medium w-1/6 text-red-400'>{e.taskCount.failedTask}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllTask