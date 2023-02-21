import Company01 from 'components/Company01';
import Modal from 'components/Modal';
import React, { useState } from 'react'
import f from '../../../assets/images/f.png'
import m from '../../../assets/images/MaskGroup4.png'
import * as S from './style'


function Index() {
    const data = [
        {
            id:'1'
        }
        ,
        {
            id:'2',
        }, 
        {
            id:'3',
        },{
            id:'4'
        }
    ]
    
    const [selectedDropValue, setSelectedDropValue] = useState('');
    
    const [c,setC] = useState(true)
     
    const [close2,setClose2] = useState(false);
    const [modalOpen,setModalOpen] = useState(false);
   
  
    const showModal = () => {
      setModalOpen(true);
    }
   
  return (
    <S.Container>
          <div className='container'>
              <div className='content'>
                  <div className='content-bg'>
                      <div className='Ang'>
                          <div className='product-name'>ANG#001</div>
                          <div className='line'></div>
                          <div className='p'>
                              <img className='pic' src={f} />
                              <div className='x'>
                                  <div className='product'>앤디워홀, Flowers, 1964</div>
                                  <div className='second'>20%</div>
                                  <div className='percent'><div className='line2' /></div>
                                  <div className='pur'>Purchase amount</div>
                                  <div className='et'>3.0 ETH</div>
                                  <div className='price'>Purchase Price</div>
                                  <div className='et'>0.1 ETH</div>
                                  <div className='aa'>
                                      <div className='quantity'>Quantity:</div>
                                      <select className='a' onChange={(e) => {
                                          const sele = e.target.value;
                                          setSelectedDropValue(sele);
                                      } }>
                                          {data.map(el => {
                                              return <option key={el.id}>{el.id}</option>;
                                          })}
                                      </select>
                                  </div>
                                  <button className='request' onClick={ showModal}>Purchase request</button>
                                  {modalOpen && <Modal a={close2} on1={setClose2}  setModalOpen = {setModalOpen}/>}
                          </div>
                      </div>
                  </div>
                  <S.Container2>
                      <div className='title'>

                          <div className={`explan ${c === false ? "active" : ""}`} onClick={() => setC(true)}>설명</div>
                          <div className={`explan ${c === true ? "active" : ""}`} onClick={() => setC(false)}>구매 혜택</div>
                      </div>
                      <div className='line' />
                      <img src={m} alt='cl' className='cl' />
                  </S.Container2>
              </div>
          </div>

      </div><Company01 />
    </S.Container>
  )
}

export default Index