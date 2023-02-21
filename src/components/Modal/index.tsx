import React from 'react'
import f2 from '../../assets/images/f2.png'
import * as S from './style'

function Index({a,setModalOpen}:any) {


  const closeModal = () => {
    setModalOpen(false);
};

  return(
   <S.Container>
    <div className="container">
        <div className='modal'>
          <div className='bgg'>
            <div className='t'>Complete Purchase</div>
            <button className='ss' onClick={closeModal}>X</button>
            <div className='l'></div>
            <div className='t2'>
              <img src={f2} alt="t2" className="f2"/>
            </div>
            <div className='n'>AnG #001</div>
            <button className='b'>Check My NFT</button>
          </div>
        </div>
    </div>
   </S.Container>
  )
}

export default Index