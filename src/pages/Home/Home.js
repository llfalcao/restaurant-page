import Hero from '../../components/Hero';

const Home = function () {
  const home = document.createElement('div');
  home.id = 'home';

  home.appendChild(Hero());

  return home;
};

export default Home;
