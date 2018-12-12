import React from 'react'
import Person from './Person'

const Persontable = (props) => {
  // console.log('Persontable', props)
  return ( < table className='Persontable'>
             < tbody>
               {props.list.map(person => < Person
                                           key={person.id}
                                           name={person.name}
                                           number={person.number}
                                           id={person.id}
                                           onClick={props.onClick} />)}
               < /tbody>
                 < /table>
  )
}

export default Persontable
