import React, { useEffect, useState } from 'react'
import Company01 from 'components/Company01';
import Data from 'components/Data';
import Pagination from 'components/Pagination';
import Search from 'components/Search';
import data1 from '../../../assets/images/Data/data.png'
import data2 from '../../../assets/images/Data/data2.png'
import data3 from '../../../assets/images/Data/data3.png'
import data4 from '../../../assets/images/Data/data4.png'


import * as S from './style';



const data = [
   
  { 
      id:1,
      src:<img src ={data1}/>,
      name:'From Line',
      target:'Target amount',
      amount:'Achieved amount',
      hun:'100BTC',
      ten:'20BTC',
  },
  {
      id:2,
      src:<img src ={data2}/>
      ,
      name:'Let `s Talk About Glory',
      target:'Target amount',
      amount:'Achieved amount',
      hun:'100BTC',
      ten:'20BTC',
  },
  {
      id:3,
      src:<img src ={data3}/>
      ,
      name:'Panel of Experts',
      target:'Target amount',
      amount:'Achieved amount',
      hun:'100BTC',
      ten:'20BTC',
  },
  {
      id:4,
      src:<img src ={data4}/>
      ,
      name:'Ishtar, 1983',
      target:'Target amount',
      amount:'Achieved amount',
      hun:'100BTC',
      ten:'20BTC',
  },
]


function Index() {

  const [cli,setCli] = useState(0);
  const [datas,setData] = useState(data);


  const co = () => {
    setCli(1);
  }
  const co2 = () => {
    setCli(2);
  }
  const co3 = () => {
    setCli(3);
  }


  function getSearchText(e:any) {
    console.log("getSearchText Puchase page",e );
    const filterData = data.filter((data:any)=> data.name === e); 
    /** item === {
      id:4,
      src:<img src ={data4}/>
      ,
      name:'Ishtar, 1983',
      target:'Target amount',
      amount:'Achieved amount',
      hun:'100BTC',
      ten:'20BTC',
  }, **/ 
    setData(filterData);
  }

 

  return (
    <S.Container>
        <div className='container'>
            <div className='content'>
    <button type = 'button' className={`co ${cli === 1 ? "active" : ""}`} onClick={co}>Group purchase scheduled to proceed
    <div className={`line2 ${cli === 1 ? "active" : ""}`}></div>
    </button>
    <button type = 'button' className={`co1 ${cli === 2 ? "active" : ""}`}onClick={co2}>Group Purchase in Progress
    <div className={`line3 ${cli === 2 ? "active" : ""}`}></div>
    </button>
    <button type = 'button' className={`co2 ${cli === 3 ? "active" : ""}`} onClick={co3}>Last Group purchase
    <div className={`line4 ${cli === 3 ? "active" : ""}`}></div>
    </button>
    <div className="line"/>
    <div className="had">
        <div className='titl'>Group Purchase in Progress</div>
         <div className='search'><Search onSearch={getSearchText}/></div> 
            </div>
            
            </div>
            <div className = {`data ${cli === 2 ? "active " : ""}`}><Data data={datas}/></div>
            <div className = {`data ${cli === 3 ? "active " : ""}`}><Data data={datas}/></div>
            <Pagination/>
            <Company01 />
        </div>
     
    </S.Container>
  )
}

export default Index