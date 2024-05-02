import React from 'react';
import styles from './Hero.module.css';
import rec1 from '../assets/Rectangle 1.png';
import rec3 from '../assets/Rectangle 3.png';
import rec4 from '../assets/Rectangle 4.png';

function Hero() {
  return ( 
    <div className={styles.container}>
        <div className={styles.item}>
            <img src={rec1} alt="" />
            <h1>Start your journey to better  health</h1>
        </div>

        <div className={styles.item}>
            <img src={rec3} alt="" />
            <p className={styles.subtitle}>Get started today and become a better version of yourself</p>
        </div>

        <div className={styles['item', 'small-item']}>
            <h1 className={styles.title}>Join Go Gym today and start your journey</h1>
            <img src={rec4} alt="" />
            <p className={styles.subtitle}>Get started today and become a better version of yourself</p>
            <button className={styles.button}>Explore</button>
        </div>
        
    </div>
  );
}

export default Hero;
