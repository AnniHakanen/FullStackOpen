import React from 'react'

const Input = ({title, value, onChange}) => {
  return ( < div>
             < p className='InputTitle'>
               {title}
               < /p>
                 < input className='InputField' value={value} onChange={onChange} />
                 < /div> )
}

export default Input
