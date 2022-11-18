import {NavLink} from 'react-router-dom'
import './navbar.css'
import Logotip from '../image/logotip.png'
import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {Modal,ModalHeader,ModalBody,ModalFooter,Button} from 'reactstrap'
function Navbar() {
  const [hamburger,setHamburger]=useState(false)
  const isopen = () => setHamburger(!hamburger);
  return (
      <div className='navbar' >
          <div className="navbar_logotip">
                 <img src={Logotip} alt="error" />
          </div>
          <div className="navbar_link ">
               <NavLink to={'/kurslarimiz'} className={'nav_link'}> Kurslarimiz</NavLink>
               <NavLink to={'/haqimizda'} className={'nav_link'}> Biz haqimizda</NavLink>
               <NavLink to={'kirish'} className={'nav_link btnx btn_nav_link'} > Kirish</NavLink>
          </div>
      <div className="hamburger">
          <button type={'button'} className={'btnx btn-yellow btn_hamburger'}
           onClick={isopen}>
            <GiHamburgerMenu/></button>
            <Modal isOpen={hamburger} toggle={isopen}>
        <ModalHeader toggle={isopen}>Menu</ModalHeader>
        <ModalBody className='navbar_bar'>  
              <NavLink to={'/kurslarimiz'} className={'nav_link'}> Kurslarimiz</NavLink>
               <NavLink to={'/haqimizda'} className={'nav_link'}> Biz haqimizda</NavLink>
               <NavLink to={'kirish'} className={'nav_link btnx btn_nav_link'} > Kirish</NavLink>
        </ModalBody>
      </Modal>
      </div>
      
      </div>
    );
  }
  export default Navbar;