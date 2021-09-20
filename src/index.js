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
function loadSection(navbarLink) {
  const indicator = document.querySelector('.indicator');

  if (navbarLink === 'Menu') {
    content.insertAdjacentElement('afterbegin', Menu());
    indicator.style.transform = 'translateX(0px)';
  } else if (navbarLink === 'Contact') {
    content.insertAdjacentElement('afterbegin', Contact());
    indicator.style.transform = 'translateX(150px)';
  } else if (navbarLink === 'Home') {
    content.insertAdjacentElement('afterbegin', Home());
    indicator.style.transform = 'translateX(-150px)';
  }
}

// Toggle navbar bottom border and remove the
// current section before loading the selected one
const navItem = document.querySelectorAll('#header a');
navItem.forEach((item) => {
  item.addEventListener('click', function () {
    let currentTab = document.querySelectorAll('.active');
    if (currentTab[0] === item) return;
    let currentSection = document.querySelector(
      '#' + currentTab[0].dataset.page
    );
    currentTab[0].classList.remove('active');
    if (currentSection !== null) {
      currentSection.remove();
    }
    item.classList.add('active');
    loadSection(item.innerText);
  });
});
