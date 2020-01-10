'use strict';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.js-switch-input'),
};

let themeMode = localStorage.getItem('theme');

if (themeMode) {
  refs.body.classList.add(themeMode);
  if (themeMode === Theme.DARK) {
    refs.switch.setAttribute('checked', true);
  }
}

refs.switch.addEventListener('change', handleChangeTheme);

function handleChangeTheme() {
  if (!themeMode) {
    refs.body.classList.add(Theme.DARK);
    toSaveThemeMode(Theme.DARK);
    return;
  }

  if (themeMode === Theme.LIGHT) {
    refs.body.classList.replace('light-theme', 'dark-theme');
    toSaveThemeMode(Theme.DARK);
    return;
  }
  refs.body.classList.replace('dark-theme', 'light-theme');
  toSaveThemeMode(Theme.LIGHT);
}

function toSaveThemeMode(mode) {
  themeMode = mode;
  localStorage.setItem('theme', `${themeMode}`);
}
