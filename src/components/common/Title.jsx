import React from 'react'

const Title = ({text, className}) => {
  return (
      <h2 className={`${className} ff-orbitron font-bold text-[50px] leading-[130%] text-white max-xl:text-5xl max-lg:text-4xl max-md:text-3xl`}>{text}</h2>
  )
}

export default Title