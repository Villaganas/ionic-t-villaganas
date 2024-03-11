import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id="cover">
          <img src="https://scontent.fcgy2-1.fna.fbcdn.net/v/t39.30808-6/354231992_1319969795582819_162204273908998251_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFWNKDVFubVCMm5e17mLRxdMkcZmb3xK7oyRxmZvfErus_cglVOjz9XERNnqW81D0WsDVInJRMCJF8zo0I4lowh&_nc_ohc=56NxX-JMhx0AX_GHXly&_nc_ht=scontent.fcgy2-1.fna&oh=00_AfA4ZV6cK5rRT5deCaiSIfnToIF1PBntiU9ADCZU_SUuYA&oe=65F05344" alt="" />
        </div>
        <IonAvatar id="profile">
        <img alt="Silhouette of a person's head" src="https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/423583714_1444891803090617_4793189191939464381_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGl5A39vM92hA5ErEMAjCv2ZXDTm0Na27JlcNObQ1rbsp5Ul0wAFj9_JbdxCDOsPtvuoatpXT6aHADqwV134QR8&_nc_ohc=FHPcVgYDS6UAX_1Dgd_&_nc_ht=scontent.fcgy2-2.fna&oh=00_AfBELwBvnq2qdSeU1V1iIv2o0FQjt_nQL5R-__wC46atSg&oe=65EF434C" />
      </IonAvatar>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
