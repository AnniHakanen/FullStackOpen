import React from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  // console.log(props)
  const { handleClick, teksti } = props
  return (
    <button onClick={handleClick}>
      {teksti}
    </button>
  )
}
const Otsikko = (props) => {
  return (
    <h1>{props.otsikko}</h1>
  )
}
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      taulukko: [0, 0, 0, 0, 0, 0, 0],
      paras: 0
    }
  }

  arvoAnekdootti = (min, max) => {
    return () => {
      this.setState({ selected: Math.floor(Math.random() * (max - min + 1)) + min })
    }
  }
  lisaaAani = (selected) => {
    this.laskeAanet()
    return () => {
      const kopio = [...this.state.taulukko]
      kopio[selected] += 1
      this.setState({
        taulukko: kopio
      })
    }
  }
  laskeAanet = () => {
    for (let i = 0; i < this.state.taulukko.length; i++) {
      if (this.state.taulukko[i] > this.state.taulukko[this.state.paras]) {
        this.setState({
          paras: i
        }
        )
      }
    }
    return (this.state.taulukko[this.state.paras])
  }

  render() {
    // const aanet = () => this.state.taulukko.join(' ')
    return (
      <div>
        <Otsikko otsikko="Anekdoottilotto" />
        <Button handleClick={this.arvoAnekdootti(1, 6)} teksti="Arvo uusi anekdootti"></Button>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <Button handleClick={this.lisaaAani(this.state.selected)} teksti="Äänestä tätä"></Button>
        {/* <div><p>{aanet()}</p></div> */}
        <div><p>Eniten ääniä saanut anekdootti:</p> 
        <p>{this.props.anecdotes[this.state.paras]}</p></div>
      </div>
    )
  }
}

const anecdotes = [
  '',
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)