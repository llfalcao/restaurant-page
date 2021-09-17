import Header from './components/Header';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './styles/app.scss';

const content = document.querySelector('#content');

content.appendChild(Header());
content.appendChild(Home());
content.appendChild(Footer());

// Toggle navbar border
const navItem = document.querySelectorAll('#header a');

navItem.forEach((item) => {
  item.addEventListener('click', function () {
    let current = document.querySelectorAll('.active');
    current[0].classList.remove('active');
    item.classList.add('active');
  });
});
