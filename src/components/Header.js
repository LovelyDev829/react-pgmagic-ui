import React from 'react'
import {ReactComponent as SmallCircleIcon} from '../assets/small-circle.svg';
import {ReactComponent as LogInIcon} from '../assets/log-in.svg';
import {ReactComponent as LanguageIcon} from '../assets/language.svg';
import {ReactComponent as DropDownIcon} from '../assets/drop-down.svg';

function Header() {
  return (
    <div className='Header'>
        <span>SOLUTIONS</span>
        <SmallCircleIcon/>
        <span>PRODUCTS</span>
        <SmallCircleIcon/>
        <span>PGMAGIC</span>
        <SmallCircleIcon/>
        <span>PRICE</span>
        <SmallCircleIcon/>
        <span>CONTACT</span>
        <div className='right'>
            <div className='login'>
                <LogInIcon/>
                <span>LOGIN</span>
            </div>
            <div className='language'>
                <LanguageIcon/>
                <span>EN</span>
                <DropDownIcon/>
            </div>
        </div>
    </div>
  )
}

export default Header