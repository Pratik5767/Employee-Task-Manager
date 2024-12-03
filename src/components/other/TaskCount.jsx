import React from 'react'

const TaskCount = ({ data }) => {
    return (
        <div className='flex justify-between gap-5 mt-10'>
            <div className='w-[45%] bg-red-400 py-6 px-9 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.failedTask}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>

            <div className='w-[45%] bg-blue-400 py-6 px-9 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='w-[45%] bg-green-400 py-6 px-9 rounded-xl'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.completedTask}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>

            <div className='w-[45%] bg-yellow-400 py-6 px-9 rounded-xl'>
                <h2 className='text-3xl font-semibold text-black'>{data.taskCount.active}</h2>
                <h3 className='text-xl font-medium text-black'>Accepted Task</h3>
            </div>
        </div>
    )
}

export default TaskCount