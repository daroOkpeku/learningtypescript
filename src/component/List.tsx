import { title } from 'process'
import React from 'react'
import { ApiFetch } from './Types'

export default function List({title, body}:ApiFetch) {

  
    // // this option one
    // let ansprops:checkpropsone = props.data 

    // this is option two
    // let {title, desc} = props.data as checkpropsone
    return (
        <div className='w-2/5 mt-2'>
            <ul className='w-full'>
                <li className='font-bold'>{title}</li>
                <li>{body}</li>
            </ul>
        </div>
    )
}
