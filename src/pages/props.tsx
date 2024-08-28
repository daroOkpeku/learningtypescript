import React, {useEffect, useState} from 'react'
import Header from '../component/Header'
import List from '../component/List'
import { ApiFetch } from '../component/Types'


 const  Props =  () =>{

// this this the type for the array in the React Hook <ApiFetch[]>
const [collectData, SetcollectData] = useState<ApiFetch[]>([])
useEffect(()=>{
    let fetchdata = async() => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        
        if(!res.ok){
            throw new Error("Failed to Fetch data")
        }
    
          let ansres = await res.json();
        //   console.log(ansres)
          SetcollectData(ansres)
        }

        fetchdata()
},[])



    return (
        <div className='w-full flex flex-col items-center'>
            <Header/>

            {collectData.map((item:ApiFetch)=>{
             return <List key={item.id}  {...item} />
            })}

           
        </div>
    )
}
export default Props