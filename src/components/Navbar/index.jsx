import React ,{useState,useEffect}from 'react';
import logo from '../../assents/img/photo_2023-06-08_10-21-21.jpg';
import search from '../../assents/img/search.jpg';
import phone from '../../assents/img/tele.jpg';
import deleviry from '../../assents/img/moshina.jpg';
import bag from '../../assents/img/bag.jpg';
import user from '../../assents/img/user.jpg';
import axios from 'axios';
import { useActive } from '../../context/Active';
import { NavLink,Link } from 'react-router-dom';
import { useStoreg } from '../../context/Storeg';
import { Container, Content,Logo,Form, Phone, Deleviry ,Icons,Heart,Cart} from './style';
export default function Navbar() {
  const [active,setActive]=useActive()
  const [data,setData] = useState([]);
  const [local,setLocal] = useState(false);
  const [store,setStore] = useStoreg()
useEffect(()=>{
  let res = JSON.parse(localStorage.getItem('loft'));
  if(res){
    setLocal(true)
  }
  else{
    setLocal(false)
  }
},[store])




  
useEffect(() =>{
axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student"  ,{
 headers:{
   "Content-Type":"application/json"
 }
}).then(res=>{
  let active = res.data.filter(res=>res.active == true)
  setData(active)
  setActive(!active)
})
.catch(error=>console.log(error))

},[active])

  return (
  <Container>
 
    <Content>
 <Link to={"/home"}><Logo src={logo}/></Link>
 <NavLink to={"/home"}>Главная</NavLink>
 <NavLink to={"/about"}>O нас</NavLink>
 <NavLink to={"/contact"}>Контакты</NavLink>

 <Form>
  <Form.Img src={search}/> 
  <Form.Input placeholder="Поиск"/>
  </Form>

  <Phone>
    <Phone.Img src={phone}/>
    <Phone.Item  href="tel:8 (964) 89 99 119">8 (964) 89 99 119</Phone.Item>
  </Phone>

  <Deleviry>
    <Deleviry.Img src={deleviry}/>
    <Deleviry.Item>Доставка</Deleviry.Item>
  </Deleviry>


<Icons>
  <Link to={'/favourite'}>
  <Heart  className={data.length>0?"favourite":""} ><i class="bi bi-heart-fill" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
  </svg></i>
</Heart>
  </Link>
  
 
  <Cart>
   <Link to={"/packet"}>  <Icons.Icon src={bag}/></Link>
  {
    local&&<Cart.Icon/>
  }
  
  </Cart>
 <Icons.Icon src={user}/> 

</Icons>
    </Content>
  </Container>

  )
}
