import React, {useState} from 'react'

interface Props {
    title: string, 
    subTitle?: string
}

// function FuncHeader(props: Props)  {
function FuncHeader ({title, subTitle}: Props)  {
const [count, setCount] = useState<number>(0)

const changeValue=() => setCount(10)
    return (
        <div>
            <h1 onClick={changeValue}>{title} - {count}</h1>
            <h3>{subTitle|| "hello"}</h3>
        </div>
    )
}

export default FuncHeader

