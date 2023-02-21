import Detail from 'components/Detail'
import Mynft from 'components/Mynft'
import Qn from 'components/Qn'
import Transaction from 'components/Transaction'
import Vertify from 'components/Vertify'
import React, { useState } from 'react'
import * as S from './style'

const data = [
  {id:1,title:'Profile Detail ', style : {with:'110px'}},
  {id:2,title:'My NFTs ', style : {with:'69px'}},
  {id:3,title:'Transaction History ', style : {with:'157px'}},
  {id:4,title:'Favorites ', style : {with:'73px'}},
  {id:5,title:'1:1 QnA ', style : {with:'56px'}},
]

function Index() { 
  const [b,setB] = useState(data[0].id)

  const s = (id:number) => {
    setB(id)
  }
 


  return (
    <S.Container>
        <div className='container'>
            <div className='cone'>
              <div className='dd'>
                 {data.map((d,index) => (
                  <div className='d' key={index}>
                    <div className={`buts ${b === d.id ? "active" : ""}`} onClick={() => s(d.id)}>{d.title} </div>
                    </div>
                 ))}
                 </div>
                 <div className={`line2 ${b === 1 ? "active" : ""}`}></div>
                 <div className={`line3 ${b === 2 ? "active" : ""}`}></div>
                 <div className={`line4 ${b === 3 ? "active" : ""}`}></div>
                 <div className={`line5 ${b === 4 ? "active" : ""}`}></div>
                 <div className={`line6 ${b === 5 ? "active" : ""}`}></div>
                   <div className='line'></div>
                   <div className={`c ${b === 1 ? "active":""}`}><Detail/></div>
                  <div className={`c ${b === 2 ? "active":""}`}><Mynft/></div>
                  <div className={`c ${b === 3 ? "active":""}`}><Transaction/> </div>
                  <div className={`c ${b === 5 ? "active":""}`}><Qn/> </div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index