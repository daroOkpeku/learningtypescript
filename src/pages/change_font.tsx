import React,{useContext} from 'react'
import { Context } from '../component/Context'
import Header from '@/component/Header'
import { ContextType } from '@/component/Interface'
import { Addtitle } from '@/component/reducer/transfer'
import { useDispatch, UseDispatch } from 'react-redux'
function Changefont() {
    // ContextType
 let created = useContext(Context)

 if (!created) {
    // this is to check it exist
    throw new Error("ExampleComponent must be used within a Provider");
  }
let {theme_font, Set_theme_font } = created

let dispatch = useDispatch()

type objtype = {
  title:string
}

   const handleFont = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    if(theme_font?.fontSize){
        Set_theme_font({
            ...theme_font,
            fontSize:theme_font?.fontSize === 14 ? 20 : 14,
        })

        let obj:objtype = {
          title:"hello how are you"
        }

        dispatch(Addtitle(obj))
      }
   }

   console.log(theme_font)

   const handletheme = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    if(theme_font?.theme){
        Set_theme_font({
            ...theme_font,
            theme:theme_font?.theme === "dark" ? 'white' : 'dark',
        })
      }
   }
    return (
        <div className='w-full'>
          <Header/>  
          <div className='w-1/3 flex flex-col items-center gap-2 m-auto'>

          <section className='w-1/3 m-auto'>
            <button  onClick={handletheme} className='w-full py-2 bg-green-400 text-white px-2 rounded-sm'>
                change theme
            </button>
          </section>

          <section className='w-1/3 m-auto'>
            <button onClick={handleFont} className='w-full py-2 bg-orange-400 text-white px-2 rounded-sm'>
                change font
            </button>
          </section>
          </div>
        </div>
    )
}

export default Changefont
