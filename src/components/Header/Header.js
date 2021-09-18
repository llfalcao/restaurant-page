const Header = function () {
  const header = document.createElement('div');
  header.id = 'header';

  const company = document.createElement('div');
  company.classList.add('company');

  const logo = new Image();
  logo.src =
    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZGE3ODAzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNjQgNjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTIyLjg5OSwxOWgwLjIwMWMxLjYwMywwLDMuMTA5LTAuNjI0LDQuMjQyLTEuNzU3bDAuNTI0LTAuNTI0YzEuODc2LDIuNzQ1LDIuOTQxLDUuOTUyLDMuMDkzLDkuMzI1ICAgQzMxLjMwNSwyNi4wMiwzMS42NSwyNiwzMiwyNmMwLjMyMiwwLDAuNjQxLDAuMDIsMC45NiwwLjA0MWMtMC4xNTktMy45MDYtMS40MzMtNy42MDktMy42NjctMTAuNzQ4bDEuNDU4LTEuNDU4ICAgYzIuNDg4LDMuNjkxLDMuOTQ1LDcuOTY5LDQuMjAzLDEyLjQ3NmMwLjY5LDAuMTQxLDEuMzY4LDAuMzIzLDIuMDI0LDAuNTU3Yy0wLjE3MS01LjI0OC0xLjgzNC0xMC4yMzUtNC43ODQtMTQuNDc3TDMzLjU4NiwxMSAgIEwzMiw5LjQxNGwtMS4xNzIsMS4xNzJjLTAuNDI0LTAuNTEyLTAuODc0LTEuMDA2LTEuMzM4LTEuNDlMMzAuNTg2LDhMMjksNi40MTRMMjcuOTE0LDcuNUwyNi41LDYuMDg2TDI3LjU4Niw1TDI2LDMuNDE0ICAgTDI0LjkxNCw0LjVsLTMuMjA3LTMuMjA3bC0xLjQxNCwxLjQxNEwyMy41LDUuOTE0TDIxLjkxNCw3LjVsLTMuMjA3LTMuMjA3bC0xLjQxNCwxLjQxNEwyMC41LDguOTE0bC0wLjc0MywwLjc0MyAgIEMxOC42MjQsMTAuNzksMTgsMTIuMjk3LDE4LDEzLjg5OXYwLjIwMWMwLDIuMTM3LTAuODMyLDQuMTQ2LTIuMzQzLDUuNjU3TDMsMzIuNDE0djMuMTcybDE0LjI0My0xNC4yNDMgICBDMTguNzU0LDE5LjgzMiwyMC43NjMsMTksMjIuODk5LDE5eiBNMjMuNzA3LDE3LjcwN2wtMS40MTQtMS40MTRsMi43OTMtMi43OTNsMC42NDIsMC42NDJjMC4yNiwwLjI2LDAuNDk1LDAuNTM2LDAuNzM2LDAuODA4ICAgTDIzLjcwNywxNy43MDd6IE0yOS40LDEyLjAxNGwtMS41MjIsMS41MjJjLTAuMjQzLTAuMjcxLTAuNDc3LTAuNTQ5LTAuNzM2LTAuODA4TDI2LjUsMTIuMDg2bDEuNTY4LTEuNTY4ICAgQzI4LjUzMSwxMS4wMDQsMjguOTgsMTEuNDk5LDI5LjQsMTIuMDE0eiBNMjUuMDg2LDcuNUwyNi41LDguOTE0TDI0LjkxNCwxMC41TDIzLjUsOS4wODZMMjUuMDg2LDcuNXogTTIyLjA4NiwxMC41bDEuNDE0LDEuNDE0ICAgbC0yLjc5MywyLjc5M2wtMS40MTQtMS40MTRMMjIuMDg2LDEwLjV6Ij48L3BhdGg+PHBhdGggZD0iTTMwLjk0OSw1MUMzMC40MzUsNDQuMjk5LDI0LjgzLDM5LDE4LDM5UzUuNTY1LDQ0LjI5OSw1LjA1MSw1MWgyQzcuNTU4LDQ1LjQwMiwxMi4yNzIsNDEsMTgsNDFzMTAuNDQyLDQuNDAyLDEwLjk0OSwxMCAgIEgzMC45NDl6Ij48L3BhdGg+PHBhdGggZD0iTTUyLjkyLDUxaDIuMDIxYy0wLjQ5OS00LjQ5My00LjMxNi04LTguOTQxLThzLTguNDQyLDMuNTA3LTguOTQxLDhoMi4wMjFjMC40ODgtMy4zODcsMy40MDEtNiw2LjkyLTYgICBTNTIuNDMyLDQ3LjYxMyw1Mi45Miw1MXoiPjwvcGF0aD48cGF0aCBkPSJNMTMuMTAxLDUxaDkuNzk4Yy0wLjQ2NS0yLjI3OS0yLjQ4NC00LTQuODk5LTRTMTMuNTY2LDQ4LjcyMSwxMy4xMDEsNTF6Ij48L3BhdGg+PHBhdGggZD0iTTMzLjA1MSw1MWgyQzM1LjU1OCw0NS40MDIsNDAuMjcyLDQxLDQ2LDQxczEwLjQ0Miw0LjQwMiwxMC45NDksMTBoMkM1OC40MzUsNDQuMjk5LDUyLjgzLDM5LDQ2LDM5ICAgUzMzLjU2NSw0NC4yOTksMzMuMDUxLDUxeiI+PC9wYXRoPjxwYXRoIGQ9Ik00MS4xMDEsNTFoOS43OThjLTAuNDY1LTIuMjc5LTIuNDg0LTQtNC44OTktNFM0MS41NjYsNDguNzIxLDQxLjEwMSw1MXoiPjwvcGF0aD48cGF0aCBkPSJNMjQuOTIsNTFoMi4wMjFjLTAuNDk5LTQuNDkzLTQuMzE2LTgtOC45NDEtOHMtOC40NDIsMy41MDctOC45NDEsOGgyLjAyMWMwLjQ4OC0zLjM4NywzLjQwMS02LDYuOTItNiAgIFMyNC40MzIsNDcuNjEzLDI0LjkyLDUxeiI+PC9wYXRoPjxwYXRoIGQ9Ik0zLjEwMSw1M0MzLjU2NSw1NS4yNzksNS41ODUsNTcsOCw1N2g0OGMyLjQxNSwwLDQuNDM1LTEuNzIxLDQuODk5LTRIMy4xMDF6Ij48L3BhdGg+PHJlY3QgeD0iMTMiIHk9IjU5IiB3aWR0aD0iMzgiIGhlaWdodD0iMiI+PC9yZWN0PjxwYXRoIGQ9Ik0xOS42LDM3LjA4OGMwLjY4MSwwLjA3MywxLjM0NCwwLjIwNSwxLjk5NSwwLjM2NkMyMy4wOTMsMzMuMDY1LDI3LjI2MiwzMCwzMiwzMHM4LjkwNywzLjA2NSwxMC40MDUsNy40NTQgICBjMC42NTEtMC4xNjEsMS4zMTQtMC4yOTMsMS45OTUtMC4zNjZDNDIuNzE1LDMxLjc1OSwzNy42NzUsMjgsMzIsMjhTMjEuMjg1LDMxLjc1OSwxOS42LDM3LjA4OHoiPjwvcGF0aD48cGF0aCBkPSJNMzIsMzRjMy4xMzUsMCw1Ljc5NSwyLjA3Miw2LjY4NCw0LjkxOGMwLjU4Mi0wLjMyNywxLjE4OS0wLjYxMSwxLjgxNS0wLjg1OUMzOS4yNjMsMzQuNDg5LDM1Ljg2MywzMiwzMiwzMiAgIHMtNy4yNjMsMi40ODktOC40OTksNi4wNTljMC42MjYsMC4yNDgsMS4yMzMsMC41MzIsMS44MTUsMC44NTlDMjYuMjA1LDM2LjA3MiwyOC44NjUsMzQsMzIsMzR6Ij48L3BhdGg+PHBhdGggZD0iTTM2LjkwOSw0MC4wOTdDMzYuNDgxLDM3Ljc3MSwzNC40NDgsMzYsMzIsMzZzLTQuNDgxLDEuNzcxLTQuOTA5LDQuMDk3YzIuMTkzLDEuNjc5LDMuOTA2LDMuOTQzLDQuOTA5LDYuNTYzICAgQzMzLjAwMyw0NC4wMzksMzQuNzE2LDQxLjc3NiwzNi45MDksNDAuMDk3eiI+PC9wYXRoPjwvZz48L3N2Zz4=';

  const companyName = document.createElement('span');
  companyName.innerText = 'Plateholder';

  company.appendChild(logo);
  company.appendChild(companyName);

  const navbar = `
    <ul class="navbar">
      <div class="indicator"></div>
      <li><a class="active" href="#" data-page="home" alt="Home">Home</a></li>
      <li><a href="#" data-page="menu" alt="Menu">Menu</a></li>
      <li><a href="#" data-page="contact" alt="Contact">Contact</a></li>
    </ul>
  `;

  header.appendChild(company);
  header.insertAdjacentHTML('beforeend', navbar);

  return header;
};

export default Header;
