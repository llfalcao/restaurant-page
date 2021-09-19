// Creates category container with desired class(es)
const MenuCategory = function (title, type, image, classNames) {
  const category = document.createElement('div');
  category.classList.add('category');
  if (classNames != null) {
    if (typeof classNames === 'object') {
      category.classList.add(...classNames);
    } else {
      category.classList.add(classNames);
    }
  }

  const categoryImage = new Image();
  categoryImage.src = image;

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  imageWrapper.appendChild(categoryImage);

  const categoryTitle = document.createElement('h2');
  categoryTitle.innerText = title;

  const overlay = document.createElement('div');
  overlay.classList.add('text-overlay');
  overlay.appendChild(categoryTitle);
  imageWrapper.appendChild(overlay);

  const dishes = document.createElement('div');
  dishes.classList.add('dishes');

  const items = type[Object.keys(type)[0]];
  for (let dish in items) {
    const menuItemWrapper = document.createElement('div');
    menuItemWrapper.classList.add('menu-item-wrapper');
    const name = document.createElement('span');
    name.innerText = items[dish].name;
    const price = document.createElement('span');
    price.innerText = items[dish].price;

    menuItemWrapper.appendChild(name);
    menuItemWrapper.appendChild(price);
    dishes.appendChild(menuItemWrapper);
  }

  category.appendChild(imageWrapper);
  category.appendChild(dishes);

  return category;
};

export default MenuCategory;
