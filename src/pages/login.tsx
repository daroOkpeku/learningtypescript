import Header from '@/component/Header'
import React, {HtmlHTMLAttributes, useState} from 'react'
import { UserLogged } from '@/component/Types'
function Login() {
const [username, Setusername] = useState<string>("")
const [savedata, Setsavedata] = useState<UserLogged|null>(null)

const handleClick =(e:React.MouseEvent<HTMLButtonElement>)=>{
e.preventDefault();
Setsavedata({
    username:username,
    userid:Math.random()
})
}

    return (
        <div className='w-full'>
          <Header/>  
          <section className='w-full'>
            {savedata && (Object.keys(savedata).length > 0)? 
            <div className='w-1/3 flex flex-col items-center gap-2 m-auto'>
                {savedata?.username}
            </div>
        :<div className='w-1/3 flex flex-col items-center gap-2 m-auto'>
            
        <article className='w-full'>
            <span className='w-full text-left'>
                Username
            </span>
            <span className='w-full'>
            <input type='text' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>Setusername(e.target.value)} className='w-full py-2 border outline-none' />
            </span>
        </article>

        <section className='w-full'>
            <button  onClick={handleClick} className='w-full bg-blue-400 text-white py-2 rounded-sm'>Submit</button>
        </section>
        </div>}
            
        {savedata?.username}
          </section>
        </div>
    )
}

export default Login
