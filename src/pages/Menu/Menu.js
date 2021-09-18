import MenuCategory from '../../components/MenuCategory/MenuCategory';
import appetizers from '../../assets/menu/appetizers.json';
import imageAppetizers from '../../assets/images/louis-hansel-appetizers.jpg';

const Menu = function () {
  const menu = document.createElement('div');
  menu.id = 'menu';

  menu.appendChild(MenuCategory('Appetizers', appetizers, imageAppetizers));

  return menu;
};

export default Menu;
