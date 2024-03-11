import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAvatar, IonItem, IonLabel, IonIcon } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="calculator-container">
          <div className="result">{result ? result : expression}</div>
          <div className="buttons">
            <div className="row">
              <IonButton onClick={() => handleButtonClick('7')}>7</IonButton>
              <IonButton onClick={() => handleButtonClick('8')}>8</IonButton>
              <IonButton onClick={() => handleButtonClick('9')}>9</IonButton>
              <IonButton onClick={() => handleButtonClick('/')}>/</IonButton>
            </div>
            <div className="row">
              <IonButton onClick={() => handleButtonClick('4')}>4</IonButton>
              <IonButton onClick={() => handleButtonClick('5')}>5</IonButton>
              <IonButton onClick={() => handleButtonClick('6')}>6</IonButton>
              <IonButton onClick={() => handleButtonClick('*')}>*</IonButton>
            </div>
            <div className="row">
              <IonButton onClick={() => handleButtonClick('1')}>1</IonButton>
              <IonButton onClick={() => handleButtonClick('2')}>2</IonButton>
              <IonButton onClick={() => handleButtonClick('3')}>3</IonButton>
              <IonButton onClick={() => handleButtonClick('-')}>-</IonButton>
            </div>
            <div className="row">
              <IonButton onClick={() => handleButtonClick('0')}>0</IonButton>
              <IonButton onClick={() => handleButtonClick('.')}>.</IonButton>
              <IonButton onClick={() => handleButtonClick('C')} id="c-button">C</IonButton>
              <IonButton onClick={() => handleButtonClick('+')}>+</IonButton>
            </div>
            <div className="row">
            <IonButton onClick={() => handleButtonClick('=')} id="equals-button">=</IonButton>
            </div>
          </div>
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

export default Tab3;
