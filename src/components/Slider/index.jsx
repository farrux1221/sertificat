import React from 'react';
import hero from '../../assents/img/divan.jpg';
import { Carousel } from 'antd';
import { Container, Content,Img} from './style';
import left from '../../assents/img/Subtract (1).png';
import right from '../../assents/img/Subtract.png';
import { Sld } from './style';
import { Icon } from './style';
export default function Slider() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
  <Container>
    <Content>
    <Carousel autoplay dots={false}>
    <div>
    <Sld>
    <Sld.h>
     LOFT
     МЕБЕЛЪ 
    </Sld.h>
  <Sld.text>Современная и удобная мебель в Анапе</Sld.text>
  
  <Sld.btn>СМОТРЕТЬ КАТАЛОГ</Sld.btn>
  <Icon>
     <Icon.left src={left} />
  <Icon.right src={right} />
  </Icon>
 
  </Sld>
    <Img src={hero} />
    </div>
    <div>
    <Sld>
    <Sld.h>
     LOFT
     МЕБЕЛЪ 
    </Sld.h>
  <Sld.text>Современная и удобная мебель в Анапе</Sld.text>

  <Sld.btn>СМОТРЕТЬ КАТАЛОГ</Sld.btn>
  <Icon>
     <Icon.left src={left} />
  <Icon.right src={right} />
  </Icon>
  </Sld>
    <Img src={hero} />
    </div>
    <div>
    <Sld>
    <Sld.h>
     LOFT
     МЕБЕЛЪ 
    </Sld.h>
  <Sld.text>Современная и удобная мебель в Анапе</Sld.text>

  <Sld.btn>СМОТРЕТЬ КАТАЛОГ</Sld.btn> 
  <Icon>
     <Icon.left src={left} />
  <Icon.right src={right} />
  </Icon>

  </Sld>
    <Img src={hero} />
    </div>
    <div>
    <Sld>
    <Sld.h>
     LOFT
     МЕБЕЛЪ 
    </Sld.h>
  <Sld.text>Современная и удобная мебель в Анапе</Sld.text>
 
  <Sld.btn>СМОТРЕТЬ КАТАЛОГ</Sld.btn> 
  <Icon>
     <Icon.left src={left} />
  <Icon.right src={right} />
  </Icon>

  </Sld>
    <Img src={hero} />
    </div>
  </Carousel>

    </Content>
  </Container>
  )
}
