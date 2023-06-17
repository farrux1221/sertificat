import React from "react";
import { Container, Contant,Img,Close } from "./style";



export default function List({value}) {


  return (
    <Container>
      <Contant>
        <Img src={value?.url}/>
       
       <Contant.Dif>
         <Contant.Title>{value?.name}</Contant.Title> 
        <Contant.Count>Количество: {value?.count}</Contant.Count>
        </Contant.Dif>
<Contant.Dif>
     <Contant.Num>{value?.price}₽</Contant.Num>
        <Contant.Coun>Размер(Ш×Д×В):  {value?.width} СМ × {value?.depth} СМ × {value?.height} СМ</Contant.Coun> 
</Contant.Dif>
    
       
      
       
      </Contant>
      <Close >&#215;</Close>
    </Container>
  );
}
