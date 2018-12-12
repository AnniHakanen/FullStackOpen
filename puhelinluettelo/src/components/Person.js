import React from 'react'
import RemoveButton from './RemoveButton'

const Person = (props) => {
  // console.log('Person', props)
  return ( < tr>
             < td>
               {props.name}
               < /td>
                 < td>
                   {props.number}
                   < /td>
                     <td>
                       <RemoveButton onClick={props.onClick} title='Poista' id={props.id} />
                     </td>
                     < /tr> )
}

export default Person
