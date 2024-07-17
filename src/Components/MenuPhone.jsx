import React from 'react'
import {Link} from "react-router-dom"

export const MenuPhone = () => {
  return (
    <div>
        <ul className='flex space-x-10 text-[13px] font-semibold'>
          <li><Link>Inicio</Link></li>
          <li><Link>Galeria</Link></li>
          <li><Link>Lugares</Link></li>
          <li><Link>Municipio</Link></li>
        </ul>
      </div>
  )
}
