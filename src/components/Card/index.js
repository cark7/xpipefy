import React from 'react'

import { Container, Label } from './styles'
import {  Draggable} from 'react-beautiful-dnd'
export default function index(props) {
  const {content, labels, user, id} = props.data
  const {i: index} = props
  
  return (
    <Draggable key={index} draggableId={index + labels[0]} index={index}>
      {(dragProvider) => (
        <Container {...dragProvider.draggableProps} 
                    ref={dragProvider.innerRef}
                    {...dragProvider.dragHandleProps} >
          <header>
            {labels.map((item, i) => <Label key={i} color={item} />)}
            
          </header>
          <p>
            {content}
          </p>
          {user && <img src={user} alt=""/>}
        </Container>
      )}
    </Draggable>
    
  )
}
