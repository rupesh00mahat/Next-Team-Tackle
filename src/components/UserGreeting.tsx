import React from 'react'

function UserGreeting() {
    return (
        <>
            <header className='navbar py-3 border-b shadow-md text-center'>
                <h1 className='text-[30px] font-bold'>Next Team Tackle</h1>
            </header>
            <div className="authentication-container bg-gray-600 w-[30%] mx-auto p-5 rounded-lg mt-20">
                <form>
                    <div className='form-group'>
                        <label htmlFor='username' >User Name</label>
                        <input type="text" name="username" id="username" />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <input type="submit" value="Login"  className='bg-black text-white w-full py-2 rounded-lg cursor-pointer hover:bg-white hover:text-black transition'/>
                </form>

            </div>
        </>
    )
}

export default UserGreeting