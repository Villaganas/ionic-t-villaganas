import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel, IonIcon, IonAlert, IonButton,IonActionSheet } from '@ionic/react';
import React, { useState } from 'react';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="cover-photo">
          <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/354231992_1319969795582819_162204273908998251_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFWNKDVFubVCMm5e17mLRxdMkcZmb3xK7oyRxmZvfErus_cglVOjz9XERNnqW81D0WsDVInJRMCJF8zo0I4lowh&_nc_ohc=56NxX-JMhx0AX_GHXly&_nc_ht=scontent.fcgy2-1.fna&oh=00_AfA4ZV6cK5rRT5deCaiSIfnToIF1PBntiU9ADCZU_SUuYA&oe=65F05344" alt="Cover" />
        </div>
        <div className="profile-info">
          <IonAvatar className="avatar">
            <img src="https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/423583714_1444891803090617_4793189191939464381_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGl5A39vM92hA5ErEMAjCv2ZXDTm0Na27JlcNObQ1rbsp5Ul0wAFj9_JbdxCDOsPtvuoatpXT6aHADqwV134QR8&_nc_ohc=jZ5jgO7K2HsAX-2pfLu&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfAsQldN8byicbbocPggK2Y4xRnSI4meMxDnGhRO7fTwAg&oe=65F5320C" alt="Profile" />
          </IonAvatar>
          <div className="profile-details">
            <h1>Bimbo E. Villaganas</h1>
            <p>20201259@nbsc.edu.ph</p>
            <p>Upper Pol-Oton, Tankulan, Manolo Fortich, Bukidnon</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Additional Content */}
        <div className="additional-content">
  <div>
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sem nec nulla venenatis eleifend.</p>
  </div>

  <div>
    <h2>Interests</h2>
    <ul className="interests-list">
      <li>Traveling</li>
      <li>Photography</li>
      <li>Reading</li>
      <li>Music</li>
      <li>Art</li>
    </ul>
  </div>

  <div>
    <h2>Skills</h2>
    <ul className="skills-list">
      <li>Web Development</li>
      <li>Graphic Design</li>
      <li>Content Writing</li>
      <li>Project Management</li>
      <li>Communication</li>
    </ul>
  </div>
</div>

<IonButton id="present-alert"expand="block">Read more</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>
      
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

export default Tab1;
