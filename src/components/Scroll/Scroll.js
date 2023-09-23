import React from 'react';
import { useState } from 'react'
import './scroll.css'
import { AiOutlineHome } from 'react-icons/ai'
import { BiBookAdd } from 'react-icons/bi'
import { AiOutlineProject } from 'react-icons/ai'
import { BiMessageSquareDetail } from 'react-icons/bi'

export const Scroll = () => {
    const [activeNav, setactiveNav] = useState('#');

    const onUpdateActiveLink = (value) => {
        setactiveNav(value);
    }

    return (
        <div className='scroll-nav'>
            <a href='/#' onClick={() => onUpdateActiveLink('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
            <a href='#experience' onClick={() => onUpdateActiveLink('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAdd /></a>
            <a href='#project' onClick={() => onUpdateActiveLink('#project')} className={activeNav === '#project' ? 'active' : ''}><AiOutlineProject /></a>
            <a href='#contact' onClick={() => onUpdateActiveLink('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
        </div>
    )
}