import React from 'react';
import kitchen from '../../assents/img/oshxona.jpg';
import yotoq from '../..//assents/img/yotoq.jpg';
import mehmonhona from '../..//assents/img/mehmonhona.jpg';
import shikaf from '../..//assents/img/shikaf.jpg';
import note from '../..//assents/img/note.jpg';
import dush from '../..//assents/img/dush.jpg';
import nol from '../..//assents/img/nuqta.jpg';
import { Container, Content,Item,Row} from './style';

export default function Sort() {
  return (
   
  <Container>
    <Content>
       <Row>
 <Item>
    <Item.Img src={kitchen}/>
  <Item.Text>Кухни</Item.Text>
   </Item>

   <Item>
    <Item.Img src={yotoq}/>
  <Item.Text>Спальни</Item.Text>
   </Item>

   <Item>
    <Item.Img src={mehmonhona}/>
  <Item.Text>Гостинные</Item.Text>
   </Item>
   

   <Item>
    <Item.Img src={shikaf}/>
  <Item.Text>Прихожие</Item.Text>
   </Item>

   <Item>
    <Item.Img src={note}/>
  <Item.Text>Офисная мебель</Item.Text>
   </Item>

   <Item>
    <Item.Img src={dush}/>
  <Item.Text>Детская</Item.Text>
   </Item>
   <Item>
  <Item.Sale>Акция</Item.Sale>
   </Item>

   <Item>
    <Item.Img src={nol}/>

   </Item>
       </Row>
  
    </Content>
  </Container>
  )
}
