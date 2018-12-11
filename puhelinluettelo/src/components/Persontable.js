import React from 'react'
import Person from './Person'

const Persontable = (props) => {
  return ( < table>
             < tbody>
               {props.list.map(person => < Person
                                           key={person.id}
                                           name={person.name}
                                           number={person.number}
                                           id={person.id}
                                           handleClick={props.handleClick} />)}
               < /tbody>
                 < /table>
  )
}

export default Persontable
