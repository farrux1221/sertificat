import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Img, Stars, Star, Title,Name, Detaels,Icon, Sizes, Comments, Nav, Menu } from './style'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import yulduz from '../../assents/img/Vector.png'
import Card from '../../components/Card';
import { useActive } from '../../context/Active';

export default function View() {
  const [data, setData] = useState([]);
  const [product, setProduct] = useState([]);
  const [render, setRender] = useState(false)
  const [active, setActive] = useActive()
  const params = useParams();
  useEffect(() => {
    axios.get(`https://6427fbdc46fd35eb7c492488.mockapi.io/student/${params?.id}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
       console.log(res.data,'data')
      setData({ ...res.data })
    })
      .catch(error => console.log(error))

  }, [params?.id])



  useEffect(() => {
    axios.get("https://6427fbdc46fd35eb7c492488.mockapi.io/student", {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {

      setProduct([...res.data ])
      setActive(!active)
    })
      .catch(error => console.log(error))

  }, [render])




  return (
    <Container>
      <Menu>  <span><Link to={'/'}>Главная </Link> /  <Link to={'/about'}>O нас </Link> /  <Link to={'/contact'}>Контакты </Link> </span></Menu>
      <Row>
        <Col style={{ textAlign: "center" }}>
          <Img src={data?.url} />
        </Col>
        <Col>
          <Stars>
            <Star src={yulduz} />
            <Star src={yulduz} />
            <Star src={yulduz} />
            <Star src={yulduz} />
            <Star src={yulduz} />
          </Stars>
          <Title>{data?.name}</Title>
          <Name>{data?.title}</Name>
          <Detaels>
            <Detaels.Price>{data?.price}₽</Detaels.Price>
            <Detaels.Button>Купить</Detaels.Button>
            <Icon className={data?.active?"favourite":""}><i class="bi bi-heart-fill" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg></i></Icon>
            <Detaels.Text>Добавить в желаемое</Detaels.Text>
          </Detaels>
          <Sizes>
            <Sizes.Title>Размер (Д × Ш × В)</Sizes.Title>
            <Sizes.Text>{data?.width} СМ × {data?.depth} СМ × {data?.height} СМ </Sizes.Text>
          </Sizes>
          <Comments>
            <Comments.Title>Описание</Comments.Title>
            <Comments.Text>Лаконичные линии и простые формы, безупречный стиль и индивидуальность – все это диван «Динс». Сдержанный скандинавский дизайн украсит любую современную обстановку. Элегантность, комфорт и функциональность, собранные воедино – «Динс» просто создан для размеренного отдыха в кругу семьи или компании друзей!</Comments.Text>
          </Comments>
        </Col>
      </Row>
      <Nav>Хиты продаж</Nav>
      <Row>
        {
          product.length>0  &&product.map(item => <Card setRender={setRender} key={item.id} value={item} />)
        }
      </Row>
    </Container>
  )
}

