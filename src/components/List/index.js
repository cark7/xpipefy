import React from 'react'
import { Container } from './styles'
import Card from '../Card'
import {MdAdd} from 'react-icons/md'
export default function index(props) {
  const {title, creatable, cards, done} = props.data
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
        
        {cards.map( (item, i) => <Card key={i} data={item}/>)}
      </ul>
    </Container>
  )
}
