import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  height: 234px;
  background: #ffffff;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.03);
`;
export const Content = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
`;
export const Row = styled.div`
  display: flex;

  justify-content: space-between;
`;
export const Col = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  gap: 50px;
`;
Col.start = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  margin-left: 55px;
  font-size: 14px;
  line-height: 126.69%;
  color: #414141;
`;
Col.cenrt = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 126.69%;
  color: #414141;
  margin-top: 40px;
`;
Col.end = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 126.69%;
  color: #414141;
  margin-top: 40px;
  margin-left: 20px;
`;
export const Logo = styled.div`
  margin-right: 50px;
`;
Logo.img = styled.img`
  width: 60px;
  height: 35px;
  margin-left: 105px;
  margin-top: 25px;
`;
Logo.text = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 126.69%;
  text-align: right;
  margin-top: 45px;
padding-right: 15px;
  color: #414141;
`;
