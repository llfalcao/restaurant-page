const MenuCategory = function (title, type, image) {
  const category = document.createElement('div');
  category.classList.add('category');

  const categoryImage = new Image();
  categoryImage.src = image;

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  imageWrapper.appendChild(categoryImage);

  const categoryTitle = document.createElement('h2');
  categoryTitle.innerText = title;

  const dishes = document.createElement('div');
  dishes.classList.add('dishes');
  dishes.appendChild(categoryTitle);

  const items = JSON.parse(JSON.stringify(type.appetizers));
  for (let dish in items) {
    const menuItemWrapper = document.createElement('div');
    const name = document.createElement('span');
    const price = document.createElement('span');

    menuItemWrapper.classList.add('menu-item-wrapper');
    name.classList.add('food-name');
    name.classList.add('food-price');

    name.innerText = items[dish].name;
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
