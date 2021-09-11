import React from 'react'

import { useDrag } from 'react-dnd'
import { Container, Label } from './styles'
export default function index(props) {

  // const [{ isDragging }, dragRef] = useDrag({
  //   item: { type: 'CARD'},
  //   collect: monitor => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  // });

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: 'CARD',
    collect: (monitor) => ({
        isDragging: monitor.isDragging(),
    }),
  }), []);
  
  
  const {content, labels, user} = props.data
  return (
    <Container ref={dragRef} isDragging={isDragging}>
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
