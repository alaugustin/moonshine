import './styles.scss';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = 'Hello world.';

  return element;
}

document.body.appendChild(component());
