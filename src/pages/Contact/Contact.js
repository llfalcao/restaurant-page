import restaurant from '../../assets/images/shawnanggg-restaurant.jpg';

const Contact = function () {
  const image = document.createElement('div');
  image.classList.add('bg');

  const imageCredits = `
      <span class="credits">
        Photo by
        <a href="https://unsplash.com/photos/nmpW_WwwVSc" alt="@shawnanggg" target="_blank">
          @shawnanggg</a>
        on
        <a href="https://unsplash.com" alt="Unsplash" target="_blank">Unsplash</a>
      </span>
  `;

  const textContent = `
    <section class="text-content">  
      <h1>We'd love to hear your feedback!</h1>
      <h2>Let us know what you liked about your last visit, or how we can improve our services.</h2>
    </section>
  `;

  // Form fields
  const fields = `
    <p>Contact Us</p>
    <div>
      <label for="name">Name:</label>
      <input type="text" name="name" id="name" required />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" name="email" id="email" required />
    </div>
    <div>
      <label for="message">Message:</label>
      <textarea id="message" name="nessage" rows="4" cols="50" required></textarea>
    </div>
    <div>
      <button type="submit" value="Submit">Submit</button>
    </div>
  `;

  const form = document.createElement('form');
  form.classList.add('form');
  form.insertAdjacentHTML('beforeend', fields);

  const contact = document.createElement('div');
  contact.id = 'contact';
  contact.appendChild(image);
  contact.insertAdjacentHTML('beforeend', imageCredits);
  contact.insertAdjacentHTML('beforeend', textContent);
  contact.appendChild(form);

  ['mouseover', 'mouseleave'].forEach((event) =>
    contact.addEventListener(
      event,
      function showCredits(e) {
        const credits = document.querySelector('#contact .credits');
        if (e.type === 'mouseover') {
          credits.classList.add('visible');
        } else {
          credits.classList.remove('visible');
        }
      },
      false
    )
  );

  form.addEventListener('input', (e) => {
    const btn = document.querySelector('.form button');
    if (
      document.querySelector('#name').value !== '' &&
      document.querySelector('#email').value !== '' &&
      document.querySelector('#message').value !== ''
    ) {
      btn.style.backgroundColor = '#da7803';
    } else {
      btn.style.backgroundColor = '#101112';
    }
  });

  return contact;
};

export default Contact;
