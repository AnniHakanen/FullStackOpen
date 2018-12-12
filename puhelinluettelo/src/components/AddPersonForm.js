import React from 'react'
import Input from './Input'
import AddButton from './AddButton'

const AddPersonForm = ({onSubmit, state, handleNameChange, handleNumberChange}) => {
  // console.log('Persontable', props)
  return ( < form onSubmit={onSubmit}>
             < Input title={"Nimi: "} value={state.newName} onChange={handleNameChange} />
             < Input title={'Numero: '} value={state.newNumber} onChange={handleNumberChange} />
             < AddButton type='submit' title={"Lisää"} />
             < /form>
  )
}

export default AddPersonForm
