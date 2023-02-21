import styled from "styled-components";

export const Container = styled.div`
.cone{
    display: flex;
    flex-direction: column;
    margin-left: 261px;
}
.dd{
    display: flex;
    flex-direction: row;
}
.line{
    width: 1398px;
  height: 0;
  margin: 14.5px 0 0 0.5px;
  border: solid 1px #e5e8e7;
}

.line2.active,.line3.active,.line4.active,.line5.active,.line6.active{
  width: 110px;
  height: 2px;
  margin: 46px 50.3px 0 46px;
  background-color: #00f59e;
  position: absolute;
}
.line3.active{
    margin: 46px 50.3px 0 222px;
}
.line4.active{
    width: 143px;
    margin: 47px 50.3px 0 411px;
}
.line5.active{
    margin: 47px 50.3px 0 633px;
}
.line6.active{
    margin: 47px 50.3px 0 793px;
}
.buts{
    height: 19px;
    margin: 0 50px 13px 50.3px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #444;
}
.buts.active{
    height: 19px;
    margin: 0 50px 13px 50.3px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #444;
}
.x{
    display: none;
}
.x.active{
    display: block;
}
.c{
    display: none;
}
.c.active{
    display: block;
}
`