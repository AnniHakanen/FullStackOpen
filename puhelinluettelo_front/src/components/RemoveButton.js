import React from 'react'

const RemoveButton = (props) => {
  // console.log(props)
  return ( < button className = "RemoveButton"
    onClick = {
      props.onClick.bind(this, props.id)
    } > {
      props.title
    } < /button>
  )
}
export default RemoveButton
