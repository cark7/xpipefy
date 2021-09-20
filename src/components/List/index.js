import React from 'react'
import { Container } from './styles'
import Card from '../Card'
import {MdAdd} from 'react-icons/md'
import { Droppable} from 'react-beautiful-dnd'
export default function index(props) {
  const {title, creatable, cards, done} = props.data
  const {i: index} = props
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
        <Droppable droppableId={'tasks'+index}>
          {(dropProvider) => 
            <ul {...dropProvider.droppableProps} 
                ref={dropProvider.innerRef}>
                  
                {cards.map((item, i) => <Card key={index+i} data={item} i={i}/>  )}
            
              {dropProvider.placeholder}
            </ul>
          }
          
        </Droppable>
      </Container>
  )
}
