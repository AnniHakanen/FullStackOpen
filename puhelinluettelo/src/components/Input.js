import React from 'react'

const Input = (props) => {
  return ( < div > < p className = "InputTitle" > {
      props.title
    } < /p>< input className = 'InputField'
    value = {
      props.value
    }
    onChange = {
      props.onChange
    }
    /> < /div > )
}

export default Input
