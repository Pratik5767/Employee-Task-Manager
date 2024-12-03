import React, { useState } from 'react'

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form
                    onSubmit={(e) => { submitHandler(e) }}
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        required
                        className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl  outline-none bg-transparent placeholder:text-gray-400'
                        type='email'
                        placeholder='Enter your Email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <input
                        required
                        className='border-2 border-emerald-600 rounded-full py-3 px-5 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-4'
                        type='password'
                        placeholder='Enter your Password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    <button className='mt-5 border-none rounded-full py-2 px-8 w-full text-xl text-white outline-none bg-emerald-600 placeholder:text-white'>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login