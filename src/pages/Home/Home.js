import Hero from '../../components/Hero';
import Story from '../../components/Story';

const Home = function () {
  const home = document.createElement('div');
  home.id = 'home';
  home.appendChild(Hero());
  home.appendChild(Story());

  return home;
};

export default Home;
