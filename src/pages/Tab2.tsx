import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAvatar, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="counter-content">
        <div className="counter-container">
          <h1>Click Counter</h1>
          <p>Total Clicks: {count}</p>
          <IonButton onClick={incrementCounter}>Click me!</IonButton>
        </div>
        
  <footer>
  <div className="footer-content">
    <div className="footer-section">
      <h3>Contact Us</h3>
      <p>Email: 20201259@nbsc.edu.ph</p>
      <p>Phone: 09123456789</p>
      <p>Address: Upper Pol-Oton, Tankulan, Manolo Fortich, Bukidnon</p>
    </div>
    <div className="footer-section">
  <h3>Follow Us</h3>
  <ul className="social-links">
    <li><a href="#"><IonIcon icon={logoFacebook} /></a></li>
    <li><a href="#"><IonIcon icon={logoTwitter} /></a></li>
    <li><a href="#"><IonIcon icon={logoInstagram} /></a></li>
  </ul>
</div>

    <div className="footer-section">
      <h3>Newsletter</h3>
      <p>Subscribe to our newsletter for updates.</p>
      <form>
        <input type="email" placeholder="Your email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Bimbo E. Villaganas. All rights reserved.</p>
  </div>
</footer>
      </IonContent>
    </IonPage>
    
);
};

export default Tab2;
