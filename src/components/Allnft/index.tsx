import React, { useState } from 'react'
import  Pagination  from '../Pagination'

import * as S from './style'
import Company01 from 'components/Company01'
import ModalAll from 'components/ModalAll'
import data1 from '../../assets/images/Data/data.png'
import data2 from '../../assets/images/Data/data2.png'
import data3 from '../../assets/images/Data/data3.png'
import data4 from '../../assets/images/Data/data4.png'
const data = [
   
    { 
        id:1,
        src:<img src ={data1}/>,
        name:'From Line',
        target:'Target amount',
        detail:'Detail',
        sell:'Sell'
    },
    {
        id:2,
        src:<img src ={data2}/>
        ,
        name:'Let `s Talk About Glory',
        target:'Target amount',
        detail:'Detail',
        sell:'Sell'
    },
    {
        id:3,
        src:<img src ={data3}/>
        ,
        name:'Panel of Experts',
        target:'Target amount',
        detail:'Detail',
        sell:'Sell'
    },
    {
        id:4,
        src:<img src ={data4}/>
        ,
        name:'Ishtar, 1983',
        detail:'Detail',
        sell:'Sell'
    },
  ]

function Index({d}:any) {
    const [co,setCo] = useState(false);

    const ccc = () => {
        setCo(true);
    }
    const showModal = () => {
        setCo(false);
      }
  return (
    <S.Container>
        <div className='container'>
            <div className='content'>
                {d.map((d :any)=> (
                    <div className='allnft-content' key={d.id}>
                        <div className='img'>{d.src} </div>
                        <div className='name'>{d.name}</div>
                        <div className='bu'>
                            <button className='detail' onClick={ccc}>{d.detail}</button>
                        
                            <button className='sell' >{d.sell}</button>
                        </div>
                    </div>
                ))}
            </div>
            {co === true ? <ModalAll co={showModal}/>:""}
            <div className='content'>
                {d.map((d : any)=> (
                    <div className='allnft-content' key={d.id}>
                        <div className='img'>{d.src} </div>
                        <div className='name'>{d.name}</div>
                        <div className='bu'>
                            <button className='detail'>{d.detail}</button>
                            <button className='sell' >{d.sell}</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='content'>
                {d.map((d : any)=> (
                    <div className='allnft-content' key={d.id}>
                        <div className='img'>{d.src} </div>
                        <div className='name'>{d.name}</div>
                        <div className='bu'>
                            <button className='detail'>{d.detail}</button>
                            <button className='sell' >{d.sell}</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='content'>
                {d.map((d : any)=> (
                    <div className='allnft-content' key={d.id}>
                        <div className='img'>{d.src} </div>
                        <div className='name'>{d.name}</div>
                        <div className='bu'>
                            <button className='detail'>{d.detail}</button>
                            <button className='sell' >{d.sell}</button>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination/>
            <Company01/>
        </div>
    </S.Container>
  )
}

export default Index