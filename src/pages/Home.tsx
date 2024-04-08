import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useState } from 'react';

const Home: React.FC = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({ name: 'sehun' });
  // 按钮点击事件的处理函数
  const handleButtonClick = () => {
    // 更新按钮点击的状态为 true
    setCount(count + 1);
    setButtonClicked(true);
    // 在这里你可以添加任何其他的逻辑或处理
  };
  const hadleClick = (name: string, e: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => {
    console.log('beijinajile', name, e)
    // setCount(count+1);
    setForm({
      ...form,
      name: 'jun'

    })

  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='bg-pink-500'>EXO 十二周年!!</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank!!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonButton  onClick={handleButtonClick}>{count}</IonButton>
        <IonButton onClick={(e) => hadleClick('sehun', e)}>修改form{form.name}</IonButton>
        {buttonClicked && <p>Button clicked!</p>}
      </IonContent>
    </IonPage>
  );
};

export default Home;
