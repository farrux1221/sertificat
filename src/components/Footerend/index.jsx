import React from "react";
import { Container, Content, Row, Item, From } from "./style";
import tele from "../../assents/img/tele.jpg";
import inst from "../../assents/img/inst.png";
import mail from "../../assents/img/mail.png";

export default function Footerend() {
  return (
    <Container>
      <Content>
        <Row>
          <Item>
            <Item.t> <a href="https://arcamebel.uz/?gclid=CjwKCAjwvpCkBhB4EiwAujULMsmq6HbuzlCaUmtUWGICURBey8c-UcnTYgi2BjUE37bfnD7Iy7O98BoChFwQAvD_BwE">Акция</a> </Item.t>
            <Item.text>Новинки</Item.text>
          </Item>
          <From>
            <From.img src={tele} />
            <From.text>  <a href="tel:">8 (964) 89 99 119</a>  </From.text>
            <From.img src={inst} />
            <From.text> <a href="https://www.instagram.com/">INSTAGRAM</a> </From.text>
            <From.img src={mail} />
            <From.text> <a href="https://mail.google.com/mail/u/0/">mebel_loft_anapa@mail.ru</a> </From.text>
          </From>
        </Row>
      </Content>
    </Container>
  );
}
