import storyImage from '../../assets/images/clem-onojeghuo-story.jpg';

const Story = function () {
  const title = document.createElement('h2');
  title.innerText = 'Our story';

  const paragraph = document.createElement('p');
  paragraph.insertAdjacentHTML(
    'beforeend',
    `
      <p>
        Since our humble beginnings in 2021 with a small building in Trost,
        re:Served has worked to serve the best food you can get. In a short
        time, we became well known with a wide range of clients, including
        families, seniors, and business experts.
      </p>
      <p>
        We welcome you to sit back and unwind while our chefs set you up a
        savory meal, utilizing the best and freshest ingredients.
      </p>
    `
  );

  const textContent = document.createElement('article');
  textContent.classList.add('story--text-content');
  textContent.appendChild(title);
  textContent.appendChild(paragraph);

  const image = new Image();
  image.src = storyImage;

  const imageCredits = `
    <span class="credits">
      Photo by
      <a href="https://unsplash.com/photos/zlABb6Gke24" alt="Clem Onojeghuo" target="_blank">
        Clem Onojeghuo</a>
      on
      <a href="https://unsplash.com" alt="Unsplash" target="_blank">Unsplash</a>
    </span>
  `;

  const figure = document.createElement('figure');
  figure.classList.add('figure');
  figure.appendChild(image);
  figure.insertAdjacentHTML('beforeend', imageCredits);

  const story = document.createElement('div');
  story.classList.add('story');
  story.appendChild(textContent);
  story.appendChild(figure);

  ['mouseover', 'mouseleave'].forEach((event) =>
    figure.addEventListener(
      event,
      function showCredits(e) {
        const credits = document.querySelector('.story .credits');
        if (e.type === 'mouseover') {
          credits.classList.add('visible');
        } else {
          credits.classList.remove('visible');
        }
      },
      false
    )
  );

  return story;
};

export default Story;
