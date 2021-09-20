import React from 'react'
import { Container } from './styles'
import List from '../List'
import {loadLists} from '../../services/api'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const data = loadLists()


export default function index() {
  return (
    <DragDropContext onDragEnd={(result) => console.log('el result ', result)}>
      <Container>

        <Droppable droppableId='tasks'>
          {(dropProvider) => (
            
                <ul {...dropProvider.droppableProps} 
                      ref={dropProvider.innerRef}
                      key={data[0].title}
                      >
                    {data[0].cards.map((item, i) => (
                      <Draggable key={i} draggableId={i + item.labels[0]} index={i}>
                        {(dragProvider) => 
                              <li {...dragProvider.draggableProps}
                                  ref={dragProvider.innerRef}
                                  {...dragProvider.dragHandleProps}>
                                  <div>{item.content} </div> 
                              </li>
                        }
                      </Draggable>
                      ))}
                    
                {dropProvider.placeholder}
                </ul> 
            )}
        </Droppable>
        
        {/* <Droppable droppableId='tasks'>
          {(dropProvider) => (
            <>
              <List {...dropProvider.droppableProps} 
                    ref={dropProvider.innerRef}
                    key={data[0].title} data={data[0]}
                    />
              {dropProvider.placeholder}
            </>
            
          )}
        </Droppable> */}
        {/* {data.map((item, i) => (
        
        <List key={i} data={item}/>
        
        ))} */}
      
      
      </Container>
    </DragDropContext> 
  )
}
