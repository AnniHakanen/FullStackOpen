import React from 'react'
import RemoveButton from './RemoveButton'

const Person = ({name, number, onClick, id}) => {
  return ( < tr>
             < td>
               {name}
               < /td>
                 < td>
                   {number}
                   < /td>
                     <td>
                       <RemoveButton onClick={onClick} title='Poista' id={id} />
                     </td>
                     < /tr> )
}
export default Person
