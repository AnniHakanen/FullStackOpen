import React from 'react'
import personService from './services/persons'
import Persontable from './components/Persontable'
import Input from './components/Input'
import Headline from './components/Headline'
import AddButton from './components/AddButton'

// Luokan alustus
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }

  // json-datan lukeminen (db.json)
  componentDidMount () {
    personService
      .getAll()
      .then(response => {
        this.setState({
          persons: response.data
        })
      })
  }

  // Uuden nimen lisääminen
  addPerson = (event) => {
    // Formin oletustapahtuman estäminen (oletus mm. lataisi sivun uudelleen)
    event.preventDefault()
    // Tarkistetaan onko nimi jo listassa tai nimi tyhjä
    const result = this.state.persons.find(person => person.name ===
      this.state.newName)
    // Jos nimeä ei ole listassa ja nimi ei ole tyhjä, luodaan uusi nimi
    if (result === undefined && this.state.newName !== '') {
      const personObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        id: this.state.persons.length + 1
      }
      personService
        .create(personObject)
        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response.data),
            newName: '',
            newNumber: ''
          })
        })
    } else {
      alert('Nimi on jo luettelossa tai nimi on tyhjä.')
    }
  }
  deletePerson = (id) => {
    console.log('Poista nimi', id)
  }
  // Tapahtumankäsittelijjät Input-kenttien muutoksille
  handleNameChange = (event) => {
    this.setState({
      newName: event.target.value
    })
  }
  handleNumberChange = (event) => {
    this.setState({
      newNumber: event.target.value
    })
  }
  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value
    })
  }
  render () {
    const state = this.state
    const personlist = state.persons.filter(person => person.name.toLowerCase()
        .indexOf(state.filter.toLowerCase()) !== -1)
    return ( < div>
               < Headline title={'Puhelinluettelo'} />
               < form onSubmit={this.addPerson}>
                 < Input title={"Nimi: "} value={state.newName} onChange={this.handleNameChange} />
                 < Input title={'Numero: '} value={state.newNumber} onChange={this.handleNumberChange} />
                 < AddButton type='submit' title={"Lisää"} />
                 < /form>
                   < Input title={"Rajaa hakua: "} value={state.filter} onChange={this.handleFilterChange} />
                   < Headline title={'Numerot'} />
                   < Persontable list={personlist} handleClick={this.deletePerson} />
                   < button onClick={this.deletePerson}>
                     POISTA
                     < /button>
                       < /div>
    )
  }
}
export default App
