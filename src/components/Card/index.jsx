import React from 'react';
import { Container,Img, Title ,Text, Price,Subtitle,Footer,Button, Heart} from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { useStoreg } from '../../context/Storeg';
export default function Card({value,setRender}) {
  console.log(value,value)
  const [store,setStore] = useStoreg()
  const navigate = useNavigate()
  const getId=(id)=>{
   axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${id}`,{
    headers:{
      "Content-Type":"application/json"
    }
   }).then(res=> putData(res.data))
      .catch(error=>console.log(error))
  }

  const putData=(d)=>{
     d.active=!d.active
    axios.put(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${d.id}`,d,{
      headers:{
        "Content-Type":"application/json"
      }
    }).then(res=>setRender((data)=>!data))
    .catch(error=>console.log(error))
  }

  const addProduct = (item) => {

    setStore(!store)



    let res =JSON.parse(localStorage.getItem('loft'))

    if(res){
      console.log(res)
   let result=[];
   result = res.filter(i=>i.id==item.id);
   if(result.length>0){
    res.map(a =>{
      if(a.id == item.id){
        a.count = a.count + 1;
      }
      return a;
    })
    localStorage.setItem('loft',JSON.stringify(res))
   }
   else{
    item.count=1;
    localStorage.setItem('loft',JSON.stringify([...res,item]))
   }
    }
    else{
      item.count=1;
      localStorage.setItem('loft',JSON.stringify([item]))
    }
    
  }


  return (
  <Container>
<Heart className={value?.active?"favourite":""} onClick={()=>getId(value?.id)}><i class="bi bi-heart-fill" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></i></Heart>
    <Container.Header onClick={()=>navigate(`/view/${value?.id}`)}>
     <Img src={value?.url}/>   
    </Container.Header>
   <Container.Body>
    <Title>{value?.name}</Title>
    <Text>{value?.tilte}</Text>
    <Price>{value?.price}₽</Price>
    <Subtitle>Размеры</Subtitle>
    <Footer>
        <Footer.Col>
            <Footer.Text>ШИРИНА</Footer.Text>
            <Footer.Size>{value?.width}СМ</Footer.Size>
        </Footer.Col>
        <Footer.Col>
            <Footer.Text>ГЛУБИНА</Footer.Text>
            <Footer.Size>{value?.depth} СМ</Footer.Size>
        </Footer.Col>
        <Footer.Col>
            <Footer.Text>ВЫСОТА</Footer.Text>
            <Footer.Size>{value?.height}СМ</Footer.Size>
        </Footer.Col>
    </Footer>
    <Button onClick={()=>addProduct(value)}>Добавить в корзину</Button>
   </Container.Body>
  </Container>
  )
}
