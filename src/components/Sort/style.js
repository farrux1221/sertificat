import styled from 'styled-components'

export const Container= styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #fff;
`
 export const Row = styled.div`
  padding: 23px 40px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
  width: 100%; justify-content: space-between;
  display: flex;
 `
export const Content= styled.div`
 width: 100%;
  max-width: 1240px;
 margin: 0 auto;
 padding: 0 20px;
 display: flex; 
 object-fit: cover;
 align-items: center;
 justify-content: space-between;
 background: #FFFFFF;
`
export const Item = styled.div`
   display: flex;
   align-items: center;
cursor: pointer;
 background: #FFFFFF;
align-items: center;

`
Item.Img =styled.img`

`
Item.Text =styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
padding-left:10px ;
color: #414141;
`
Item.Sale =styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #D74444;

`