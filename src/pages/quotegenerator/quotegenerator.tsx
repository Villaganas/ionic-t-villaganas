import React, { useState, useEffect } from 'react';
import {
  IonButton,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAlert,
  IonRouterLink,
  IonIcon
} from '@ionic/react';
import { logoFacebook, arrowBackCircle, logoTwitter, logoInstagram} from 'ionicons/icons';
import { collection, getDocs } from 'firebase/firestore'; // Import Firestore functions
import { db } from './firebase'; // Import Firebase connection
import './quotegenerator.css'; // Import custom CSS file for styling

const QuoteGenerator: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [quotes, setQuotes] = useState<string[]>([]);
  const [randomIndex, setRandomIndex] = useState<number | null>(null); // State to store random index

  useEffect(() => {
    const fetchQuotes = async () => {
      const quotesSnapshot = await getDocs(collection(db, 'quotes'));
      const quotesData = quotesSnapshot.docs.map(doc => doc.data().message);
      setQuotes(quotesData);
    };

    fetchQuotes();
  }, []);

  // Function to generate a random index
  const generateRandomIndex = () => {
    return Math.floor(Math.random() * quotes.length);
  };

  // Function to handle opening of the alert
  const handleOpenAlert = () => {
    const newIndex = generateRandomIndex();
    setRandomIndex(newIndex);
    setShowAlert(true);
  };

  // Function to handle closing of the alert
  const handleAlertDismiss = () => {
    setRandomIndex(null); // Reset the index to null
    setShowAlert(false); // Hide the alert
  };

  // Function to render random message
  const renderRandomMessage = () => {
    if (randomIndex !== null) {
      return quotes[randomIndex];
    } else {
      return ''; // Return empty string if randomIndex is null
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Quote Generator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Quote Generator</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRouterLink href="/Home">
            <IonIcon id="arrow" aria-hidden="true" icon={arrowBackCircle} />
                </IonRouterLink>
        <div className="rizz">
          <img alt="Silhouette of mountains" src="https://media.tenor.com/yEG23sxXIVQAAAAM/shrek-shrek-meme.gif" />
          {/*Button Trigger*/}
          <IonGrid>
            <IonButton color="warning" expand="full" onClick={handleOpenAlert}>
              Click me
            </IonButton>
            <IonAlert
              isOpen={showAlert}
              onDidDismiss={handleAlertDismiss} // Call the handleAlertDismiss function when the alert is closed
              header="Rizz"
              cssClass="custom-alert"
              message={renderRandomMessage()}
              buttons={['Close']}
            />
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default QuoteGenerator;
