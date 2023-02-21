import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';
import All from 'components/All';
import Company01 from 'components/Company01';
import Pagination from 'components/Pagination';
import React, { useState } from 'react'
import * as S from './style'
const data = [ 
    {
        id:1,
        Date:'2022-01-18 12:31',
        Code:'바실리 칸딘스키 The singer 아트 프린트',
        quantity:'1',
        Method:'Group Purchase',
        From:'0z395D52f s438973...',
        To:'0z395D52f s438973...',
        Volumn:'ETH 0.0041 $6.29 USD',
        State:'Group Purchase',
        Detail:'0x3959D5 2f94A…'
    },
    
    {
        id:2,
        Date:'2022-01-18 12:31',
        Code:'바실리 칸딘스키 The singer 아트 프린트',
        quantity:'2',
        Method:'Art Market',
        From:'0z395D52f s438973...',
        To:'0z395D52f s438973...',
        Volumn:'ETH 0.0041 $6.29 USD',
        State:'Group Purchase',
        Detail:'0x3959D5 2f94A…'
    },
    {
        id:3,
        Date:'2022-01-18 12:31',
        Code:'바실리 칸딘스키 The singer아트 프린트',
        quantity:'3',
        Method:'Group Purchase',
        From:'0z395D52f s438973...',
        To:'0z395D52f s438973...',
        Volumn:'ETH 0.0041 $6.29 USD',
        State:'Group Purchase',
        Detail:'0x3959D5 2f94A…'
    },
    
    {
        id:2,
        Date:'2022-01-18 12:31',
        Code:'바실리 칸딘스키 The singer 아트 프린트',
        quantity:'4',
        Method:'Art Market',
        From:'0z395D52f s438973...',
        To:'0z395D52f s438973...',
        Volumn:'ETH 0.0041 $6.29 USD',
        State:'Group Purchase',
        Detail:'0x3959D5 2f94A…'
    },
]




const qwer = [
    {
        id:1,
        title:<div className='O' >Owned NFT</div>,
        number:'8'
    },
    {
        id:2,
        title:<div className='T' >Total value</div>,
        number:'0'
    },
    {
        id:3,
        title:<div className='N' >Number of Group Purchase Participation</div>,
        number:'0'
    },
    {
        id:4,
        title:<div className='P' >Total Price of Group Purchase NFT</div>,
        number:<div className='one' >1.000.000</div>
    },
    {
        id:5,
        title:<div className='M' >Number of NFT Purchase in the Market</div>,
        number:'0'
    },
    {
        id:6,
        title:<div className='S' >Number of NFT sell in the Market</div>,
        number:'0'
    },
  ]


function Index() {
    const [s1,setS1] = useState(0);

const chenge = () =>{
    setS1(1)
}
const chenge2 = () =>{
    setS1(2)
}
const chenge3 = () =>{
    setS1(3)
}
const [selectedDropValue, setSelectedDropValue] = useState('');


const [search, setSearch] = useState("");
const onChange = (e : any) => {
        setSearch(e.target.value)
    }
  
    const filterTitle =data.filter((p) => {
        return p.Code.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
    })
  
  
  return (
   <S.Container>
    <div className='container'>
    <div className='History'>Transaction History</div>
        <div className='content'>
        <div className='my-nft' >
                {qwer.map((d) => (
                    <><div className='hoho' key={d.id}>
                        <div className='sub-title'>{d.title}</div>
                        <div className='my-number'>{d.number}</div>
                    </div>
                </>
                ))}
                <div className='my-line'></div>
                <div className='my-line2'></div>
                <div className='my-line3'></div>
                <div className='my-line4'></div>
                <div className='my-line5'></div>
                </div>  
        </div>
        <div className='all'>
            <div className={`all-a${s1 === 1 ? "active":""} `} onClick={chenge}>All</div>  
            <div className={`all-s${s1 === 2 ? "active":""} `} onClick={chenge2}>Group Purchase History</div>    
            <div className={`all-d${s1 === 3 ? "active":""} `} onClick={chenge3}>Market Purchase History</div> 
            <div className='quantity'>Quantity:</div>
                                      <select className='a' onChange={(e) => {
                                          const sele = e.target.value;
                                          setSelectedDropValue(sele);
                                      } }>
                                          {data.map((e) => {
                                              return <option key={e.id}>{e.id}</option>;
                                          })}
                                      </select>
                                      <div className="header" >
            <input type="text" className="iptSearch" id="keyword" value={search} onChange={onChange} placeholder='Search NFT' />
            <button type="button" className="search" >
            <SearchOutlined />
            </button>
           
        </div>
            </div>
            <div className='allline'>
            <div className={`all-line1${s1 === 1 ? "active":""}`} />
            <div className={`all-line2${s1 === 2 ? "active":""}`} />
            <div className={`all-line3${s1 === 3 ? "active":""}`} />
            </div>
            {s1 === 1 ? <All da={filterTitle}/> : ""}
    <Pagination/>
    <Company01/>
    </div>
   </S.Container>
  )
}

export default Index