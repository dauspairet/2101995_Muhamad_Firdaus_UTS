import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo">Tentang Kami</h1>
        
    <h2>Contact</h2>
    
    <address>
      123 Jalan Kencana Dtg.Tb2. +11 2134 1234<br />
          
      <a class="footer__btn" href="https://www.google.com/intl/id/gmail/about/">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Social Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="https://www.facebook.com/">Facebook</a>
        </li>

        <li>
          <a href="https://www.instagram.com">Instagram</a>
        </li>
            
        <li>
          <a href="https://twitter.com/twitter">Twitter</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">WikiBenia</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="https://wikitravel.org/en/Main_Page">Travelling</a>
        </li>
        
        <li>
          <a href="https://en.wikipedia.org/wiki/Booking.com">Booking</a>
        </li>
        
        <li>
          <a href="https://maps.google.fi/">Map</a>
        </li>
        
        <li>
          <a href="https://www.mrdiy.com/id/">DIY</a>
        </li>
        
        <li>
          <a href="https://shopee.co.id/">Shop</a>
        </li>
        
        <li>
          <a href="https://www.youtube.com/">Tutorial</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="https://policies.google.com/privacy?hl=en-US">Privacy Policy</a>
        </li>
        
        <li>
          <a href="https://policies.google.com/terms?hl=en-US">Terms of Use</a>
        </li>
        
        <li>
          <a href="https://policies.google.com/faq?hl=en-US">FAQ</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2022 SKUY. All rights reserved.</p>
  </div>
</footer>
  );
}

export default Footer;
