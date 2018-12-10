import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: ''
    }
  // console.log('constructor')
  }

  componentDidMount () {
    // console.log('did mount')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        // console.log('promise fulfilled')
        this.setState({
          persons: response.data
        })
      })
  }

  addName = (event) => {
    event.preventDefault()
    const result = this.state.persons.find(person => person.name ===
      this.state.newName)
    // console.log(result)
    if (result === undefined && this.state.newName !== '') {
      const nameObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        id: this.state.persons.length + 1
      }
      // const persons = this.state.persons.concat(nameObject)
      // this.setState({
      //   persons: persons,
      //   newName: '',
      //   newNumber: ''
      // })

      // Uuden henkilön lisääminen db.json

      axios.post('http://localhost:3001/persons', nameObject)
        .then(response => {
          // console.log(response)
        })
      this.componentDidMount()
    } else {
      alert('Nimi on jo luettelossa tai nimi on tyhjä.')
    }
  }
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
  filterPersons = (filter) => {
    const personsToShow = this.state.persons.filter(person => person.name
        .toLowerCase().indexOf(filter.toLowerCase()) !== -1)
    return (
      personsToShow
    )
  }
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
    // console.log('render')
    const personlist = this.makePersonList(this.filterPersons(this.state
      .filter))
    // console.log(personlist)
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
