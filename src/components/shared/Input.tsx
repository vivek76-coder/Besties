import { type FC } from "react"

interface InputInterface {
    name: string
    placeholder?: string
    type?: string
}
const Input : FC<InputInterface> = ({name, placeholder, type="text"})=>{
    return (
        <input type={type} placeholder={placeholder} name={name} 
               className="border border-gray-300 roundedd w-full px-3 py-2"/>
    )
}

export default Input