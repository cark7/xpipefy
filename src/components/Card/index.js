import React from 'react'

import { Container, Label } from './styles'
export default function index(props) {
  const {content, labels, user} = props.data
  
  return (
    <Container>
      <header>
        {labels.map((item, i) => <Label key={i} color={item} />)}
        
      </header>
      <p>
        {content}
      </p>
      {user && <img src={user} alt=""/>}
    </Container>
  )
}
