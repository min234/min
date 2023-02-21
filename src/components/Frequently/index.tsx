import { DownOutlined } from '@ant-design/icons';
import React, { useState } from 'react'
import  Pagination  from '../../components/Pagination';
import * as S from './style'

function Index() {
    const [hidden,setHidden] = useState(false);

    const toggleMenu = () => {
        setHidden(hidden => !hidden); // on,off 개념 boolean
    }

  return (
 <S.Container>
     <div className="container">
            <div className='cont'>
                <div className="title">Frequently Asked Question</div>
                <div className='gun'>총4건</div>
                <div className='box'>
                <div className="id-box">
                    <div className="id">No</div>
                    <div className="id1">Title</div>
                    <div className="id2">Category</div>
                </div>
                           <div className={hidden ? "dsa2" : "dsa"}>
                            <button  className='text' onClick={toggleMenu}>
                                 <div className='number'>1</div>
                                <div className='question'>Question1</div>
                                <div className='down'> <DownOutlined /></div> 
                                <div className='category'>Art Group Purchase</div>
                                <div className={hidden ? "line1active" : "line1"}></div>
                    
                                <div className={hidden ? "line2active" : "line2"}></div>
                            </button>
                            <div className={hidden ? "hiddenbut2" : "hiddenbut"} >
                                <div className="answer">답변</div>
                                <div className='hi'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "</div>
                            </div>
                            <button className='text2' onClick={toggleMenu}>
                                <div className='number'>2</div>
                                <div className='question'>Question1</div>
                                <div className='down'> <DownOutlined /></div> 
                                <div className='category'>Art Group Purchase</div>
                               
                            </button>
                            <button className='text'onClick={toggleMenu}>
                                <div className='number'>3</div>
                                <div className='question'>Question1</div>
                                <div className='down'> <DownOutlined /></div> 
                                <div className='category'>Art Group Purchase</div>
                              
                            </button>
                          
                            <button className='text2'onClick={toggleMenu}>
                                <div className='number'>4</div>
                                <div className='question'>Question1</div>
                                <div className='down'> <DownOutlined /></div> 
                                <div className='category'>Art Group Purchase</div>
                            </button>
                            </div> 
                            <Pagination/>
                             
                     </div>
                </div>
            </div>
 </S.Container>
  )
}

export default Index