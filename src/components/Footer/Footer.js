import React from 'react';
import './footer.css';
import navIcon2 from '../../assets/img/nav-icon2.svg';
import navIcon3 from '../../assets/img/nav-icon3.svg';


const Footer = () => {
  return (
    <footer id='footer'>
      <div className='footer_social'>
        <a href="https://www.facebook.com/profile.php?id=100072741618248" target='_blank' rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
        <a href="https://www.instagram.com/ayush__reigns/" target='_blank' rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
      </div>
      <div className='footer_copyright'>
        <small>&copy; Ayush Kumar. All Right Reserved</small>
      </div>

    </footer>
  )
}

export default Footer