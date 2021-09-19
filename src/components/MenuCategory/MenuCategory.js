// Creates category container with desired class(es)
const MenuCategory = function (info, type, categoryImage, classes) {
  const image = new Image();
  image.src = categoryImage;

  const imageCredits = `
  <span class="credits">
    Photo by
    <a href="${info.source}" alt="${info.author}" target="_blank">
      ${info.author}</a>
    on
    <a href="https://unsplash.com" alt="Unsplash" target="_blank">Unsplash</a>
  </span>
`;

  const categoryTitle = document.createElement('h2');
  categoryTitle.innerText = info.category;

  const overlay = document.createElement('div');
  overlay.classList.add('text-overlay');
  overlay.appendChild(categoryTitle);

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image-wrapper');
  imageWrapper.appendChild(image);
  imageWrapper.appendChild(overlay);
  imageWrapper.insertAdjacentHTML('beforeend', imageCredits);

  const dishes = document.createElement('div');
  dishes.classList.add('dishes');

  const items = type[Object.keys(type)[0]];
  for (let dish in items) {
    const name = document.createElement('span');
    name.innerText = items[dish].name;

    const separator = document.createElement('span');
    separator.classList.add('separator');

    const price = document.createElement('span');
    price.innerText = items[dish].price;

    const menuItemWrapper = document.createElement('div');
    menuItemWrapper.classList.add('menu-item-wrapper');
    menuItemWrapper.appendChild(name);
    menuItemWrapper.appendChild(separator);
    menuItemWrapper.appendChild(price);
    dishes.appendChild(menuItemWrapper);
  }

  const category = document.createElement('div');
  category.id = info.category.toLowerCase();
  category.classList.add('category');
  if (classes != null) {
    if (typeof classes === 'object') {
      category.classList.add(...classes);
    } else {
      category.classList.add(classes);
    }
  }
  category.appendChild(imageWrapper);
  category.appendChild(dishes);

  ['mouseover', 'mouseleave'].forEach((event) =>
    imageWrapper.addEventListener(
      event,
      function showCredits(e) {
        const credits = document.querySelector(`#${category.id} .credits`);
        if (e.type === 'mouseover') {
          credits.classList.add('visible');
        } else {
          credits.classList.remove('visible');
        }
      },
      false
    )
  );

  return category;
};

export default MenuCategory;
