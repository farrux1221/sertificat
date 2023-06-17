import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 max-width: 263px;
 background: #FFFFFF;
box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.11);
margin: 10px;
padding: 21px 15px;
position: relative;
`

Container.Header = styled.div`
margin-top: 38px;
 height: 200px;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: space-between;
 cursor: pointer;
`

Container.Body = styled.div`
margin-top: 54px;
` 
export const Title = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #414141;
white-space: nowrap;
overflow: hidden;
max-width: 100%;
text-overflow: ellipsis;
`

export const Text = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
color: #414141;
padding-top: 6px;
white-space: nowrap;
overflow: hidden;
max-width: 100%;
text-overflow: ellipsis;
`
export const Subtitle = styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
padding-top: 15px;
color: #414141;
`

export const Price= styled.h3`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
color: #414141;
padding-top: 9px;
`

export const Footer= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 8px;
`
Footer.Col = styled.div`
  
`

Footer.Text = styled.h4`
  font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
color: #C4C4C4;
`

Footer.Size = styled.h4`
 font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 9px;
line-height: 11px;
color: #414141;
margin-top: 8px;
padding-top: 8px;
`

export const Button = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
color: #FFFFFF;
background: #245462;
padding: 13px 50px;
height: 40px;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 17px;
cursor: pointer;
transition: 0.2s;

&:active{
  background-color: blue;
}
&:hover{
    opacity: 0.9;
}
`


export const Img =styled.img`
padding-top: 7px;
height: 100%;
width: 100%;
transition: .3s;
cursor: pointer;
&:hover{
  transform: scale(1.1);
}
`

export const Heart =styled.div`
position: absolute;
text-align: right;
right: 15px;
top: 15px;
margin: 8px 0px;
box-shadow:1px 1px 5px grey;
color: #80808029;
border: 1px solid grey;
width: 30px;
height: 30px;
padding: -10px;
border-radius:50px;
padding-top: 8px;
padding-right: 6px;
cursor: pointer;
`

