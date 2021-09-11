import React from 'react'
import { Container } from './styles'
import List from '../List'
import {loadLists} from '../../services/api'

const data = loadLists()
export default function index() {
  return (
    <Container>
      {data.map((item, i) => (<List key={i} data={item}/>))}
      
      
    </Container>
  )
}
