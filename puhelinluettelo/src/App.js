import React from 'react'
import personService from './services/persons'
import Phonebook from './components/Phonebook'

// Luokan alustus
class App extends React.Component {
  constructor (props) {
    super(props)
    this.deletePerson = this.deletePerson.bind(this)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      error: null,
      info: null
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
  // Uuden henkilön lisääminen
  addPerson = (event) => {
    // Formin oletustapahtuman estäminen (oletus mm. lataisi sivun uudelleen)
    event.preventDefault()
    // Tarkistetaan onko nimi jo listassa tai nimi tyhjä
    const result = this.state.persons.find(person => person.name ===
      this.state.newName)
    // console.log(result)
    // Jos nimeä ei ole listassa ja nimi ei ole tyhjä, luodaan uusi henkilö ja lisätään se palvelimelle
    if (result === undefined && this.state.newName !== '') {
      const personObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        id: this.state.newName
      }
      personService
        .create(personObject)
        .then(response => {
          this.setState({
            persons: this.state.persons.concat(response.data),
            newName: '',
            newNumber: ''
          })
          // Onnnistuneen lisäyksen ilmoitus
          this.setInfo('Lisäys onnistui!')
        })
    // Jos nimi on jo luettelossa kysytään käyttäjältä haluaako päivittää uuden numeron nimelle
    } else if (this.state.newName !== '') {
      window.confirm('Nimi on jo luettelossa, haluatko päivittää numeron?')
      // console.log('Päivitetään numero', result.id)
      const personObject = {
        name: result.name,
        number: this.state.newNumber,
        id: result.name
      }
      // console.log('UPDATE')
      personService
        .update(result.id, personObject)
        .then(response => {
          // console.log(response)
          // Onnistuneen päivityksen ilmoitus
          this.setInfo('Päivitys onnistui!')
          this.updateList()
        })
    } else {
      alert('Nimi on jo luettelossa tai nimi on tyhjä.')
    }
  }
  // Henkilön poistaminen
  deletePerson = (id) => {
    // console.log('Poista nimi', id)
    if (window.confirm('Haluatko poistaa nimen luettelosta')) {
      personService.remove(id)
        .then(response => {
          // console.log(response.data)
          // Onnistuneen poiston ilmoitus
          this.setInfo('Poisto onnistui!')
          this.updateList()
        })
    }
  }
  // Näyttää ilmoituksen info-laatikkossa 5sek.
  setInfo = (message) => {
    this.setState({
      info: message
    })
    setTimeout(() => {
      this.setState({
        info: null
      })
    }, 5000)
  }
  // Näyttää ilmoituksen error-laatikkossa 5sek.
  setError = (message) => {
    this.setState({
      error: message
    })
    setTimeout(() => {
      this.setState({
        error: null
      })
    }, 5000)
  }
  // Päivittää listan serveriltä
  updateList = () => {
    console.log('Päivitetään lista')
    personService
      .getAll().then(response => {
      console.log(response)
      this.setState({
        persons: response.data,
        newName: '',
        newNumber: ''
      })
    })
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
    const handleNameChange = this.handleNameChange
    const handleNumberChange = this.handleNumberChange
    const handleFilterChange = this.handleFilterChange
    const personlist = state.persons.filter(person => person.name.toLowerCase()
        .indexOf(state.filter.toLowerCase()) !== -1)
    return ( < div>
               < Phonebook
                 state={state}
                 onSubmit={this.addPerson}
                 handleNameChange={handleNameChange}
                 handleNumberChange={handleNumberChange}
                 handleFilterChange={handleFilterChange}
                 list={personlist}
                 onClick={this.deletePerson} />
               < /div>
    )
  }
}
export default App
