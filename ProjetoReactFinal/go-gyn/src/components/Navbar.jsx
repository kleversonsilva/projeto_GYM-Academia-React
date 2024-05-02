import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import vector from '../assets/Vector.png';


function Navbar() {
  return (
    <div className={styles.container}>
    <header>
      <div className={styles.menu}>
        <nav className={styles.navbar}>
            <div>
              <img src={vector} alt="Vector Icon" />
            </div>

            <div>
              <ul>
                  <li><a href="#">Offer</a></li>
                  <li><a to="/about">About us</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Find gym</a></li>
                
                  
                </ul>
            </div>
        
          <a href="#" className={styles.ctus}>Contact us</a>
        
        </nav>
      </div>
    </header>
  </div>

);

}

export default Navbar;