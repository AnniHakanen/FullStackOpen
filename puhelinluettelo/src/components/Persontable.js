import React from 'react'
import Person from './Person'

const Persontable = ({list, onClick}) => {
  return ( < table className='Persontable'>
             < tbody>
               {list.map(person => < Person
                                     key={person.id}
                                     name={person.name}
                                     number={person.number}
                                     id={person.id}
                                     onClick={onClick} />)}
               < /tbody>
                 < /table>
  )
}

export default Persontable
