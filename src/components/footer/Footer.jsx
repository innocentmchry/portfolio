import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Ironic Inno</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Interests</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Activities</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/innocentmchry"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/innocentmchry"><BsLinkedin /></a>
        <a href="https://www.facebook.com/Innocent.dengkhw"><BsFacebook /></a>
        <a href="https://www.instagram.com/ironic_inno/"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ironic Inno. All rights reserved!</small>
      </div>
    </footer>
  )
}

export default Footer