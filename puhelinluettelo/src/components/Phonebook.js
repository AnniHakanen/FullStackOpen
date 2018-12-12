import React from 'react'
import Persontable from './Persontable'
import Input from './Input'
import Headline from './Headline'
import AddPersonForm from './AddPersonForm'
import Notification from './Notification'

const Phonebook = ({state, onSubmit, handleNameChange, handleNumberChange, handleFilterChange, list, onClick}) => {
  return ( < div>
             < Headline title={"Puhelinluettelo"} />
             < Notification className={"error"} message={state.error} />
             < Notification className={"info"} message={state.info} />
             < AddPersonForm
               onSubmit={onSubmit}
               handleNameChange={handleNameChange}
               handleNumberChange={handleNumberChange}
               state={state} />
             < Input title={"Rajaa hakua: "} value={state.filter} onChange={handleFilterChange} />
             < Headline title={"Numerot"} />
             < Persontable list={list} onClick={onClick} />
             < /div> )
}

export default Phonebook
