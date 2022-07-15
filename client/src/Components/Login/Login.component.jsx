import React from 'react'

function LoginComponent(props) {
  return (props.trigger) ?(
        <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-10'>
            <div className='relative p-32 w-full max-w-2xl bg-white'>
                <button className='absolute top-11 right-11 text-black' onClick={()=> props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
  ):"";
}

export default LoginComponent;