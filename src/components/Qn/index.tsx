import Company01 from 'components/Company01'
import Pagination from 'components/Pagination'
import React from 'react'
import * as S from './style'

function Index() {
  return (
   <S.Container>
    <div className="container">
            <div className="cont">
                <div className="title">Transaction History</div>
                <div className='box'>
                <div className="id-box">
                <div className='gun'>No</div>
                    <div className="id">Title</div>
                    <div className="id1">Answer</div>
                    <div className="id2">Registration Date</div>
                </div>
                           <div className='dsa'>
                            <div className ='q'>
                                <div className='numbe'>1</div>
                                <div className='line1'></div>
                                <div className='numbe1'>Answered</div>
                                <div className='line2'></div>
                                <div className='numbe2'>Question 3</div>
                                <div className='line3'></div>
                                <div className='numbe4'>2022-01-18</div>
                            </div>
                            <div className ='q2'>
                                <div className='numbe'>2</div>
                                <div className='numbe1'>Question 2</div>
                                <div className='numbe2'>Art Sale</div>
                                <div className='numbe4'>2022-01-18</div>
                            </div>
                            <div className ='q'>
                                <div className='numbe'>3</div>
                                <div className='numbe1'>Question 3</div>
                                <div className='numbe2'>Art Sale</div>
                                <div className='numbe4'>2022-01-18</div>
                            </div>
                            <div className ='q2'>
                                <div className='numbe'>4</div>
                                <div className='numbe1'>Question 4</div>
                                <div className='numbe2'>Art Sale</div>
                                <div className='numbe4'>2022-01-18</div>
                            </div>
                            </div> 
                            <Pagination/>
                            <button className='us'>Contact Us</button>
                             <Company01/>
                     </div>
                </div>
            </div>
   </S.Container>
  )
}

export default Index