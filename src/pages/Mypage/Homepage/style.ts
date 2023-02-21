import styled from "styled-components";

export const Container = styled.div`

.content{
    margin: 80px 0 0 262px;
    @media (max-width:1366px){
         margin: 80px 0 0 20px;
  }
      @media (max-width: 1280px) {
         margin: 80px 0 0 0px;
      }
}
.notice,.userguide,.Frequently{
width: 55px;
  height: 19px;
  margin: 0px 51.3px 15px -6px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #444;
  background-color: #fff;
}
.userguide{
    width: 95px;
}
.Frequently{
    width:209px;
    
}
.notice.active,.userguide.active,.Frequently.active{
    font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: left;
  color: #131716;
}
.button1{
    display: flex;
}
.Frequently.active{
width: 219px;
}
.line{
    width: 1398px;
  height: 0;
  border: solid 1px #e5e8e7;
}
.li,.li2,.li3{
    display: none;
}
.li.active,.li2.active,.li3.active{
    display: block;
    width: 55px;
  height: 2px;
  margin: 13px 48px 0 0.5px;
  background-color: #00f59e;
}
.li2.active{
    width: 82px;
   
}
.li3.active{
    width: 200px;
    
}
.con,.con2,.con3{
    display: none;
}
.con.active,.con2.active,.con3.active{
    display: block;
}

`