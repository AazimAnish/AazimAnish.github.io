import { TCanvas } from '../three/TCanvas';
import GitButton from './gitButton';
import MoreButton from './moreButton';
import styles from './landingPage.css';

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <TCanvas />
      <MoreButton linkPath='./mainPage/homePage'/>
      <GitButton imagePath="/assets/icons/github.svg" linkPath="https://github.com/AazimAnish" />
    </div>
  )
}

export default LandingPage;
