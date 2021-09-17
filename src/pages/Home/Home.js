import hero from '../../assets/eggs-benedict.jpg';

const Home = function () {
  const home = document.createElement('div');
  home.id = 'home';

  const heroImg = new Image();
  heroImg.src = hero;

  home.appendChild(heroImg);

  return home;
};

export default Home;
