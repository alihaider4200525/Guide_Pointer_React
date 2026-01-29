import BackgroundImg from '../../assets/images/background-img.png';
import './Background.css'

function Background() {
    return (
    <div className="background-img">
      <img src={BackgroundImg} alt="" />
    </div>
  );
}

export default Background