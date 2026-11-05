
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import type { FC, ReactElement } from 'react';

interface ModuleInterface {
    title?: string
    children?: ReactElement
    open?: boolean
    onClose: ()=>void
}

const Module : FC<ModuleInterface> = ({title='module title goes here', children='your content goes here', open=true, onClose})=>{
    return(
        <>
            {
                open &&
                <div className='h-screen flex items-center justify-center fixed top-0 left-0 w-full animate__animated animate__faddeIn'
                     style={{
                        background: 'rgba(0,0,0,0.3)'
                     }}>
                        <div className='animate__animated animate__bounceIn bg-white border border-gray-100 shadow-lg px-5 py-4 rounded-lg w-[480px] space-y-2 relative'>
                            <h1 className='text-lg font-semibold'>{title}</h1>
                            <div className='text-gray-500'>{children}</div>
                            <button className='absolute top-3 right-3 text-gray-500 hover:text-gray-600' onClick={onClose}><i className='ri-close-circle-fill'></i></button>
                        </div>
                </div> 
            }
        </>
    )
} 

export default Module