const Header = function () {
  const header = document.createElement('div');
  const navbar = `
    <ul>
      <li><a class="active" href="#home" alt="Home">Home</a></li>
      <li><a href="#menu" alt="Menu">Menu</a></li>
      <li><a href="#contact" alt="Contact">Contact</a></li>
    </ul>
  `;

  header.id = 'header';
  header.insertAdjacentHTML('beforeend', navbar);

  return header;
};

export default Header;
