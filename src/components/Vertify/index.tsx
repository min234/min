import React from 'react'
import * as S from './style'

function Index({a,on1,setCh} : any) {
  const closeModal = () => {
    on1('false');
};

  const sll = () =>{
    setCh(true)
  }

  return (
    <S.Container>
        <div className={`mo ${a === true ? "active" : ""}`}>
            <div className='mo-white'>
              <div className='zxcv'>
                <div className='lw'>
              <div className='mo-title'>Notice</div>
              <button className='ss' onClick={closeModal}>X</button>
              </div>
              <div className='mo-line'></div>
              <div className='mo-sub'>The authentication code has been sent to this email</div>
              <button className='mo-button' onClick={sll}>Check</button>
              </div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index