import React from 'react'
import * as S from './style'

function Index({a,on1,setModalOpen }:any) {
    
  const closeModal = () => {
    setModalOpen(false);
};
  return (
    <S.Container>
        <div className='modal-bg'>
            <div className='mconnect'>
                <div className='modal-content'>
                <button className='ss' onClick={closeModal}>X</button>
                    <div className='modal-title'>지갑주소</div>
                    <div className='modal-button'>0xKl36799820789000000000</div>
                    <div className='modal-price'>잔액</div>
                    <div className='modal-coin'>
                        <img/>
                        <div className="price">1,000,000</div>
                        <div className='btc'>BTC</div>
                    </div>
                    <div className='modal-coin'>
                    <img/>
                        <div className="price">1,000,000</div>
                        <div className='btc'>ETC</div>
                    </div>
                    <div className='fi'>
                        <button className="dis">Disconnect</button>
                        <button className="dis2">Change Wallet</button>
                        <div className='zzz'>Your wallet has been successfully disconnected</div>
                    </div>
                  
                </div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index