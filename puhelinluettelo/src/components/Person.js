import React from 'react'

const Person = (props) => {
  console.log('Person', props)
  return ( < tr>
             < td>
               {props.name}
               < /td>
                 < td>
                   {props.number}
                   < /td>
                     <td>
                       <Button onClick={props.handleClick(props.id)} title='Poista' />
                     </td>
                     < /tr> )
}
const Button = (props) => {
  console.log(props)
  const { handleClick, title } = props
  return (
    <button onClick={handleClick}>
      {title}
    </button>
  )
}
export default Person
