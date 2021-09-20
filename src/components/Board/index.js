import React, {useState} from 'react'
import { Container } from './styles'
import List from '../List'
import {loadLists} from '../../services/api'
import { DragDropContext} from 'react-beautiful-dnd'

const dataInit = loadLists()

const reorder = (list, startIndex, endIndex) => {
  const result = [...list];
  const [removed] = result[0].cards.splice(startIndex, 1);
  result[0].cards.splice(endIndex, 0, removed);

  return result;
};

export default function index() {
  const [data, setData] = useState(dataInit)
  return (
    <DragDropContext onDragEnd={(result) => {
      const { source, destination } = result;
      if (!destination) {
        return;
      }
      if (
        source.index === destination.index &&
        source.droppableId === destination.droppableId
      ) {
        return;
      }
      console.log('rsult drag and drop ', result)
      console.log('source.index ',source.index, ' destination.index ', destination.index )
      setData((prevTasks) =>
        reorder(prevTasks, source.index, destination.index)
      );
    }}>
      <Container>
        {/* {data.map( (item, i) => <List key={item.title} data={item} i={i}/> )} */}
        <List key={data[0].title} data={data[0]} i={1}/>
      </Container>
   </DragDropContext> 
  )
}
