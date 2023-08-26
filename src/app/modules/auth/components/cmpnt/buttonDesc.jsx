import React from 'react'

export default function ButtonDesc(props) {
  return (
    <div className='text-lg text-[#171D25] font-medium'>{props.text1}<label className='text-[#0064FA] font-bold	'> &nbsp;{props.text2}</label></div>
  )
}
