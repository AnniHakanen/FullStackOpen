import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

// // Promise
// const promise = axios.get('http://localhost:3001/persons')
//
// promise.then(response => {
//   console.log(response)
// })

// Ketjutettu metodikutsu
// axios
//   .get('http://localhost:3001/persons')
//   .then(response => {
//     const persons = response.data
//     console.log(persons)
//   })

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

ReactDOM.render(< App /> , document.getElementById('root'))
