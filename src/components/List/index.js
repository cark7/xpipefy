import React from 'react'
import { Container } from './styles'
import Card from '../Card'
import {MdAdd} from 'react-icons/md'
import {  Draggable} from 'react-beautiful-dnd'
export default function index(props) {
  const {title, creatable, cards, done} = props.data
  //const {placeHolder } = props
  return (
    <Container done={done}>
      <header>
        <h2>{title} </h2>
        {creatable && (
          <button type="button">
          <MdAdd size={24} color='#fff' />
          </button>
        )}
       
      </header>
      <ul>
        
        {cards.map( (item, i) => ( 
          
          <Draggable key={i} draggableId={item.id} index={i}>
            {(dragProvider) => (
              <Card 
              {...dragProvider.props} 
              ref={dragProvider.innerRef} data={item}
              {...dragProvider.dragHandleProps}
              />
            )}
          </Draggable>
        ))}
        
      </ul>
      
    </Container>
  )
}
