import React from 'react'

const Button = ({type, title}) => {
  return ( < div>
             < button className='AddButton' type={type}>
               {title}
               < /button>
                 < /div>
  )
}

export default Button
