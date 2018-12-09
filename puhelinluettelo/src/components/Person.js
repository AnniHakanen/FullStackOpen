import React from 'react'

const Person = (props) => {
  return ( < div>
             Näytettävä henkilö
             < tr key={props.key}>
               < td>
                 {props.name}
                 < /td>
                   < td>
                     {props.number}
                     < /td>
                       < /tr>)
                         < /div>
  )
}

export default Person
