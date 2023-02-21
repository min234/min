import SearchOutlined from '@ant-design/icons/lib/icons/SearchOutlined';
import Allnft from 'components/Allnft';
import data1 from '../../assets/images/Data/data.png'
import data2 from '../../assets/images/Data/data2.png'
import data3 from '../../assets/images/Data/data3.png'
import data4 from '../../assets/images/Data/data4.png'
import React, { useState } from 'react'

import * as S from './style'
import { any } from 'prop-types';
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
const [search, setSearch] = useState("");
const onChange = (e : any) => {
        setSearch(e.target.value)
    }
  
    const filterTitle =data.filter((p) => {
        return p.name.replace(" ","").toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(" ",""))
    })
 
   
 
  return (
    <S.Container>
        <div className='myNft'>
            <div className='my-title'>My NFTs</div>
            <div className='my-content'>
                <div className='my-nft' >
                {qwer.map((d,index) => (
                    <><div className='hoho' key={index}>
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
            <div className={`all-nft${s1 === 1 ? "active":""} `} onClick={chenge}>All NFT</div>  
        
            <div className={`all-p${s1 === 2 ? "active":""} `} onClick={chenge2}>Group Purchase - NFT</div>    
            <div className={`all-m${s1 === 3 ? "active":""} `} onClick={chenge3}>Market Purchase - NFT</div> 
           
                <input type="text" className="iptSearch" id="keyword" value={search} onChange={onChange}  placeholder='Search NFT' />
                <button type="button" className="search"  >
                    <SearchOutlined />
                </button>
                 
          
            </div>
            <div className='allline'>
            <div className={`all-line${s1 === 1 ? "active":""}`} />
            <div className={`all-line2${s1 === 2 ? "active":""}`} />
            <div className={`all-line3${s1 === 3 ? "active":""}`} />
          
            </div>
           {s1 === 1 ? <Allnft d ={filterTitle} />:""} 
        </div>
    </S.Container>
  )
}

export default Index