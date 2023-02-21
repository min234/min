import React from 'react'
import s from '../../../assets/images/Data/s.png'
import x from '../../../assets/images/Data/x.png'
import t from './imge/t.png'
import t2 from './imge/t2.png'
import t3 from './imge/t3.png'
import c from '../../../assets/images/Data/c.png'
import bbbb from '../../../assets/images/Data/bbbb.png'
import x2 from './imge/x2.png'
import n from './imge/n.png'
import m from './imge/m.png'
import a from './imge/a.png'
import s1 from './imge/s.png'
import d from './imge/d.png'
import f from './imge/f.png'
import * as S from './style'
import { ArrowRightOutlined } from '@ant-design/icons'
import Home4 from '../Home4'

const data = [ 
    {
        id:1,
        p:<img src={t}/>,
        t:'Flowers, 1964',
        p2:<img src={c}/>,
        n:'앤디워홀',
    },
    {
        id:2,
        p:<img src={t2}/>,
        t:'From Point',
        p2:<img src={c}/>,
        n:'앤디워홀',
    },
    {
        id:3,
        p:<img src={t3}/>,
        t:'Let`s Talk About Gl...',
        p2:<img src={bbbb}/>,
        n:'요시토모 나라',
    },
]

 const Top = [
    {
        id: '1',
        picture:<img src={x2} />,
        title:"바스키아",
        link: 'Follow',
    },
    {
        id: '2',
        picture:<img src={n} />,
        title:"Stanley W.",
        link: 'Follow',
    },
    {
        id: '3',
        picture:<img src={m} />,
        title:"Kim Whaki",
        link: 'Follow',
    },
    {
        id: '4',
        picture:<img src={a} />,
        title:"Kate Holmes",
        link: 'Follow',
    },
  

 ]
 const Top2 = [
    {
        id: '5',
        picture:<img src={s1} />,
        title:"Kate Holmes",
        link: 'Follow',
    },
    {
        id: '6',
        picture:<img src={s1} />,
        title:"바스키아",
        link: 'Follow',
    },
    {
        id: '7',
        picture:<img src={d} />,
        title:"바스키아",
        link: 'Follow',
    },
    {
        id: '8',
        picture:<img src={f} />,
        title:"바스키아",
        link: 'Follow',
    },
]
function Index() {
  return (
   <S.Container>
    <div className='container'>
        <div className='c'>
            <div className='titleaa'>Best Selling Over
            <div className='titleaa2'>Last 7 Days</div>
             </div>
             <div className='item'>
                <div>
                <img src={s} className='bgga'/>
                <div className='name'>Untitled (Skull), 1981</div>
                <div className='peplex'>
                    <img src ={x}/>
                    <div className='name8'>바스키아</div>
                    </div>
                </div>  
               
                <div className='xx'>
                {data.map((d) => (
                    <div className='small' key={d.id}>
                        <div className='gg'>{d.p}</div>
                        <div className='gg2'>
                            <div className='t1'>{d.t}</div>
                            <div className='peplex'>
                            <div className='p2'>{d.p2}</div>
                            <div className='n'>{d.n}</div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
                <div className='xxx'>
               
                <div>
                <div className='top'>Top Artist</div>
                <div className='k'>
                    <div className='kk'>
                    {Top.map((d) => (
                        <div className='artist' key={d.id}>
                            <div className='바스키아'>
                            <div className='id'>{d.id}</div>
                            <div className='poo'>{d.picture}</div>
                            <div className='h'>
                                <div className='i'>{d.title}</div>
                                <div className='f'>{d.link}
                                <div className='l2'><ArrowRightOutlined /></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                   </div>
                       <div className='kkk'>
                      {Top2.map((d) => (
                        <div className='artist' key={d.id}>
                            <div className='바스키아'>
                            <div className='id'>{d.id}</div>
                            <div className='poo'>{d.picture}</div>
                            <div className='h'>
                                <div className='i'>{d.title}</div>
                                <div className='f'>{d.link}
                                <div className='l2'><ArrowRightOutlined /></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
                    </div>
                </div>
             </div>
        </div>
        <Home4/>
    </div>
   </S.Container>
  )
}

export default Index