import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import * as S from './style'

function Index() {
  const [id,setId] = useState('');
  const [password,setPassword] = useState('');

    const rId = "e";
    const rPw = "12";
    const history = useHistory();
    const goToMain = () => {
    history.push('/')
    };
  return (
    <S.Container>
        <div className="login-page">
            <div className="id">id</div>
            <input type="text"    onChange={e => {
    setId(e.target.value);
	}} placeholder='id' className="id-page"/>
            <div className='password'>password</div>
            <input type="password"   onChange={e => {
     setPassword(e.target.value);
	}} placeholder='password'/>
            <button type = 'submit'
        
            className = 'btn' onClick={e => {
              if( rId  === id){
              if( rPw === password ){
                e.stopPropagation();
                goToMain();
              }
              } else {
                alert('시이발')
              }
            }}>button</button>
        </div>
    </S.Container>
  )
}

export default Index