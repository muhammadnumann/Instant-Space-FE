import React from 'react'

export default function AuthHead(props) {
  return (
    <div className='text-5xl font-extrabold text-[#171D25]'>{props.text1}<span className='text-5xl font-extrabold text-[#0064FA]'>{props.text2}</span></div>  
  )
}
