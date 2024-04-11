import React from 'react';
import { IonFooter, IonList, IonInput, IonItem, IonIcon, IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonRow, IonCol } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <h1>Welcome to my Ionic App</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum possimus natus cupiditate ad nihil. Placeat odio quo aperiam animi ad recusandae, accusantium, neque explicabo impedit quae consequuntur laborum rem culpa sed ipsum error numquam earum pariatur hic eligendi minus magni facilis perspiciatis doloremque! Harum ullam archigit tecto quidem aliquid ex dolore quasi odit maiores suscipit facilis, rerum facere nisi ducimus qui voluptas similique id! Quas vel voluptatibus perspiciatis placeat dolore corrupti ipsam fuga sequi cupiditate! Similique pariatur libero id sint expedita amet enim reiciendis aliquid labore possimus.</p>
        <div className="profile-details">
          <h3>Bimbo E. Villaganas</h3>
          <p>20201259@nbsc.edu.ph</p>
          <p>Upper Pol-Oton, Tankulan, Manolo Fortich, Bukidnon</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        
        <IonFooter>
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: 20201259@nbsc.edu.ph</p>
              <p>Phone: 09123456789</p>
              <p>Address: Upper Pol-Oton, Tankulan, Manolo Fortich, Bukidnon</p>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <IonList className="social-links">
                <IonItem><a href="#"><IonIcon icon={logoFacebook} />BIMBO VILLAGANAS</a></IonItem>
                <IonItem><a href="#"><IonIcon icon={logoTwitter} />BIMBO VILLAGANAS</a></IonItem>
                <IonItem><a href="#"><IonIcon icon={logoInstagram} />BIMBO VILLAGANAS</a></IonItem>
              </IonList>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for updates.</p>
              <form>
                <IonItem>
                  <IonInput type="email" placeholder="Your email" name="email" />
                  <IonButton type="submit">Subscribe</IonButton>
                </IonItem>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Bimbo E. Villaganas. All rights reserved.</p>
          </div>
        </IonFooter>
      </IonContent>
    </IonPage>
  );
};

export default Home;
