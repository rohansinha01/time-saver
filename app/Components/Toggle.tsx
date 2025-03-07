import React from 'react'

interface ToggleProps {
  label: string;
}

const Toggle: React.FC<ToggleProps> = ({ label }) => {
  return (
    <div className='p-8'>
        {label}
        <label htmlFor='check' className='flex bg-gray-100 cursor-pointer relative w-20 h-10 rounded-full'>
         <input type='checkbox' id="check" className='sr-only peer'/>    
         <span className='w-2/5 h-4/5 bg-rose-300 absolute rounded-full left-1 top-1 peer-checked:bg-rose-600 peer-checked:left-11 transition-all duration-500'/>
        </label>
       
        
    
    </div>
  )
}

export default Toggle