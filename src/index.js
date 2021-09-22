import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/app.scss';

const content = document.querySelector('#content');
content.insertAdjacentElement('beforebegin', Header());
content.appendChild(Home());
content.insertAdjacentElement('afterend', Footer());

// Load section according to the selected tab
function loadSection(navbarLink, offset) {
  let animation;
  if (offset < 0) {
    animation = 'enter-from-left';
  } else {
    animation = 'enter-from-right';
  }

  const indicator = document.querySelector('.indicator');
  if (navbarLink === 'menu') {
    content.insertAdjacentElement('afterbegin', Menu());
    indicator.style.transform = 'translateX(0px)';
    const menu = document.querySelector('#menu');
    menu.style.animation = `${animation} 0.3s`;
  } else if (navbarLink === 'contact') {
    content.insertAdjacentElement('afterbegin', Contact());
    indicator.style.transform = 'translateX(100%)';
    const contact = document.querySelector('#contact');
    contact.style.animation = `${animation} 0.3s`;
  } else if (navbarLink === 'home') {
    content.insertAdjacentElement('afterbegin', Home());
    indicator.style.transform = 'translateX(-100%)';
    const home = document.querySelector('#home');
    home.style.animation = `${animation} 0.3s`;
  }
}

// Toggle navbar bottom border and remove the
// current section before loading the selected one
const navItem = document.querySelectorAll('#header a');
navItem.forEach((item) => {
  item.addEventListener('click', function () {
    let activeTab = document.querySelectorAll('.active');
    if (activeTab[0] === item) return;

    let activePage = document.querySelector(`#${activeTab[0].dataset.page}`);
    if (activePage !== null) {
      activePage.remove();
    }
    activeTab[0].classList.remove('active');
    item.classList.add('active');
    const offset = item.dataset.tab - activeTab[0].dataset.tab;
    loadSection(item.dataset.page, offset);
  });
});
