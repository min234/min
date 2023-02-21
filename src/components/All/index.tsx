import React, { useState } from 'react'
import *  as S from './style'

const title = [
    {
        title:<div className="T">Transaction Date</div>
    },
    {
        title:<div className="T1">Product Name (code)</div>
    },
    {
        title:<div className="T2">Quantity</div>
    },
    {
        title:<div className="T3">Method</div>
    },
    {
        title:<div className="T4">From</div>
    },
    {
        title:<div className="T5">To</div>
    },
    {
        title:<div className="T6">Volumn</div>
    },
    {
        title:<div className="T7">State</div>
    },
    {
        title:<div className="T8">Detail</div>
    },
]


interface Props {
    da: any;
  }

function Index({ da = [] }: Props) {
    const [color,setColor]= useState(2);


  return (
    <S.Container>
        <div className="container">
         <div className="table-title">
            {title.map((d :any) => (
                <div className="table-t" >
                    {d.title}
                </div>
            ))}
         </div>
         <div className='table-content'>
            {da.map((d :any)=>(
                <div className={`table-c ${color === d.id ? "active" : ""}`} key={d.id}>
                    <div className="table-Date">{d.Date}</div>
                    <div className='sun'></div>
                    <div className='table-code'>{d.Code}</div>   
                    <div className='sun'></div> 
                    <div className='table-quantity'>{d.quantity}</div>
                    <div className='sun'></div>
                    <div className='table-Method'>{d.Method}</div>
                    <div className='sun'></div>
                    <div className='table-From'>{d.From}</div>
                    <div className='sun'></div>
                    <div className='table-To'>{d.To}</div>
                    <div className='sun'></div>
                    <div className='table-Volumn'>{d.Volumn}</div>
                    <div className='sun'></div>
                    <div className='table-State'>{d.State}</div>
                    <div className='sun'></div>
                    <div className='table-Detail'>{d.Detail}</div>
                </div>
            ))}
        
    
         </div>
        </div>
    </S.Container>
  )
}

export default Index