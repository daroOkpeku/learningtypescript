import Header from '@/component/Header'
import React, { useRef } from 'react'
import TextCom from '@/component/TextCom'
function Testref() {
    const usernaeme = useRef<HTMLInputElement>(null)
    const hobbie = useRef<HTMLInputElement>(null)

    type ExtraType = {
        userid: number;
        hobble: string;
      };

    type Testtype<T> = {
        username:string,
        extra:T[]
    }

    const data = 
      {
        username:"stephen",
        extra:[{
            userid:1,
            hobble:"dancing"
        }]
      }
    
    return (
        <div className='w-full'>
         <Header/>
        <section className='w-full '>
        <div className='w-1/3 flex flex-col items-center gap-2 m-auto'>
         <section className='w-full'>
            <span className='w-full'>
            username
             </span>
            <span className='w-full'>
            <input  ref={usernaeme} type='text' className='w-full py-2 outline-none border' />
            </span>
         </section>


         <section className='w-full'>
            <span className='w-full'>
            hobbie
             </span>
            <span className='w-full'>
            <input type='text' className='w-full py-2 outline-none border' />
            </span>
         </section>

        </div> 
            <TextCom data={data} />
            </section>  
        </div>
    )
}

export default Testref
