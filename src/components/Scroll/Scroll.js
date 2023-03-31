import React from 'react';
import react, { useState } from 'react'
import './scroll.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookAdd } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'

export const Scroll = () => {
    const [activeNav, setactiveNav] = useState('#');

    const onUpdateActiveLink = (value) => {
        setactiveNav(value);
    }

    return (
        <div className='scroll-nav'>
            <a href='#' onClick={() => onUpdateActiveLink('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#about' onClick={() => onUpdateActiveLink('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href='#experience' onClick={() => onUpdateActiveLink('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAdd /></a>
            <a href='#services' onClick={() => onUpdateActiveLink('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
            <a href='#contact' onClick={() => onUpdateActiveLink('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </div>
    )
}