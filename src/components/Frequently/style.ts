import styled from "styled-components";

export const Container = styled.div`
.id-box{
    color: #fff;
    display: flex;
    font-size: 18px;
  font-weight: 600;
  line-height: 1.22;
  letter-spacing: 0.45px;
}
.cont{
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.title{
    width: 98px;
  height: 34px;
  margin: 39px 652px 11px 650px;
  font-family: Montserrat;
  font-size: 28px;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.68;
  letter-spacing: normal;
  text-align: center;
  color: #131716;
  @media (max-width: 1024px) {
    margin: 37px 652px 11px 478px;
  }
  
}
.gun{
    width: 148px;
  height: 19px;
 margin: 0px 258px 28px 1154px;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  text-align: right;
  color: #444;
  @media (max-width: 1280px) {
    margin: 0px 258px 28px 1056px;
  }
  @media (max-width: 1024px) {
    margin: 0px 258px 28px 810px;
  }
}
.box{
    width: 1398px;
  height: 78px;
  margin: 0 0 88px;
  padding: 29px 50px 26px;
  background-color: #081712;
  @media (max-width: 1024px) {
    width: 1024px;
  }
}
.dsa2{
    height: 376px;
    width: 1397px;
    margin: 27px 0 0 -50px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
}
.dsa {

    width: 1397px;
  height: 271px;
  margin: 27px 0 0 -50px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
  @media (max-width: 1024px) {
    width: 1024px;
  }
}
.hi{
  width: 1024px;
    padding-top: 26px;
    height: 104px;
    margin-left: 142px;
    background-color: #f9f9f9;
    position: absolute;
    margin-top: -107px;
}
.text2{
    display: flex;
   
}
.text{
    padding-top: 37px;
    padding-bottom: 29px;
    display: flex;
    background-color: #fff;
}
.hiddenbut{
    display: none;
}
.hiddenbut2{
    display: block;
    width: 1398px;
  background-color: #f9f9f9;
}
.text2{
    display: flex;
    width: 1398px;
  height: 50px;
  padding: 15px 15px 15px 0px;
  background-color: #f5f5f5;
  @media (max-width: 1024px) {
    width: 1024px;
  }
}

.number{
    padding: 0px 59px 0px 61px;
}

.number1{
    padding: 0px 52px;
}

.number2{
    margin: 0px 204px 0px 203px;
    width: 321px;
    text-align: center;
    @media (max-width:1280px) {
      margin: 0px 208px 0px 128px;
    }
    @media (max-width:1024px) {
      margin: 0px 32px 0px -2px;
    }
}


.id1{
    width: 42px;
  height: 22px;
  margin: 0 569px 1px 528px;
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: 0.45px;
  text-align: center;
  color: #fff;
}


.line1,.line2{
    position: absolute;
    width: 0;
  height: 237px;
  border: solid 1px #c8c8c8;
}
.line1{
    margin: 2px 0px 0px 128px;
}
.line1active{
  position: absolute;
  margin: 2px 0px 0px 128px;
  height: 340px;
  border: solid 1px #c8c8c8;
}
.line2{
    margin: 2px 0px 0px 1068px;
}
.line2active{
  position: absolute;
  margin: 2px 0px 0px 1068px;
  height: 340px;
  border: solid 1px #c8c8c8;
}

.question{
    width: 87px;
  height: 19px;
  margin: 0px 803px 0px 50px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: 0.4px;
  text-align: left;
  color: #131716;

}
.category{
    width: 166px;
  height: 19px;
  margin-left: 52px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: 0.4px;
  text-align: center;
  color: #131716;
}
.down{
    margin-left: -40px;
}
.answer{
    width: 36px;
    height:105px;

    font-family: Montserrat;
    font-size: 16px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 6.25;
    letter-spacing: 0.4px;
    text-align: left;
    margin-left: 48px;
    color: #5d7160;
}
`