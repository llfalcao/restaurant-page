import MenuCategory from '../../components/MenuCategory/MenuCategory';
import bannerImage from '../../assets/images/rumman-amin-banner.jpg';
import appetizers from '../../assets/menu/appetizers.json';
import appetizerImage from '../../assets/images/louis-hansel-appetizers.jpg';
import salads from '../../assets/menu/salads.json';
import saladImage from '../../assets/images/jonathan-ybema-salad.jpg';
import soups from '../../assets/menu/soups.json';
import soupImage from '../../assets/images/max-griss-soup.jpg';
import specials from '../../assets/menu/specials.json';
import specialImage from '../../assets/images/davide-cantelli-special.jpg';
import beverages from '../../assets/menu/beverages.json';
import beveragesImage from '../../assets/images/des-recits-beverages.jpg';
import authorInfo from '../../assets/info/authors.json';

const Menu = function () {
  const banner = new Image();
  banner.src = bannerImage;
  banner.classList.add('menu-banner');

  const bannerCredits = `
      <span class="credits">
        Photo by
        <a href="https://unsplash.com/photos/LNn6O_Mt730" alt="Rumman Amin" target="_blank">
          Rumman Amin</a>
        on
        <a href="https://unsplash.com" alt="Unsplash" target="_blank">Unsplash</a>
      </span>
  `;

  const bannerText = `
    <h1>You're in for a treat!</h1>
    <p>Check out some of our options</p>
  `;

  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.insertAdjacentHTML('beforeend', bannerText);

  const figure = document.createElement('figure');
  figure.classList.add('banner-wrapper');
  figure.appendChild(banner);
  figure.appendChild(overlay);
  figure.insertAdjacentHTML('beforeend', bannerCredits);

  const menuLeft = document.createElement('section');
  const menuRight = document.createElement('section');
  menuLeft.classList.add('menu-section');
  menuRight.classList.add('menu-section');

  menuLeft.appendChild(
    MenuCategory(authorInfo.appetizers, appetizers, appetizerImage)
  );
  menuLeft.appendChild(MenuCategory(authorInfo.salads, salads, saladImage));
  menuLeft.appendChild(MenuCategory(authorInfo.soups, soups, soupImage));
  menuRight.appendChild(
    MenuCategory(authorInfo.specials, specials, specialImage, 'menu-specials')
  );
  menuRight.appendChild(
    MenuCategory(authorInfo.beverages, beverages, beveragesImage)
  );

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menuContainer.appendChild(menuLeft);
  menuContainer.appendChild(menuRight);

  const menu = document.createElement('div');
  menu.id = 'menu';
  menu.appendChild(figure);
  menu.appendChild(menuContainer);

  ['mouseover', 'mouseleave'].forEach((event) =>
    figure.addEventListener(
      event,
      function showCredits(e) {
        const credits = document.querySelector('.banner-wrapper .credits');
        if (e.type === 'mouseover') {
          credits.classList.add('visible');
        } else {
          credits.classList.remove('visible');
        }
      },
      false
    )
  );

  return menu;
};

export default Menu;
