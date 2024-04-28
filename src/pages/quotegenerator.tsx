import React, { useState } from 'react';
import {IonFooter, IonRouterLink,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonSearchbar,
  IonAlert,
  IonActionSheet,
  IonAvatar,
  IonThumbnail
} from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram, arrowBackCircle} from 'ionicons/icons';


//Dynamic data reference
import rizzCard from '../assets/json/rizzCard.json';
import './quotegenerator.css';
const QuoteGenerator: React.FC = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [randomIndex, setRandomIndex] =  useState<number | null>(null); // State to store random index

  // Function to generate a random index
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * rizzCard.length);
  };

  // Function to generate a random message
  const renderRandomMessage = () => {
    if (randomIndex !== null) {
      return rizzCard[randomIndex].message;
    } else {
      return ''; // Return empty string if randomIndex is null
    }
  };

  // Function to handle opening of the alert
  const handleOpenAlert = () => {
    const newIndex = generateRandomIndex();
    setRandomIndex(newIndex);
    setShowAlert(true);
  };

  // Function to handle closing of the alert
  const handleAlertDismiss = () => {
    setRandomIndex(0); // Reset the index to 0
    setShowAlert(false); // Hide the alert
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quote Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quote Generator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRouterLink href="/Home">
            <IonIcon id="arrow" aria-hidden="true" icon={arrowBackCircle} />
                </IonRouterLink>
        <div className="rizz">

        <img alt="Silhouette of mountains" src="https://media.tenor.com/6aejTZnDDxQAAAAM/rizz-face-rizzler.gif" />
          {/*Button Trigger*/}
          <IonGrid>
            <IonRow>
                <IonCol size="" push="">
                <IonButton id="present-alert" color="warning" expand="full" onClick={handleOpenAlert}>Click me</IonButton> 
                <IonAlert
                  isOpen={showAlert}
                  onDidDismiss={handleAlertDismiss} // Call the handleAlertDismiss function when the alert is closed
                  header="Rizz"
                  subHeader=""
                  message={renderRandomMessage()}
                  buttons={['Close']}
                />
                </IonCol>
            </IonRow>
          </IonGrid>
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

export default  QuoteGenerator;
