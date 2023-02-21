import React from 'react'
import * as S from './style'
import  Pagination  from '../../components/Pagination';
function index() {
    
  return (
    <S.Container>
        <div className="container">
            <div className="cont">
                <div className="title">Notice</div>
                <div className='gun'>총4건</div>
                <div className='box'>
                <div className="id-box">
                    <div className="id">No</div>
                    <div className="id1">Category</div>
                    <div className="id2">Title</div>
                    <div className="id3">Registration date</div>
                </div>
                           <div className='dsa'>
                            <div className ='q'>
                                <div className='number'>4</div>
                                <div className='line1'></div>
                                <div className='number1'>Art Group Purchase</div>
                                <div className='line2'></div>
                                <div className='number2'>Art Sale</div>
                                <div className='line3'></div>
                                <div className='number4'>2022-01-18</div>
                            </div>
                            <div className ='q1'>
                                <div className='number'>3</div>
                                <div className='number1'>Art Group Purchase</div>
                                <div className='number2'>Art Sale</div>
                                <div className='number4'>2022-01-18</div>
                            </div>
                            <div className ='q2'>
                                <div className='number'>2</div>
                                <div className='number1'>Art Group Purchase</div>
                                <div className='number2'>Art Sale</div>
                                <div className='number4'>2022-01-18</div>
                            </div>
                            <div className ='q3'>
                                <div className='number'>1</div>
                                <div className='number1'>Art Group Purchase</div>
                                <div className='number2'>Art Sale</div>
                                <div className='number4'>2022-01-18</div>
                            </div>
                            </div> 
                            <Pagination/>
                             
                     </div>
                </div>
            </div>
      
    </S.Container>
  )
}

export default index