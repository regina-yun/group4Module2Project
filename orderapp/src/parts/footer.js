import React from 'react';
import './footer.css';
import FacebookImg from '../assets/facebook.png';
import InstagramImg from '../assets/instagram.png';
import TwitterImg from '../assets/twitter.png';
import TelegramImg from '../assets/telegram.png';

function Footer() {
  return (

    <>
      <div className="footer-container">
        <hr/>
        <img id="fb-img" src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png" alt="facebook logo"/>
        <img id="instagram-img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"  alt="instagram logo"/>
        <img id="twitter-img"src="https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png"  alt="twitter logo"/>
        <img id="telegram-img"src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"  alt="telegram logo"/>
        <p className="copyright">&#169; 2022 GroupFour Inc.</p>
      </div>
  );
}
  
  export default Footer;