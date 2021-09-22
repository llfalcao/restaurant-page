import githubLogo from '../../assets/github/GitHub-Mark-Light-120px-plus.png';

const Footer = function () {
  const image = new Image();
  image.src =
    'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9JzMwMHB4JyB3aWR0aD0nMzAwcHgnICBmaWxsPSIjZGE3ODAzIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDc2IDY2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA3NiA2NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCByZXF1aXJlZEV4dGVuc2lvbnM9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSI+PC9mb3JlaWduT2JqZWN0PjxnIGk6ZXh0cmFuZW91cz0ic2VsZiI+PGc+PHBhdGggZD0iTTI1LjU5Myw0NS41NDFDMTQuMDgzLDQzLjcyMyw2LDM5LjQ1NCw2LDM0LjQ3N2MwLTIuMDg0LDEuNDIxLTQuMDQ1LDMuOTE2LTUuNzU0bC0yLjEwNC0zLjk1OSAgICAgQzIuOTE2LDI3LjQ1NywwLDMwLjgyMywwLDM0LjQ3N2MwLDEwLjg0MiwxMS42ODQsMjIuOTMsMjcuNjI1LDI2Ljc2QzI0Ljk0Niw1Ni41NTcsMjQuNjEsNTEuMDU0LDI1LjU5Myw0NS41NDF6IE02OS4wNjUsMjUuMjY4ICAgICBsLTEuNzQ3LDQuNEM2OS4wMzksMzEuMTQxLDcwLDMyLjc2Niw3MCwzNC40NzdjMCw2LjA0NC0xMS45MTksMTEuMDQzLTI3LjQyNCwxMS44NzZjLTAuNzY4LDUuMDQ1LTAuMTY5LDEwLjEyNiwyLjgxMywxNS40OTkgICAgIEM2Mi44NCw1OC45MDMsNzYsNDUuOTg1LDc2LDM0LjQ3N0M3NiwzMS4wNDcsNzMuNDI5LDI3Ljg3Miw2OS4wNjUsMjUuMjY4eiBNNDkuNzYyLDM2LjQ3M2MtMC4wNTksMC4wNzgsMC4yMjUsMC4wNzQsMC4yNTgsMC4wNTkgICAgIGM2LjEwMi0yLjc2Miw4LjE1NC05Ljg5MSw1LjUyMy0xNS43ODljLTAuNDU3LTEuMDIzLTEuMjYzLTIuMjAxLTIuMzc5LTMuMjU1Yy0wLjIwNCwxLjIwMy0wLjUwNCwyLjM3NC0wLjg1NCwzLjQ4OCAgICAgYzAuNDYxLDAuNzUyLDAuNzk2LDEuNTA5LDEuMDIzLDIuMTg4QzU1LjAwNCwyOC4xNDgsNTIuNjY2LDMyLjY5MSw0OS43NjIsMzYuNDczeiBNMzIuMDcsMjguOTQ3ICAgICBjLTEuMTIyLTIuNDgxLTEuNTI0LTUuMjM3LTEuMjAzLTguMDk5YzAuNDA3LTMuNjQ5LDIuMjE4LTYuNjc1LDQuOTI4LTguODdjLTAuMjU1LTAuODUxLTAuNjAyLTEuNjUxLTEuMDQ0LTIuMzkgICAgIGMtNy42NSw0LjM0My04Ljk2MiwxNS42MzQtMy43NzIsMjEuNDg2QzMxLjM0MywzMC4zNjQsMzEuNzA5LDI5LjY1MywzMi4wNywyOC45NDd6IE0zMi43NTIsNy4yMTcgICAgIGMtMC41NzYtMC40OTctMS4yMjItMC45MzktMS45MzktMS4zMjFDMTYuODUsOC44MTMsMTUuNTA2LDI5LjMxNSwyNy4yNDQsMzMuNTY4YzAuMTg2LDAuMDY4LDAuMzk1LTAuMTU0LDAuMjQ2LTAuMzI2ICAgICBjLTMuOTY3LTMuNjM3LTUuNTUzLTguNTQzLTQuOTcxLTEzLjc1MkMyMy4xNDEsMTMuOTI4LDI3LjM5Miw5LjQ5NCwzMi43NTIsNy4yMTd6IE02MS4xNjgsMjAuMjUgICAgIGMyLjAzMyw2LjA2OC0wLjgxNCwxMS42MDItNC4zNSwxNi4yMDdjLTAuMDcyLDAuMDk2LDAuMjcxLDAuMDkyLDAuMzE0LDAuMDcyYzcuNDI4LTMuMzYzLDkuOTI4LTEyLjA0NSw2LjcyMy0xOS4yMyAgICAgYy0xLjM2LTMuMDUxLTUuMjQxLTcuMjI3LTExLjEwOC03LjUyM2MwLjMxMywwLjkzNSwwLjUxMSwxLjg4NiwwLjYxMywyLjg0MkM1OC4wMjEsMTMuODY2LDYwLjI2NSwxNy41NTcsNjEuMTY4LDIwLjI1eiAgICAgIE00Ni4xNDEsMjcuNzI2YzIuMzI0LTQuODU0LDUuMzU5LTEwLjYxOSw0LjIzNC0xNi4yNDRDNDguOTQyLDQuMzIsNDIuNCwwLDM1LjksMGMtMS45ODMsMC0zLjg5MSwwLjMyNy01Ljc4NCwxLjAzOCAgICAgYy0yLjY1Ni0wLjM1Mi01LjQ0Ni0wLjA0OC04LjA3NCwxLjAwNGMtOC41MDgsMy40MDctMTEuMDgzLDEwLjM3NS0xMS4wOTEsMTcuODMzYy0wLjAwNiw1LjgxMiwyLjgxMywxMS4yMzQsOC4zODcsMTMuMjE1ICAgICBjMC4xODQsMC4wNjQsMC4zOTgtMC4xNiwwLjI0Ni0wLjMyNmMtNC40NTktNC4xMzktNS45MzItOS42NDMtNS4zMzQtMTUuNTE0YzAuNjAxLTUuOTAzLDQuODQ2LTEwLjUyMSw4LjI1LTEyLjE2NyAgICAgYzMuNzA4LTEuNzkyLDkuMjA4LTEuMDgzLDEyLjE2NywxYzQuODU3LDMuNDIsNi4wMywxMC45MjQsMi4wNDgsMTkuMDY5Yy0yLjEyNSw0LjM0NC00LjUsOC42MzMtNi4xNDEsMTMuMTk2ICAgICBjLTMuNTEyLDkuNzYyLTQuODU3LDIwLjE0OCwzLjkxNCwyNy40NDFjMC44NTIsMC43MDcsMS43MDEtMC41MzEsMS4yMDktMS4zMDljLTcuOTQxLTEyLjU1OS0zLjIyNS0yMy41MDQsMi42OTMtMzUuODYyICAgICBDNDAuNzE1LDIzLjc2Niw0My43NSwxOCw0Mi42MjUsMTIuMzc1Yy0wLjgxNC00LjA3MS0zLjIxMS03LjItNi4zNTctOS4xNTZjMi4zMzIsMC4xNzEsNC41OTQsMC44NzUsNi4xNDksMS45NzEgICAgIGM0Ljg1NywzLjQyLDYuMDMsMTAuOTI0LDIuMDQ4LDE5LjA2OWMtMi4xMjUsNC4zNDQtNC41LDguNjMzLTYuMTQxLDEzLjE5NWMtMy41MTIsOS43NjItNC44NTcsMjAuMTQ4LDMuOTE0LDI3LjQ0MSAgICAgYzAuODUyLDAuNzA3LDEuNzAxLTAuNTMxLDEuMjA5LTEuMzA5QzM1LjUwNiw1MS4wMjgsNDAuMjIzLDQwLjA4Myw0Ni4xNDEsMjcuNzI2eiI+PC9wYXRoPjwvZz48L2c+PC9zd2l0Y2g+PC9zdmc+';

  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('footer-logo');
  imageWrapper.appendChild(image);

  const locations = `
    <div class="location">
      <p>Trost</p>
      <p>850 Rose St.</p>
      <p>Paradis PD 2000Y-139</p>
    </div>
    <div class="location">
      <p>Pieta</p>
      <p>47 Alphonse St.</p>
      <p>Org. Island 32149-125</p>
    </div>
  `;

  const contactInfo = `
    <div class="contact-info">
      <p>Email: contact@reserved.com</p>
      <p>Phone: +3-71121-2051</p>
    </div>
  `;

  const githubInfo = `
    <a
      class="github-info"
      href="https://github.com/llfalcao"
      target="_blank"
      alt="GitHub - llfalcao"
    >
      <figure>
        <img src="${githubLogo}" alt="GitHub Logo" />
      </figure>
      <span>llfalcao</span>
    </a>
  `;

  const footer = document.createElement('div');
  footer.id = 'footer';
  footer.appendChild(imageWrapper);
  footer.insertAdjacentHTML('beforeend', locations);
  footer.insertAdjacentHTML('beforeend', contactInfo);
  footer.insertAdjacentHTML('beforeend', githubInfo);

  return footer;
};

export default Footer;
