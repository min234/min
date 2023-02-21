import Company01 from 'components/Company01'
import Vertify from 'components/Vertify'
import React, { useState } from 'react'
import * as S from './style'


function Index() {
    
    const [see,setSee] = useState('')
    const [e,setE] = useState('')
      const ee = () =>{
          setSee(e)
      }

      const close = () => {
        setSee('')
      }
    const [check,setCheck] = useState(false)
    
    
   
  return (
   <S.Container>
    <div className='bg4'>
        <div className='big-title'>Member information modification</div>
        <div className='small-title'>*You must authenticate/register your email to
         participate in Group Purchase and NFT purchase sales.</div>
         <div className='line2'/>
         <div className='button-boxs'>
            <div className='w'>
                <div className='s-title'>Wallet Address</div>
                <button className='ox'>0x000000000000000000000</button>
            </div>
            <div className='u'>
                <div className='s-title2'>Username</div>
                <input type='text' className='enter'placeholder='Enter Username'/>
            </div>

            </div>
            <div className='e1'>
            <div className='e'>
                <div className='s-title3'>Email Address</div>
                <input type='text2' className='email' placeholder='Enter Email' 
                value={e}
                onChange={e => setE(e.target.value)}
             />
                <button className='verify' onClick = {ee}>Verify</button>
                {see === 'ektmd7676' ? <Vertify a={check}  setCh={setCheck} on1={close}  /> : "" }
            </div>
           <div className={`ckk ${ check === true ? 'active':"" }`} >
           <div className='s-title3'>Email Address</div>
           <input type='text2' className='email' placeholder='Enter Email'/>
           <button className='verify2'>Send another code</button>
           </div>          
            </div>
            <div className='in'>
            <input type="checkbox" id='cb1' className='to'/>
            <label className='too' htmlFor="cb1 ">Consent to receive information mail</label>
            </div>
            <div className='in'>
            <input type='checkbox' className='to' />
            <div className='too2'>Agree to provide personal information to a third party</div>
            <button className={`sxw ${ check === true ? 'active': ''}`} >Save</button>
            </div>
          
        <Company01/>
    </div>
   </S.Container>
  )
}

export default Index