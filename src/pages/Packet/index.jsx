import React from 'react'
import { Container,Menu } from './style'
import { Link } from 'react-router-dom'
import { Row } from './style'
import { useEffect } from 'react'
import List from '../../components/List'
import { useState } from 'react'
export default function Packet() {
  const [data,setData]=useState([])

 useEffect(()=>{
const d = JSON.parse(localStorage.getItem('loft'))
setData([...d])
 },[])
  return (
  <Container>
 <Menu>  <span><Link to={'/'}>Главная </Link> / <Link to={'/packet'}>Корзина </Link> </span></Menu>
 <Row>
  <Row.Title>Ваша корзина</Row.Title>
  <Row.Title>{data.length} предмета</Row.Title>
 </Row>
 <div>
{
  data.map(item=><List  key={item.id} value={item}/>)
}
 </div>
  </Container>
  )
}
