import React, {useState} from 'react'
import Header from '../component/Header'

function Search_and_Delete() {
  const [word, Setword] = useState<string>("")

    const handleSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
       e.preventDefault()
       Setword(e.target.value)
    }

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>, id:number)=>{
      e.preventDefault()
    }


    return (
        <div className='w-full flex flex-col items-center'>
         <Header/>
         <section className='w-full flex flex-col'>

            <article className='w-1/3 flex flex-row items-center m-auto space-x-1'>
               <section className='w-11/12'>
               <input type='text' value={word} className='w-full py-1'  onChange={handleSearch}/>
               </section>
               <div className='w-1/6'>
                 <button className='w-full bg-blue-300 py-1 rounded-sm'>Search</button>
               </div>
            </article>

              
            <article className='w-3/5 flex flex-col items-center m-auto space-x-1 gap-2 mt-10'>
            <span className='font-bold'>sunt aut facere repellat provident occaecati excepturi optio reprehenderit</span>
             <span className='text-justify '>quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</span>
            <div className='w-full'>
                <span className='w-1/6 float-left mt-2'>
                   <button  onClick={(e)=>handleClick(e, 1)} className='w-full bg-red-400 text-white py-2 rounded-sm'>Delete</button>
                </span>
            </div>
            </article>
            



         </section>
        </div>
    )
}

export default Search_and_Delete
