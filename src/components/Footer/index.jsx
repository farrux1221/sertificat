import React from "react";
import { Container, Content, Row, Col, Logo } from "./style";
import logo from "../../assents/img/logo (29).png";
import Footerend from "../Footerend";

export default function Footer() {
  return (
    <Container>
      <Content>
        <Row>
          <Col>
            <Col.start>
              <h4>НАВИГАЦИЯ</h4>
              <p>Кухни</p>
              <p>Спальни</p>
              <p>Гостинные</p>
            </Col.start>
            <Col.cenrt>
              <p>Прихожие</p>
              <p>Офисная мебель</p>
              <p>Детская</p>
            </Col.cenrt>
            <Col.end>
              <p>Шкафы</p>
              <p>Матрасы </p>
              <p>Мягкая мебель</p>
            </Col.end>
          </Col>
          <Logo>
            <Logo.img src={logo} />

            <Logo.text>
              г. Анапа, Анапское шоссе,
              <br />
              30 Ж/К Черное море
            </Logo.text>
          </Logo>
        </Row>
        <Footerend />
      </Content>
    </Container>
  );
}
