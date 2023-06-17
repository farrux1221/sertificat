import React , {useState , useEffect}from 'react'
import { Container,Contant,Row,Menu } from './style'
import axios from 'axios';
import enpy from '../../assents/img/no data.jpg'
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import { useActive } from '../../context/Active';
export default function Favourite() {
  const [data,setData] = useState([]);
  const[render,setRender] = useState(false);
  const [active,setActive]= useActive()
  useEffect(() =>{
  axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student"  ,{
   headers:{
     "Content-Type":"application/json"
   }
  }).then(res=>{
    let d = res.data.filter(res=>res.active == true)
    setData(d)
    setActive(!active)
  })
  .catch(error=>console.log(error))
  
  },[render])
  return (
   <Container>
    <Menu>  <span><Link to={'/'}>Главная </Link> /  <Link to={'/about'}>O нас </Link> /  <Link to={'/contact'}>Контакты </Link> </span></Menu>
    <Contant>
        <Row>

     {
      data.length>0?
      data.map(item=> <Card setRender={setRender} key={item.id} value={item}/> )
      :
      <img src={enpy} alt="" />
     }
        </Row>
    </Contant>
   </Container>
  )
}

