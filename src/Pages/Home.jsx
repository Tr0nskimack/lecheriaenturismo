import React from 'react'
import construccion from "/construction-sign.png"


export const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex items-center space-x-10'>
        <div><img src={construccion} width={100} /></div>
        <h1 className='text-4xl font-semibold text-letra'>Pagina actualmente en construcción</h1>
      </div>
    </div>
  )
}
