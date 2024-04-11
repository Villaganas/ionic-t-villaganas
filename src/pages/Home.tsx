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
        
        <IonRow>
          <IonCol size="4">
            <div className="footer-section">
              <h3>Profile</h3>
              <IonAvatar>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU" alt="Profile" />
              </IonAvatar>
            </div>
          </IonCol>
          <IonCol size="4">
            <div className="footer-section">
              <h3>Click Counter</h3>
              <IonAvatar>
                <img src="data:image/jpeg;base64,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" alt="Click Counter" />
              </IonAvatar>
            </div>
          </IonCol>
          <IonCol size="4">
            <div className="footer-section">
              <h3>Calculator</h3>
              <IonAvatar>
                <img src="data:image/png;base64,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" alt="Calculator" />
              </IonAvatar>
            </div>
          </IonCol>
        </IonRow>
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
