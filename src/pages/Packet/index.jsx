import React from 'react'
import { Container,Menu } from './style'
import { Link } from 'react-router-dom'
import { Row } from './style'
import { useEffect } from 'react'
import List from '../../components/List'
import enpy from '../../assents/img/no data.jpg'
import { useState } from 'react'
import { useStoreg } from '../../context/Storeg';
export default function Packet() {
  const [data,setData]=useState([])
  const [store,setStore] =useStoreg()
  useEffect(()=>{
    const d = JSON.parse(localStorage.getItem('loft'));
    if(d){
      setData([...d])
    }
    else{
      setData([])
    }
    
  },[store])
  return (
  <Container>
 <Menu>  <span><Link to={'/'}>Главная </Link> / <Link to={'/packet'}>Корзина </Link> </span></Menu>
 <Row>
  <Row.Title>Ваша корзина</Row.Title>
  <Row.Title>{data.length} предмета</Row.Title>
 </Row>
 <div>
 <div>
          {
            data.length>0?
            data.map(item=><List  key={item.id} value={item}/>)
            :
            <div style={{textAlign:"center",width:"100%"}}> <img src={enpy} alt="" /></div>
          }
        </div>
 </div>
  </Container>
  )
}
