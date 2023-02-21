import styled from "styled-components";

export const Container = styled.div`
.mo{
  width: 1920px;
    height: 1281px;
    z-index: 1;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
    margin-left: -381px;
    margin-top: -635px;
}
.mo.active{
  display: none;
}
.mo-white{
  width: 408px;
  height: 278px;
  margin: 100px 756px 504px;
  padding: 32px 31.5px 41px 32px;
  border-radius: 10px;
  border: solid 1px #00f59e;
  background-color: #fff;
}
.mo-title{
  width: 89px;
  height: 32px;
  margin: 0 8px 25.5px 0;
  font-family: Montserrat;
  font-size: 26px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #131716;
}
.mo-line{
  width: 344px;
  height: 0;
  margin: 25.5px 0 0 0.5px;
  border: solid 1px #e5e8e7;
}
.mo-sub{
  width: 344px;
  height: 45px;
  margin: 32.5px 0.5px 30px 0;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: center;
  color: #444;
}
.mo-button{
  width: 150px;
  height: 40px;
  margin: 0px 96.5px 0px 96.5px;
  padding: 11px 51.7px 11px 52.3px;
  border-radius: 10px;
  background-color: #00f59e;
  text-align: center;
  color: #131716;
  font-size: 14px;
  font-weight: 600;
}
.ss{
  width: 20px;
    height: 20px;
    margin: 3px 0.5px 34.5px 235px;
    font-family: themify;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: left;
    color: #b1b1b1;
    background-color: #fff;
}
.ss.active{
  display: none;
}
.lw{
  display: flex;
  flex-direction: row;
  height: 30px;
}
`