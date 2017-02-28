import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

// export class CCButton extends Component {
//   constructor(props){
//     super(props)
//   }
//
//   render () {
//     return (
//       <Button>Submit</Button>
//     )
//   }
// }

export const CCButton = (props) => {

  return (
    <Button active={props.active}>Getting started</Button>
  )
}

CCButton.propTypes = {
  active: React.PropTypes.bool
}

CCButton.defaultProps = {
 active: true
}

CCButton.displayName = 'CCButton'


