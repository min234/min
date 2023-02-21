import React from 'react'
import sf from '../../../assets/images/Data/sf.png'
import c from '../../../assets/images/Data/c.png'
import s from '../../../assets/images/Data/s.png'
import x from '../../../assets/images/Data/x.png'
import a from '../../../assets/images/Data/a.png'
import bb from '../../../assets/images/Data/bb.png'
import bbb from '../../../assets/images/Data/bbb.png'
import bbbb from '../../../assets/images/Data/bbbb.png'
import dataa from '../../../assets/images/Data/data.png'
import dataa2 from '../../../assets/images/Data/data2.png'
import dataa3 from '../../../assets/images/Data/data3.png'
import dataa4 from '../../../assets/images/Data/data4.png'
import dataa5 from '../../../assets/images/Data/data5.png'
import dataa6 from '../../../assets/images/Data/data6.png'
import * as S from './style'
import Home3 from '../Home3'

const data = [
    {
        id:1,
        picture:<img src ={sf}/>,
        percent:'20%',
        gage:<div className='gage'><div className='gage2'/></div>,
        name:'Flowers,1964',
        peple:<img src ={c}/>,
        name2:'앤디워홀',
    },
    {
        id:2,
        picture:<img  className='s' src ={s}/>,
        percent:<div className='id2'>50%</div>,
        gage:<div className='gage5' ><div className='gage2'/></div>,
        name:'Untitled (Skull), 1981',
        peple:<img src ={x}/>,
        name2:'바스키아',
    },
    {
        id:3,
        picture:<img className='a' src ={a}/>,
        percent:<div className='id3'>20%</div>,
        gage:<div className='gage6'><div className='gage3'/></div>,
        name:'From Point',
        peple:<img src ={c}/>,
        name2:'앤디워홀',
    },
    {
        id:4,
        picture:<img src ={sf}/>,
        percent:'100%',
        gage:<div className='gage'><div className='gage4'/></div>,
        name:'Untitled (crown) 1988',
        peple:<img src ={x}/>,
        name2:'바스키아',
    },
]
 const data2 = [
    {
        id:1,
        picture:<img src={dataa} />,
        name:'From Line',
        peple:<img src ={bb}/>,
        name2:'이우환',
        peple2:<img src ={bbb}/>,
        name3:'Anna01'
    },
    {
        id:2,
        picture:<img src={dataa2}/>,
        name:'Let`s Talk About Glory',
        peple:<img src ={bbbb}/>,
        name2:'요시토모 나라',
        peple2:<img src ={bbb}/>,
        name3:'Anna01'
    },
    {
        id:3,
        picture:<img src={dataa3}/>,
        name:'Panel of Experts',
        peple:<img src ={x}/>,
        name2:'바스키아',
        peple2:<img src ={bbb}/>,
        name3:'Anna01'
    },
    {
        id:4,
        picture:<img src={dataa4}/>,
        name:'Ishtar, 1983',
        peple:<img src ={x}/>,
        name2:'바스키아',
        peple2:<img src ={bbb}/>,
        name3:'Anna01'
    },
 ]
 const data3 = [
    {
        id:1,
        picture:<img src={dataa5} />,
        name:'Untitled(Crown),1982',
        pepele:<img src ={x}/>,
        name2:'바스키아',
        peple2:<img src ={bbb}/>,
        name3:'Anna01'
    },
    {
        id:2,
        picture:<img src={dataa3} />,
        name:'Ishtar, 1983',
        pepele:<img src ={x}/>,
        name2:'바스키아',
        peple2:<img src ={bbb}/>,
        name3:'Anna01'
    },
    {
        id:3,
        picture:<img src={dataa} />,
        name:'From Line',
        pepele:<img src ={bb}/>,
        name2:'바스키아',
        peple2:<img src ={bbb}/>,
        name3:'Anna01'
    },
    {
        id:4,
        picture:<img src={dataa6} />,
        name:'Mechanic',
        pepele:<img src ={x}/>,
        name2:'줄리안 오피',
        peple2:<img src ={bbb}/>,
        name3:'Anna01'
    },
 ]
function Index() {
  return (
    <S.Container>
        <div className='page'>
            <div className='c'>
                <div className='titlea'>Latest Art Group Purchase</div>
                <link className='see' placeholder='See All'/>
                <div className='z'>
                {data.map((d)=>(
                    <div className='purchase' key={d.id}>
                        <div className='item-box'>
                            <div className='picture'>{d.picture}
                            <div className='percent'>{d.percent}</div>
                            <div>{d.gage}</div>
                            </div>
                            <div className='name'>{d.name}</div>
                            <div className='box'>
                            <div className='peple'>{d.peple}</div>
                            <div className='name2'>{d.name2}</div>
                            </div>
                            <div className='boxs'>
                                <div className='n'>
                                <div className='price'>Price</div>
                                <div className='sale'>Art  Group Sale</div>
                                </div>
                                <div className='et'>0.02 ETH</div>
                                </div>
                        </div>
                    </div>
                ))} 
                </div>
             
            </div>
            <div className='c'>
            <div className='titlea2'>Art Purchase</div>
                <link className='see' placeholder='See All'/>
                <div className='z'>
                {data2.map((d)=>(
                    <div className='purchase' key={d.id}>
                        <div className='item-box'>
                            <div className='picture1'>{d.picture}
                            </div>
                            <div className='name'>{d.name}</div>
                            <div className='box'>
                            <div className='peple'>{d.peple}</div>
                            <div className='name2'>{d.name2}</div>
                            <div className='peple'>{d.peple2}</div>
                            <div className='name2'>{d.name3}</div>
                            </div>
                            <div className='boxs'>
                                <div className='n'>
                                <div className='price'>Price</div>
                                <div className='sale'>Art  Group Sale</div>
                                </div>
                                <div className='et'>0.02 ETH</div>
                                </div>
                        </div>
                    </div>
                ))} 
                 <div className='aa'>이우환 , From Line</div>
                </div>
                
                <div className='z'>
                {data3.map((d)=>(
                    <div className='purchase' key={d.id}>
                        <div className='item-box'>
                            <div className='picture3'>{d.picture}
                            </div>
                            <div className='name'>{d.name}</div>
                            <div className='box'>
                            <div className='peple'>{d.pepele}</div>
                            <div className='name2'>{d.name2}</div>
                            <div className='peple'>{d.peple2}</div>
                            <div className='name2'>{d.name3}</div>
                            </div>
                            <div className='boxs'>
                                <div className='n'>
                                <div className='price'>Price</div>
                                <div className='sale'>Art  Group Sale</div>
                                </div>
                                <div className='et'>0.02 ETH</div>
                                </div>
                        </div>
                    </div>
                ))} 
                </div>
            </div>
            <Home3/>
        </div>
    </S.Container>
  )
}

export default Index