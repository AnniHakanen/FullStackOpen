import React from 'react'

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
                       <Button onClick={props.onClick} title='Poista' id={props.id} />
                     </td>
                     < /tr> )
}

const Button = (props) => {
  // console.log(props)
  return (
    < button onClick={props.onClick.bind(this, props.id)}>
      {props.title}
      < /button>
  )
}
export default Person
