import React from 'react'

export default function Header() {
    return (
        <div className='w-full flex flex-row items-center p-3'>
            <ul className='w-1/3 m-auto flex flex-row items-center space-x-2'>
                <li>Home</li>
                <li>about</li>
            </ul>
        </div>
    )
}
