import axios from 'axios'
import Data from 'components/Data'
import React, { useEffect, useState } from 'react'
import { setInlineStyles } from 'rsuite/esm/List/helper/utils'
import * as S from './style'

interface Props{
  onSearch: (e:any)=> void;
}

function Index({onSearch}:Props) {
    // const [search,setSearch] = useState("")

    function serSearch(){
      let search:any = document.getElementById("keyword");
      search  = search.value;
      console.log("search",search);
      onSearch(search);
    }
    
   
  return (
    <S.Container>
            <div className="header">
            <input type="text" className="iptSearch" id="keyword"  placeholder='Search NFT' />
            <button type="button" className="search" onClick={()=>serSearch()}>
            
            </button>
           
        </div>
      
        </S.Container>
  )
}

export default Index