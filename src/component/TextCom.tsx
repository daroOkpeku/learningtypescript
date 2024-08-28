import React from 'react'
type ExtraType = {
    userid: number;
    hobble: string;
  };

type Testtype<T> = {
    username:string,
    extra:T[]
}

interface allface {
    // this interface is used to check the Type of data entering
    // this enable you rgister the type of entering the data
    data:Testtype<ExtraType>
}
const TextCom:React.FC<allface>  = ({data}) =>{
    return (
        <div>
            
        </div>
    )
}

export default TextCom



