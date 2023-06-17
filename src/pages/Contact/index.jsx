import React from 'react'
import { Container ,Contant, Menu } from './style'
import { Link } from 'react-router-dom';
import { Text } from './style';
import { Inputs } from './style';
import { Textarea } from './style';
import { Button } from './style';
import { From } from './style';
import { Texts } from './style';
import { The } from './style';
import { Input } from './style';
import { Umumiy} from './style';
import { Plus } from './style';
import { Thr } from './style';
import tele from "../../assents/img/tele.jpg";
import inst from "../../assents/img/inst.png";
import mail from "../../assents/img/mail.png";
import map from '../../assents/img/yandex-map.png'
export default function Contact() {
  return (
   <Container>
     <Contant>
     <Menu>  <span><Link to={'/'}>Главная </Link> / <Link to={'/contact'}>Контакты </Link> </span></Menu>
     <Text>Свяжитесь с нами</Text>
   </Contant>


  


    

         
          
<Umumiy>
       <From>
            <From.img src={tele} />
            <From.text>  <a href="tel:">8 (964) 89 99 119</a>  </From.text>
            
            <From.img src={mail} />
            <From.text> mebel_loft_anapa@mail.ru</From.text>
            </From>

 
          <Texts>
            <From>
            <From.img src={inst} />
            <From.text> <a href="https://www.instagram.com/">INSTAGRAM</a> </From.text>
          </From>
          </Texts>
           <Thr>Адрес: г. Анапа, Анапское шоссе, 30 Ж/К Черное море</Thr>
</Umumiy>   
 
      
        

<Plus>
 <Inputs>
 <Inputs.tex>Ваше имя</Inputs.tex>
 <Inputs.input></Inputs.input>  
 </Inputs>


 <Input>
 <Input.te>Ваш e-mail</Input.te>
 <Input.input></Input.input>  
 </Input>  
</Plus>


 <Plus>
          
 <Textarea>
 <Textarea.te>Сообщение</Textarea.te>
  <Textarea.input></Textarea.input>
  </Textarea>
  </Plus>

  <Plus>
    <Button>
    <Button.Btn>Прикрепить файл</Button.Btn>  
    <Button.Btns>Отправить</Button.Btns>  
  </Button> 
  </Plus>
 







<The>
<The.text>Адрес нашей компании</The.text>
<The.map src={map}/>
</The>
  
   </Container>
  )
}
