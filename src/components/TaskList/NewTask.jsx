import React from 'react'

const NewTask = ({ data }) => {
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-600 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>

            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>

            <p className='text-sm mt-2'>{data.taskDescription}</p>

            <div className='flex justify-between mt-16'>
                <button className='bg-green-600 py-2 px-3 text-sm rounded'>Accepted Task</button>
            </div>
        </div>
    )
}

export default NewTask