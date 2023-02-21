import { DeliveredProcedureOutlined } from '@ant-design/icons'
import React from 'react'
import qqq from '../../assets/images/qqq.png'
import *  as S from './style'

function index() {
  return (
    <S.Container>
      
                <div className='title1'>User Guide</div>
                <div className='bg-box'>
                  <div className='t'>Co-ownership Artworks Process</div>
                  <div className='t2'>공동구매 진행절차</div>
                  <div className='bigline'/>
                  <img src={qqq} alt= 'qqq' className='qqq' />
                  <div className='step-box'>
                    <div className='step1'>
                      <div className='name'>STEP 1</div>
                      <div className='product'>공동구매 작품 및 일정공개</div>
                      <div className='line3'/>
                      <div className='component'>홈페이지 이메일 인스타그램을
통해 공동구매 작품 및 일정공개</div>
                    </div>
                    <div className="step2">
                      <div className="name">STEP 2</div>
                      <div className='product2'>공동구매 시작</div>
                      <div className='line3'/>
                      <div className='component2'>공동구매 당일 오전 00시오픈</div>
                      <div className='hidden'>*사전예약 또는 일부 공동구매 예외</div>
                    </div>
                    <div className= "step3">
                      <div className="name">STEP 3</div>
                      <div className="product3">공동구매 종료 및 소유권 확정</div>
                      <div className='line3'/>
                      <div className='component3'>공동구매 소유권 구매 수량에 따라NFT발행 후 개인지갑으로소유권 NFT 발송</div>
                    </div>
                    <div className= "step4">
                      <div className="name">STEP 4</div>
                      <div className="product4">작품확인서 발송</div>
                      <div className="line3"/>
                      <div className="component4">공동구매 수량 소진 또는
공동구매일로부터 00일 이후 종료</div>
                    </div>
                    <div className='step5'>
                      <div className="name">STEP 5</div>
                      <div className='product5'>위탁 매각</div>
                      <div className='line3'/>
                      <div className='component5'>작품 매각 시 소유권자에게 알림
소유NFT 회사에 반환 확인 후 
대금(USDT)  배분</div>
                    </div>
                  </div>
                </div>
        
    </S.Container>
  )
}

export default index