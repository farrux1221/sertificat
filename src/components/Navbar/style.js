import styled from 'styled-components'
import { ReactComponent as cart } from '../../assents/svg/оповещение.svg'
export const Container= styled.div`
  height: 126px;
  display: flex;
  align-items: center;

  background-color: #fff;
`

export const Content= styled.div`
 width: 100%;
  max-width: 1240px;
 margin: 0 auto;
 padding: 0 20px;
 display: flex;
 align-items: center;
 object-fit: cover;
 justify-content: space-between;
`


export const Logo = styled.img`
width: 112px;
height:25px;

`
export const Item = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
padding-left: 30px;
`
export const  Form = styled.div`
 max-width: 280px;
 height: 40px;
 padding: 5px 10px;
 margin: 13px 15px;
 display: flex;
 align-items: center;
 margin-left: 40px ;
background: #F9F9F9;
`
Form.Img = styled.img`

`
Form.Input = styled.input`
border: 0;
background:none;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
outline:none;
margin-left:20px;
`
export const Phone = styled.div`
 display: flex;
`
Phone.Img = styled.img`

`
Phone.Item = styled.a`
margin-top: 2.5px;
margin-left: 11px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
align-items: center;
`

export const Deleviry = styled.div`
margin-left: 30px;
display: flex;

`
Deleviry.Img = styled.img`

`
Deleviry.Item = styled.span`
margin-top: 2.5px;
margin-left: 11px;
align-items: center;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #414141;
`

export const Icons =styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  justify-content: space-between;
`
Icons.Icon = styled.img`
margin-left: 30px;
`

export const Heart =styled.div`
color: #7777;
cursor: pointer;
`
export const Cart = styled.div`
  position: relative;
`

Cart.Icon = styled(cart)`
position: absolute;
top:2px;
right: -1px;
`