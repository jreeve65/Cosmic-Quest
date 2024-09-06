import spaceVideo from '../assets/videos/space.mp4'
const Home = () => {


return (
    <div>
      <video class="video" loop="true" autoplay="autoplay" preload="true" muted>
      <source src={spaceVideo} type="video/mp4" /> 
     
      
   </video>
    </div>
  );
};

export default Home;