import beef from '../../assets/louis-hansel-beef.jpg';

const Hero = function () {
  const hero = document.createElement('div');
  hero.classList.add('hero');

  const bgImage = new Image();
  bgImage.src = beef;

  const tagline = document.createElement('h1');
  tagline.textContent = 'Cooked to perfection';

  const imageCredits = `
    <span
      >Photo by
      <a
        href="https://unsplash.com/photos/oyUqUV1Q0Zg"
        alt="Louis Hansen"
        target="_blank"
        >Louis Hansen
      </a>
      on
      <a href="https://unsplash.com" alt="Unsplash" target="_blank"> Unsplash </a>
    </span>

`;

  hero.appendChild(bgImage);
  hero.appendChild(tagline);
  hero.insertAdjacentHTML('beforeend', imageCredits);
  return hero;
};

export default Hero;
