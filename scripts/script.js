'use strict';

const navigation = document.querySelector('.navigation');
const button = document.querySelector('.navigation__button');

button.addEventListener('click', () => {
  navigation.classList.toggle('navigation--open');
});
