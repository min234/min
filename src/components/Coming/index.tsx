import Company01 from 'components/Company01'
import React from 'react'
import ds from './ds.png'
import * as S from './style'

function Index({de} : any) {
  return (
    <S.Container>
        <div className='container'>
            <img src={ds} className='bggg'/>
            <Company01/>
        </div>
    </S.Container>
  )
}

export default Index