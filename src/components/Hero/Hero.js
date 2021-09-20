import fish from '../../assets/images/caroline-attwood-hero.jpg';

const Hero = function () {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  const bgImage = new Image();
  bgImage.src = fish;

  const tagline = document.createElement('h1');
  tagline.innerText = 'Cooked to perfection';

  const imageCredits = `
    <span class="credits">
      Photo by
      <a href="https://unsplash.com/photos/bpPTlXWTOvg" alt="Caroline Attwood" target="_blank">
        Caroline Attwood</a>
      on
      <a href="https://unsplash.com" alt="Unsplash" target="_blank">Unsplash</a>
    </span>
  `;

  const hero = document.createElement('div');
  hero.classList.add('hero');
  hero.appendChild(overlay);
  hero.appendChild(tagline);
  hero.insertAdjacentHTML('beforeend', imageCredits);

  ['mouseover', 'mouseleave'].forEach((event) =>
    hero.addEventListener(
      event,
      function showCredits(e) {
        const credits = document.querySelector('.hero .credits');
        if (e.type === 'mouseover') {
          credits.classList.add('visible');
        } else {
          credits.classList.remove('visible');
        }
      },
      false
    )
  );

  return hero;
};

export default Hero;
