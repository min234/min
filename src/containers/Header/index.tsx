import React, { useState } from 'react';//lazy
import * as S from './style';
import Logo from '../../assets/images/Header/logo.png'
import {
	BrowserRouter as Router,
	Link,
	Route,
	useHistory,
	
   
  } from "react-router-dom";
import ModalConnect from 'components/ModalConnect';
import { Provider, useSelector , useDispatch } from "react-redux";
import store from '../../pages/Mypage/store'
import {id} from '../../pages/Mypage/store'


const data = [
	{
		id:1,
		title:'Yeolmae Company',
		path:'/Yeolmae Company'
	},
	{
		id:2,
		title:'Disclosure Indicator',
		path:'/Disclosure Indicator'
	},
	{
		id:3,
		title:'Media Coverage',
		path:'/Media Coverage'
	},
]
const data2 = [
	{
		id:1,
		title:'	Group Purchase',
		path:'/Group Purchase'
	},
	{
		id:2,
		title:'	Co-ownership status',
		path:'/Co-ownership status',
	},
	{
		id:3,
		title:'	The sale of works',
		path:'/The sale of works'
	}
]


function Header() {
	const [open,setOpen] = useState(false)
	  const toggleMenu = () => {
        setOpen (open => !open); // on,off 개념 boolean
	
    }
	const [open2,setOpen2] = useState(false)
	const toggleMenu2 = () => {
        setOpen2 (open => !open); // on,off 개념 boolean
		
    }
	
	const [click,setClick] = useState(0)
	
	const c = (id:number)  => {
		setClick(id)
		history.push('/Yeolmae Company')
		window.location.reload();
	}
	const [click2,setClick2] = useState(0)
	
	const c2 = (id:number)  => {
		setClick2(id)
		history.push('/Group Purchase')
		window.location.reload();
	}

     
    const [close2,setClose2] = useState(false);
    const [modalOpen,setModalOpen] = useState(false);
	const [coming,setComing] = useState(false);
  
    const showModal = () => {
      setModalOpen(true);
	
    }
	const history = useHistory();

	const handleLinkClick = () => {
		console.log("link clicked");
		history.push('/')
		window.location.reload();
	  };

	  const dispatch = useDispatch();
	return (
		<Provider store={store} >
		<S.Wrapper>
	
			<div className="container">
				<div className='bg-h'>
				
			<div className="content">
			<div className='ww'>
				<Link to= "/" onClick={handleLinkClick}>
			<div className="Ang "  >
				<img src ={Logo} alt ="log" className='log'/>
			</div>
			</Link>

			</div>
			<div className="span_content" >
			
				<button className={open ? "open":"isopen"}  onClick={()=>{toggleMenu()}}>
				Art Group Purchase  
				</button>
				<div className={open ? "visible" : "hidden"} >
					
				{data2.map((m) => (
								<Link to= {m.path} key={m.id}>
								<div className={click2 === m.id ? "choice" : "click"} onClick={()=>c2(m.id)}>{m.title}</div>
								</Link>
							))}
					
				</div>
				<Link to = '/NFT Marketplace'>
				<button className={`xzc ${coming === true ? "active" : ""}`} onClick = {() => setComing(true)}>
						
						NFT Marketplace
						
						</button>
						</Link>
				
						
						<button className={open2 ? "open2":"isopen2"}  onClick={()=>{toggleMenu2()}}>
						Company Overview
						</button>
						<div className={open2 ? "visible2" : "hidden"} >
							
							{data.map((m) => (
								<Link to= {m.path} key={m.path}>
								<div className={click === m.id ? "choice" : "click"} onClick={()=>c(m.id)}>{m.title}</div>
								</Link>
							))}
								
						</div>
					
						<div className='xzc'>
								my page
						</div>
					<Link to='ServiceCenter' >
						<button className='df'>
						Service Center
						</button>
						</Link>
						<button className='choice' onClick={ showModal}>0xKl36799820...0</button>
                                  {modalOpen && <ModalConnect a={close2} on1={setClose2}  setModalOpen = {setModalOpen}/>}
						<Link to ="login">
							<div className={`login ${id  === 'e' ? "active" : "" }`}>Login</div>
							<div className={`logout${id === 'e' ? "active" : ""}`}>Logout</div>
						</Link>
						</div>						
						</div>
						</div>
					
				</div>
		</S.Wrapper >
		</Provider>
	);
}

export default Header;