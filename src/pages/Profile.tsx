import React from 'react';
import { IonImg, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonAvatar, IonItem, IonLabel, IonIcon, IonList, IonListHeader, IonFooter, IonInput, IonButton } from '@ionic/react';
import { logoFacebook, logoTwitter, logoInstagram } from 'ionicons/icons';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="cover-photo">
          <img src="https://scontent.fdvo2-2.fna.fbcdn.net/v/t39.30808-6/354231992_1319969795582819_162204273908998251_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFWNKDVFubVCMm5e17mLRxdMkcZmb3xK7oyRxmZvfErus_cglVOjz9XERNnqW81D0WsDVInJRMCJF8zo0I4lowh&_nc_ohc=lwqg-_ki8EoAX-NafJ5&_nc_zt=23&_nc_ht=scontent.fdvo2-2.fna&oh=00_AfCpZMSBqY7uErArXeVsczCWBtg2e-Jlgp0DyVHQL9VhUw&oe=66021F84" alt="Cover" />
        </div>
        <div className="profile-info">
          <IonAvatar className="avatar">
            <img src="https://scontent.fcgy2-2.fna.fbcdn.net/v/t39.30808-6/423583714_1444891803090617_4793189191939464381_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGl5A39vM92hA5ErEMAjCv2ZXDTm0Na27JlcNObQ1rbsp5Ul0wAFj9_JbdxCDOsPtvuoatpXT6aHADqwV134QR8&_nc_ohc=KA30GpMocpcAX96uIZj&_nc_ht=scontent.fcgy2-2.fna&oh=00_AfCiSqiiYEsJtYCaLGxgm29UcXB2qQijyDF7E0jHXmSqOQ&oe=660309CC" alt="Profile" />
          </IonAvatar>
          <div className="profile-details">
            <h1>Bimbo E. Villaganas</h1>
            <p>20201259@nbsc.edu.ph</p>
            <p>Upper Pol-Oton, Tankulan, Manolo Fortich, Bukidnon</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="additional-content">
          <IonList>
            <IonListHeader>
              <h2>About Me</h2>
            </IonListHeader>
            <IonItem>
              <IonLabel>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget sem nec nulla venenatis eleifend.</IonLabel>
            </IonItem>
          </IonList>

          <IonList>
            <IonListHeader>
              <h2>Interests</h2>
            </IonListHeader>
            <IonItem>
              <IonLabel>Traveling</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Photography</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Reading</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Music</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Art</IonLabel>
            </IonItem>
          </IonList>

          <IonList>
            <IonListHeader>
              <h2>Skills</h2>
            </IonListHeader>
            <IonItem>
              <IonLabel>Web Development</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Graphic Design</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Content Writing</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Project Management</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Communication</IonLabel>
            </IonItem>
          </IonList>
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

export default Profile;