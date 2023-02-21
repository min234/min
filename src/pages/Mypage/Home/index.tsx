import Company01 from 'components/Company01'
import React from 'react'
import home from '../../../assets/images/Home/home.png'
import home2 from '../../../assets/images/Home/Home2.png'
import g from '../../../assets/images/Home/g.png'
import * as S from './style'
import Home2 from '../Home2'
import Home3 from '../Home3'

function Index() {
  return (
    <S.Container>
       
            <div className='content'>
                <div className='home-bg'>
                    <img src={home} alt="home" className='hom'/>
                    <div className='b'>
                        <div className='discover'>Discover rare digital art and collect NFTs</div>
                        <div className='the'>The first art group purchase platform for artworks in Korea that allows you to own the works of famous artists in NFT form for only a small amount.
                        <br/>
                        <br/>
                    Digital marketplace for cryto collectibles and non-fungible tokens (nfts). Buy, sell, and discover exclusive digital assets.</div>
                    <div className='z'>
                        <div>
                    <div className="K">27K+</div>
                    <div className='Art'>Artworks</div>
                    </div>
                    <div>
                    <div className="K2">10K+</div>
                    <div className='Art'>Artists</div>
                    </div>
                    </div>
                    </div>
                    <img src={home2} alt="home2" className='hom2'/>
                    <div className='b2'>
                        <div className='on'>On-going Art Group Purchase</div>
                        <img src={g} alt='picture' className='picture'/>
                        <div className='pumpkin'>Yayoi Kusama, Pumpkin</div>
                        <div className='rate-name'>Art Group purchase rate</div>
                        <div className='rate'><div className='rate2'/></div>
                        <div className='cmp'>
                            <div className='target'>
                                <div className='nam'>Art Group target amount</div>
                                <div className='nn'>100 BTC</div>
                            </div>
                            <div className='l'></div>
                            <div className='target2'>
                                <div className='nam2'>Art Group achieved amount</div>
                                <div className='nn2'>20 BTC</div>
                            </div>
                           
                        </div>
                        <div className='but-box'>
                                <button className='group'>Buy Art Group</button>
                                <button className='view'>View Artwork</button>
                            </div>
                    </div>
                </div>
                <Home2/>
        
            </div>
            <Company01/>
       
    </S.Container>
  )
}

export default Index