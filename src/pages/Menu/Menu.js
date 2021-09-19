import MenuCategory from '../../components/MenuCategory/MenuCategory';
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

const Menu = function () {
  const menu = document.createElement('div');
  menu.id = 'menu';

  const leftContainer = document.createElement('section');
  const rightContainer = document.createElement('section');
  leftContainer.classList.add('menu-container');
  rightContainer.classList.add('menu-container');

  leftContainer.appendChild(
    MenuCategory('Appetizers', appetizers, appetizerImage)
  );
  leftContainer.appendChild(MenuCategory('Salads', salads, saladImage));
  leftContainer.appendChild(MenuCategory('Soups', soups, soupImage));
  rightContainer.appendChild(
    MenuCategory('Specials', specials, specialImage, 'menu-specials')
  );
  rightContainer.appendChild(
    MenuCategory('Beverages', beverages, beveragesImage)
  );

  menu.appendChild(leftContainer);
  menu.appendChild(rightContainer);
  return menu;
};

export default Menu;
