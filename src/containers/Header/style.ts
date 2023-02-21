import styled from 'styled-components'

export const Wrapper = styled.div`
   
   .container{
     
      width:100%;
   z-index: 9999;
   top:0;
   }
   .content {  
      position:absolute;
      display: flex;  
      flex-direction: row;
      
   }
   .bg-h{
     
   width: 1920px;
  height: 80px;
  margin: 0 0 42px;
  padding: 20px 261px 3px 261px;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.14);
  background-color: #fff;
  @media (max-width:1366px){
   padding: 20px 261px 3px 20px;
  }
  @media (max-width:1280px){ 
   padding: 20px 261px 3px 0px;
  }
   }
   .Yeolame{
      position:absolute;
   width: 134px;
  height: 40px;
  margin: 0 51.4px 0 0;
  font-family: SegoeUI;
  font-size: 29px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: #3f444d;
   }
   .bg_asset{
   width: 67.4px;
  height: 21px;
  margin: 10px 2.5px 8px 125.6px;
  padding: 0 9px 2px 16.4px;
  background-color: #08ceac;
   }
   
   .ww{
      display: flex;
   }
.asset {
   position:absolute;
   width: 42px;
  height: 19px;
  font-family: SegoeUI;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: 2.8px;
  text-align: left;
  color: #fff;
  
}

.span_content{
   display: flex;
   flex-direction: row;
   position: relative;
   height: 25px;
  font-family: NotoSansKR;
  font-size: 17px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
  color: #3f444d;
  margin-left: 67px;
.log{
   position: relative;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #fff; 
  margin: 1px 0 18px 20px;
  padding: 6.1px 50.5px 7.9px 50.5px;
  border-radius: 20px;
  background-color: #08ceac;
}
}


   span{
      position: relative;
      margin: 10px 40px 25px 40px;
      color: #3f444d;
      @media(max-width:1280px){
         margin: 10px 40px 25px 20px;
      }
      @media (max-width:1024px) {
   margin: 10px 9px 25px 8px;
}
   }
   .df{
      width: 118px;
    height: 19px;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
   letter-spacing: normal;
    text-align: left;
    color: #00f59e;
    margin-left: 20px;
    background-color: #fff;
   }
   .bt{
      width: 165px;
    height: 33px;
    padding: 4px 26px 11px 23px;
    border-radius: 10px;
    background-color: #00f59e;
   }

   .open,.isopen,.open2,.isopen2{
      background-color: #fff;
      display:flex;
      flex-direction: column;
      margin-left: 20px;
   }  
  .visible{
   margin-top: 30px;
   position: absolute;
   display: block;
   display: flex;
   flex-direction: column;
   width: 230px;
  height: 165px;
  padding: 34px 53px 33px 28px;
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
  }
  .visible2{
   width: 230px;
  height: 165px;
  margin: 30px 0px 0px -185px;
  padding: 26px 17px 33px 18px;
  border-radius: 5px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.12);
  background-color: #fff;
  }
  .hidden,.hidden2{
display: none;
  }
  .click{
   width: 195px;
  height: 31px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  color: #444;
  }
  .choice{
   background-color: #00f59e;
   width: 195px;
  height: 31px;
  margin-bottom: 10px;
  }
  .xzc{
   margin-left: 30px;
   color: #444;
   background-color:#fff ;
  }
 
  .xzc.active{
   width: 138px;
  height: 19px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;

   color: #00f59e;
  
  }
 .login.active{
   display: block;
 }
 .logout{
   display: block;
 }
 .logout.active{
   display: none;
 }
`

export const Header = styled.div`
   width:100%;
   margin-bottom: 1rem;
`
export const Content = styled.div`
   width:100%;
`

export const Footer = styled.div`
   width:100%;
`