import React from 'react'
import personService from './services/persons'

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
  addName = (event) => {
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
  // Haun rajaaminen
  filterPersons = (filter) => {
    const personsToShow = this.state.persons.filter(person => person.name
        .toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    return (
      personsToShow
    )
  }
  // Luodaan henkilölista
  makePersonList = (personsToShow) => {
    const personlist = () => personsToShow.map(person => < tr key={person.id}>
                                                           < td>
                                                             {person.name}
                                                             < /td>
                                                               < td>
                                                                 {person.number}
                                                                 < /td>
                                                                   < /tr>)
    return (
      personlist
    )
  }

  render () {
    const personlist = this.makePersonList(this.filterPersons(this.state
      .filter))
    return ( < div>
               < Otsikko otsikko={'Puhelinluettelo'} />
               < form onSubmit={this.addName}>
                 < Input nimike={"Nimi: "} value={this.state.newName} onChange={this.handleNameChange} />
                 < Input nimike={'Numero: '} value={this.state.newNumber} onChange={this.handleNumberChange} />
                 < Button type='submit' nimike={"Lisää"} />
                 < /form>
                   < Input nimike={"Rajaa hakua: "} value={this.state.filter} onChange={this.handleFilterChange} />
                   < Otsikko otsikko={'Numerot'} />
                   < table>
                     < tbody>
                       {personlist()}
                       < /tbody>
                         < /table>
                           < /div>
    )
  }
}
const Otsikko = (props) => {
  return ( < h2>
             {props.otsikko}
             < /h2>)
}
const Input = (props) => {
  return ( < div>
             {props.nimike}
             < input value={props.value} onChange={props.onChange} />
             < /div> )
}
const Button = (props) => {
  return ( < div>
             < button type={props.type}>
               {props.nimike}
               < /button>
                 < /div>
  )
}
export default App
