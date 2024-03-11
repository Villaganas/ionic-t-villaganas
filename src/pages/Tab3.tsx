import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
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
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
