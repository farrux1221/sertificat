
import React from 'react'
import { Container, Contant, Pichke, Menu, Title, Row, Col, Footer, Send, Roow, Cool, Card, RowMein, ColMein, Mein,End ,Mid} from './style'
import pich from '../../assents/img/пикча.png'
import Mowin from '../../assents/img/Vector (8).png'
import Time from '../../assents/img/time.png'
import pro from '../../assents/img/production.png'
import profc from '../../assents/img/profit.png'
import coop from '../../assents/img/coop.png'
import re from '../../assents/img/re.png'
import sup from '../../assents/img/support.png'
import deli from '../../assents/img/delivery-box (1).png'
import vector from '../../assents/img/Vector (1).png'
import chzq from '../../assents/img/Rectangle 57 (1).png'
import lina from '../../assents/img/lina.png'


export default function About() {
  return (
    <Container>
     
      <Contant>
        
        <Title><Mid.lina src={lina}/> <Mid>О магазине</Mid> 
          Интернет-магазин «Лофт Мебель»:
          купите хорошую
          мебель в один клик!
          <Title.Text>   Уникальный формат интернет-магазина позволит вам купить лучшую
            мебель крупнейших российских фабрик максимально быстро и по
            выгодной цене!
            </Title.Text>
           
            <Title.Txt> 
            Мы благодарим за доверие более десятка производителей, которые дали
            нам возможность представлять лучшие образцы их продукции в
            российском интернет-пространстве. Прямые договоры на поставку
            мебели с фабрик обеспечивают наиболее привлекательные условия для
            наших покупателей.
            </Title.Txt>
        </Title>
        <Pichke src={pich} />
        
      </Contant>
<Pichke.color></Pichke.color>
      <Menu>Покупайте с выгодой!</Menu>
      <Row>
        <Col>
          <Col.img src={profc} />
          <Col.text>
            Лучшая цена
            <Col.p>Предлагаем близкие к оптовым цены, которые дают возможность приобретать мебель дешевле, чем в розничных салонах и шоу-румах.</Col.p>
          </Col.text>




        </Col>
        <Col>
          <Col.img src={Mowin} />
          <Col.text>
            Прямые поставки
            <Col.p>С ведущих мебельных фабрик уменьшают срок
              выполнения вашего заказа, даже если речь идет об изготовлении предметов по
              индивидуальному проекту.
              и шоу-румах.</Col.p>
          </Col.text>




        </Col>
      </Row>
      <Row>
        <Col>
          <Col.img src={Time} />
          <Col.text>
            Экономие времени
            <Col.p> Не нашли оптимальный вариант или нет
              времени на поиски? Оставьте онлайн-заявку с критериями, и мы предложим вам
              несколько достойных образцов.</Col.p>
          </Col.text>




        </Col>
        <Col>
          <Col.img src={pro} />
          <Col.text>
            Изготовление на заказ
            <Col.p>Принимаем заявки на изготовление
              мебели по персональному дизайн-проекту от покупателей из любой точки России.
              Просим быть готовыми к авансированной оплате персональных заказов.</Col.p>
          </Col.text>




        </Col>
      </Row>




      <Footer>
      <Footer.color></Footer.color>
        <Footer.col>
          <Footer.title>Самые «вкусные» предложения</Footer.title>
        <Footer.chzq src={chzq}/>
          <Footer.text>Мы делаем всё
            необходимое, чтобы покупатели получали доступ к актуальным новинкам, которые
            представляет российский мебельный рынок. Познакомиться с каждой моделью,
            сравнить цены на аналоги и выбрать лучшее вы можете прямо сейчас. Хотите
            первыми узнавать о самых выгодных предложениях? Тогда подписывайтесь на
            информационную рассылку!</Footer.text>

        </Footer.col>
        <Footer.col>
          <Footer.title>Гарантированное качество</Footer.title>
          <Footer.chzq src={chzq}/>
          <Footer.text>Вся продукция сопровождается
            гарантией производителя. В каталогах представлена только сертифицированная
            мебель. Собственный контроль качества тщательно проверяет каждый образец
            перед отправкой заказчику. Покупатели получают необходимые документы –
            гарантийный талон и чек.</Footer.text>

        </Footer.col>

        <Footer.col>
          <Footer.title>Впечатляющий ассортимент</Footer.title>
          <Footer.chzq src={chzq}/>
<Footer.text>Ежедневно мы выбираем для
            наших каталогов идеальные образцы из товарной матрицы производителей по всей
            России. Модные расцветки, экологически безопасные материалы, надежные
            комплектующие – у нас вы найдете мебель своей мечты!
          </Footer.text>

        </Footer.col>
        <Footer.colo></Footer.colo>
      </Footer>


      <Send>

        <Card>
          <Roow>

          <Cool.im>
            <Col.img src={coop} />
             </Cool.im>

            <Cool>

              <Col.text>
                Особенные условия для оптовиков            <Col.p> Число наших оптовых
                  покупателей неуклонно возрастает и всё потому, что мы сумели предложить
                  владельцам мебельных магазинов наиболее выгодные условия.</Col.p>
              </Col.text>




            </Cool>
          </Roow>
          <Roow>
          <Cool.im>
            <Col.img src={deli} />
             </Cool.im>
            <Cool>

              <Col.text>
              Оперативная доставка         <Col.p> Собственная курьерская служба
быстро привезет купленную мебель по указанному адресу. В российские регионы
доставка осуществляется силами транспортных компаний.</Col.p>
              </Col.text>




            </Cool>
          </Roow>
        </Card>
        <Card>
          <Roow>
          <Cool.im>
            <Col.img src={sup} />
             </Cool.im>
            <Cool>

              <Col.text>
              Внимательный сервис       <Col.p>Квалифицированные менеджеры
интернет-магазина ответят на все вопросы по ассортименту и предоставляемым
 возможностям,
клиентских пожеланий при заказе мебели.
</Col.p>
              </Col.text>




            </Cool>
          </Roow>
          <Roow>

          <Cool.im>
            <Col.img src={re} />
             </Cool.im>
   
            <Cool>

              <Col.text>
              Каждый пятый покупатель  у нас
повторно!        <Col.p> И мы благодарим всех, кто воспользовался нашим уникальным предложением, заказал мебель быстро и недорого и порекомендовал 
друзьям и
знакомым.
</Col.p>
              </Col.text>




            </Cool>
          </Roow>
        </Card>

        <Mein>Мы поможем сэкономить время, силы и деньги!</Mein>
        <RowMein>
          <ColMein>
            <ColMein.Img src={vector} />
            <ColMein.Title>

              Время. <br />
              Примем вашу заявку в кротчайшие сроки. При необходимости
              подберем для вас достойные варианты по заданным критериям.

            </ColMein.Title>

          </ColMein>
          <ColMein>
            <ColMein.Img src={vector} />
            <ColMein.Title>

              Силы.  <br />

              Закупим оптом или закажем на фабрике, избавив от длительных
              обсуждений заказа с исполнителем. Курируем все этапы работы над
              заказом.
            </ColMein.Title>

          </ColMein>
          <ColMein>
            <ColMein.Img src={vector} />
            <ColMein.Title>

            Деньги.  <br />
               
Вы точно купите мебель дешевле, чем в розницу.
            </ColMein.Title>

          </ColMein>

        </RowMein>

<End>На чем мы не экономим?</End> 
<End.im>На вашем комфорте и
качестве мебели!</End.im>

      </Send>


    </Container>
  )
}