import React, { useState } from 'react'
import Sf from '../../assets/images/f2.png'
import * as S from './style'

function Index({co }:any) {
    const data = [
        {
            id:'ETH'
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
    
    const [selectedDropValue, setSelectedDropValue] = useState('')
    const [next,setNext] = useState(false);
   
    const nexi = () =>{
        setNext(true)
    }

    const closeModal = () => {
        co(false);
    }
  return (
    <S.Container>
        <div className='modal2'>
            <div className='modal-white1'>
            <button className='ss' onClick={closeModal}>X</button>
                <div className='mo-title'>AnG #001</div>
                <div className='mo-line'></div>
                <div className='mo-content'>
                    <div className='andi'>
                        <img src = {Sf} className='pi'/>
                        <div className='ti'>앤디워홀</div>
                        <div className='Flo'>Flowers,1964</div>
                    </div>
                    <div className={`another ${next === true ? "active" : ""}`} >
                        <div className='D'>Description</div>
                        <button type='button' className={`P2 ${next === true ? "active" : ""}`} onClick={nexi}>Product Detail</button>
                        <div className='D'>Created Date</div>
                        <div className='Z'>0000.00.00</div>
                        <div className='D'>NFT Detail</div>
                        <div className='Z'>Contract address</div>
                        <div className='Token'>
                            <div className='ID'>Token ID</div>
                            <div className='Standard'>Token Standard</div>
                            <div className='Block'>BlockChain</div>
                        </div>
                    </div>
                    <div className={`another2 ${next === true ? "active" : ""}`} >
                        <div className='D'>Item for Sale</div>
                        <div className='black'>
                            <div className='ds'>
                                      <select className='a' onChange={(e) => {
                                          const sele = e.target.value;
                                          setSelectedDropValue(sele);
                                      } }>
                                          {data.map(el => {
                                              return <option key={el.id}>{el.id}</option>;
                                          })}
                                      </select>
                                    
                            <input className='hou'/>
                            </div>
                            </div>
                            <div className='sub-title-D'>NFTs registered for sale will be removed from My NFTs, you can check it by sorting in the NFT Marketplace.</div>
                        <div className='sub-b'>
                            <button className='com'>Confirm</button>
                            <button className='can'>Cancel</button>
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </div>
    </S.Container>
  )
}

export default Index