const contactForm = document.querySelector('#contact-form');
const nameInput = contactForm.querySelector('#name');
const emailInput = contactForm.querySelector('#email');

const errors = {
  name: '',
  email: '',
};

const onSubmitForm = (e) => {
  // prevent page reload
  e.preventDefault();

  if (nameInput.value === '') {
    errors.name = "This field can't be empty";
  } else {
    errors.name = '';
  }

  if (emailInput.value === '') {
    errors.email = "This field can't be empty";
  } else {
    errors.email = '';
  }

  if (errors.name !== '') {
    nameInput.classList.add('error');
    nameInput.nextElementSibling.textContent = errors.name;
  }

  if (errors.email !== '') {
    emailInput.classList.add('error');
    emailInput.nextElementSibling.textContent = errors.email;
  }

  if (errors.name === '') {
    nameInput.classList.remove('error');
    nameInput.nextElementSibling.textContent = '';
  }

  if (errors.email === '') {
    emailInput.classList.remove('error');
    emailInput.nextElementSibling.textContent = '';
  }

  if (errors.email === '' && errors.name === '') {
    nameInput.value = '';
    emailInput.value = '';
  }
};

contactForm.addEventListener('submit', onSubmitForm);
