import MenuCategory from '../../components/MenuCategory/MenuCategory';
import appetizers from '../../assets/menu/appetizers.json';
import appetizerImage from '../../assets/images/louis-hansel-appetizers.jpg';
import salads from '../../assets/menu/salads.json';
import saladImage from '../../assets/images/jonathan-ybema-salad.jpg';
import soups from '../../assets/menu/soups.json';
import soupImage from '../../assets/images/louis-hansel-soup.jpg';

const Menu = function () {
  const menu = document.createElement('div');
  menu.id = 'menu';

  menu.appendChild(MenuCategory('Appetizers', appetizers, appetizerImage));
  menu.appendChild(MenuCategory('Salads', salads, saladImage));
  menu.appendChild(MenuCategory('Soups', soups, soupImage));

  return menu;
};

export default Menu;
