import Company01 from 'components/Company01';
import Notice from 'components/Notice';
import React, { useState } from 'react';
import UserGuide from 'components/UserGuide';

import * as S from './style'
import Frequently from 'components/Frequently';
const data = [ 
  {
    id:1,
    name:'notice'
  },
  {
    id:2,
    name:'userguide'
  },
  {
    id:3,
    name:'Frequently'
  },
]

function Index() {
    
    const [btt,setBtt] = useState(1);
    
    const co =  () => {
      setBtt(1)
    }
     
    const co2 =  () => {
      setBtt( 2)
    }
    const co3 =  () => {
      setBtt(3)
    }
  return (
   <S.Container>
    <div className="container">
        <div className="content">
            <div className="button1">
            <div >
                <button className={`notice ${ btt === 1 ? 'ative' : "" }`} onClick={co}>Notice 
          <div className={`li ${ btt === 1 ? 'active': ''}`}></div>
          </button>
         <div className={`con ${ btt === 1 ? 'active': ''}`}><Notice/></div> 
         <div className={`con2 ${ btt === 2 ? 'active': ''}`}><UserGuide/></div>
         <div className={`con3 ${ btt === 3? 'active': ''}`}><Frequently/></div>
         </div>

         <button className={`userguide ${ btt === 2 ? 'ative' : "" }`} onClick={co2}>User Guide 
          <div className={`li2 ${ btt === 2 ? 'active': ''}`}></div>
          </button>
         
       
          <button className={`Frequently ${ btt === 3 ? 'ative' : "" }`}onClick={co3}>
            Frequently Asked Question
          <div className={`li3 ${ btt === 3? 'active': ''}`}></div>
          </button>
            </div>
            <div className="line"/>
           
        </div>
        <Company01 />
    </div>
   </S.Container>
  )
}

export default Index