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
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0
    }
  }

  arvoAnekdootti = (min, max) => {
      // min = 1 max = 6
    //   const arvottuLuku = Math.floor(Math.random() * (6-1) +1) +1;
    //   console.log("arvottu" , arvottuLuku)
      return () => {
          this.setState({selected: Math.floor(Math.random() * (max - min + 1) ) + min})
          console.log(this.state.selected)
      }
  }

  render() {
    return (
      <div>
        <Button handleClick={this.arvoAnekdootti(0,5)} teksti="Arvo"></Button>
        <p>{this.props.anecdotes[this.state.selected]}</p>
      </div>
    )
  }
}

const anecdotes = [
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