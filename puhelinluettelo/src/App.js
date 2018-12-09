import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [{
        name: 'Arto Hellas',
        number: '09 - 123456789',
        id: 1
      }, {
        name: 'Pekka Puupää',
        number: '09 - 5698745215',
        id: 2
      }, {
        name: 'Nepa Neppula',
        number: '000',
        id: 3
      }],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }
  addName = (event) => {
    event.preventDefault()
    const result = this.state.persons.find(person => person.name ===
        this.state.newName)
      // console.log(result)
    if (result === undefined) {
      const nameObject = {
        name: this.state.newName,
        number: this.state.newNumber,
        id: this.state.persons.length + 1
      }
      const persons = this.state.persons.concat(nameObject)
      this.setState({
        persons: persons,
        newName: '',
        newNumber: '',
        filter: ''
      })
    } else {
      alert('Nimi on jo luettelossa.')
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
    console.log('Filtteriä muutettu')
  }

  render() {

    const personlist = () => this.state.persons.map(person => < p key = {
        person.id
      } > {
        person.name
      } {
        person.number
      } < /p>)}

      return ( < div >
          < h2 > Puhelinluettelo < /h2> < form onSubmit = {
          this.addName
        } >
        < div >
        Nimi:
        < input value = {
          this.state.newName
        }
      onChange = {
        this.handleNameChange
      }
      /> < /div > < div >
      Numero:
      < input value = {
        this.state.newNumber
      }
      onChange = {
        this.handleNumberChange
      }
      /> < /div > < div >
      < button type = 'submit' >
      Lisää < / button> < /
      div > < /form> < div > < p >
      Rajaa hakua:
      < input value = {
        this.state.filter
      }
      onChange = {
        this.handleFilterChange
      }
      /> < /p > < /div> < div >
      debug: {
        this.state.filter
      } < /div> < h2 > Numerot < /h
      2 > {
        personlist()
      } < /div>
    )
  }
}

export default App
