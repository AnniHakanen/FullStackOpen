import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [{
        name: 'Arto Hellas',
        id: 1
      }, {
        name: 'Pekka Puupää',
        id: 2
      }, {
        name: 'Nepa Neppula',
        id: 3
      }],
      newName: ''
    }
  }
  addName = (event) => {
    event.preventDefault()
      // console.log('Painiketta painettu')
      //Tehtävä 2.7 taulukon sisällön tutkiminen

    const result = this.state.persons.find(person => person.name ===
        this.state.newName)
      // console.log(result)
    if (result === undefined) {
      // console.log(this.state.newName)
      const nameObject = {
        name: this.state.newName,
        id: this.state.persons.length + 1
      }
      const persons = this.state.persons.concat(nameObject)
      this.setState({
        persons: persons,
        newName: ''
      })
    } else {
      alert('Nimi on jo luettelossa.')
    }
  }
  handleNameChange = (event) => {
    // console.log('targetValue', event.target.value)
    this.setState({
      newName: event.target.value
    })
  }
  render() {
    const personlist = () => this.state.persons.map(person => < p key = {
        person.id
      } > {
        person.name
      } < /p> )

      return ( < div >
          < h2 > Puhelinluettelo < /h2> < form onSubmit = {
          this.addName
        } >
        < div >
        nimi: < input value = {
          this.state.newName
        }
      onChange = {
        this.handleNameChange
      }
      / > < /div > < div > < button type = "submit" > lisää < /
      button >
      < / div > < /form > <
      h2 > Numerot < /h2> {
      personlist()
    }

    < /div>
  )
}
}

export default App
