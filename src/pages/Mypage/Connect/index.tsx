import Company01 from 'components/Company01'
import React, { useState } from 'react'
import * as S from './style'
const data = [
    {
        id:1,
        title:'MetaMask',
    },
    {
        id:2,
        title:'Coinbase Wallet',
    },
    {
        id:3,
        title:'Kaikas',
    },
    {
        id:4,
        title:'Trust(mobile only)',
    },
]

function Index() {
  
    const [ch,setCh] = useState(data[0].id)

    const a = (id :number) =>{
        setCh(id)
    }

      return (
    <S.Container>
        <div className="container">
            <div className="connect">
                <div className="connect-bg">
                    <div className="connect-title">Connect your Wallet.</div>
                    <div className="connect-stitle">If you don’t have a wallet yet, you can select a provider and create one now</div>
                    <div className="line"></div>
                    {data.map((d) => (
                   <div className='in' key={d.id}>
                   <input type='checkbox' className='to'  onChange={()=>a(d.id)} />
                   <div className={ch === d.id ? "too22": "too2"} >{d.title}</div>
                   </div>
                    ))}
            </div>
            </div>
            <Company01/>
        </div>
    </S.Container>
  )
}

export default Index