
import React from 'react'
import Input from './Input'
import AddButton from './AddButton'

const AddPersonForm = (props) => {
  // console.log('Persontable', props)
  return ( < form onSubmit={props.onSubmit} >
    < Input title={"Nimi: "} value={props.state.newName} onChange={props.handleNameChange} />
    < Input title={'Numero: '} value={props.state.newNumber} onChange={props.handleNumberChange} />
    < AddButton type='submit' title={"Lisää"} />
    < /form>
  )
}

export default AddPersonForm
