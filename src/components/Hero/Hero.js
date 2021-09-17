import beef from '../../assets/louis-hansel-beef.jpg';

const Hero = function () {
  const hero = document.createElement('div');
  hero.classList.add('hero');
  const bgImage = new Image();
  bgImage.src = beef;

  const tagline = document.createElement('h1');
  tagline.textContent = 'Cooked to perfection';

  hero.appendChild(bgImage);
  hero.appendChild(tagline);
  return hero;
};

export default Hero;
