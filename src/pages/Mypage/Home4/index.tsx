import React from 'react'
import qwe from './qwe.png'
import zzz from './check-circle.png'
import * as S from './style'

const zx = [
    {
        id:1,
      
        title:'Connect Your Wallet',
        box:'Connect your wallet of choice to AnG Global by clicking the connect wallet icon in the top right corner.'
    },
    {
        id:2,
       
        title:'List Them For Sale',
        box:'Sell your NFTs via fixed price listings. The perpetual royalties belongs to the original artists'
    },
]
const zx2 = [
    {
        id:1,
        
        title:'Buy Art Group NFT',
        box:'Pay with tokens to participate in Art Group Purchase and receive NFT ownership of the artwork.'
    },
    {
        id:2,
     
        title:'Explore AnG Global',
        box:'AnG Global allows you to own the works of famous artists in NFT form for only a small amount.'
    },
]
function Index() {
  return (
    <S.Container>
        <div className="container">
            <img src={qwe} className='a12'/>
            <div className="start">
                <div className="global">
                <div className='start-name'>Getting Started with AnG Global</div>
                <div className='sub-name'>Super rare digital art work from famous artists.</div>
               <div className='butt-box'>
                <button className="white-but"> Connect Wallet </button>
                <button className="green-but">Buy Art Group</button>
               </div>
                </div>
                <div className='global2'>
                  <div className='zxc'>
                    {zx.map((x)=>(
                        <div className='contnent' key={x.id}>
                   <img src={zzz} className='po' />
                        <div className='tii'>{x.title}</div>
                        <div className='boxxx'>{x.box}</div>
                        </div>
                    ))}
                  </div>
                  <div className='zxc'>
                  {zx2.map((x)=>(
                        <div className='contnent' key={x.id}>
                        <img src={zzz} className='po' />
                        <div className='tii'>{x.title}</div>
                        <div className='boxxx'>{x.box}</div>
                        </div>
                    ))}
                  </div>
                </div>
            </div>
        </div>
    </S.Container>
  )
}

export default Index