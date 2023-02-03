console.log('Sample JavaScript #5 HW #17');

let container = null;
let prevIndicator = null;


function createStyle() {
  const styleContainer = document.createElement('style');
  styleContainer.innerHTML = `
   .slides {
    position: relative;
    height: 250px;
    padding: 0;
    list-style-type: none;
    margin-top: 0;
    margin-bottom: 1em;
    user-select: none;
    }

    .slides__item{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;  
    }

    .slides__item {
    font-size: 40px;
    padding: 40px;
    box-sizing: border-box;
    background: #B6E8F3;
    }

    .indicators,
    .controls {
    display: flex;
    gap: 1em;
    margin-bottom: 1em;
    }

    .indicators__item,
    .controls__item {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid gray;
    border-radius: 2em;
    padding: 0.5em 1em;
    min-width: 100px;
    min-height: 30px;
    user-select: none;
    background-color: #cccccc;
    }
    `;
  container.appendChild(styleContainer);
}

function createContainer() {

  const carouselContainer = document.createElement('div');
  carouselContainer.setAttribute('class', 'carousel')
  carouselContainer.setAttribute('id', 'carousel')

  document.body.appendChild(carouselContainer)

  container = document.querySelector('#carousel')
}

function createSlides(n) {
  const slidesList = document.createElement('ul');
  slidesList.setAttribute('class', 'slides');

  for (i = 0; i < n; i++) {
    slideItem = document.createElement('li');
    let slideLink = document.createElement('a');

    slideItem.setAttribute(
      'class',
      i === 0 ? 'slides__item active' : 'slides__item'
    );
    slideLink.setAttribute('href', '#');
    slideItem.appendChild(slideLink);
    slidesList.appendChild(slideItem);
  }

  container.appendChild(slidesList);
}

function createIndicators(n) {
  const indicators = document.createElement('div');
  indicators.setAttribute('class', 'indicators');

  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement('span');

    indicatorsItem.setAttribute(
      'class',
      i === 0 ? 'indicators__item active' : 'indicators__item'
    );

    indicatorsItem.setAttribute('data-slide-to', 'i');
    indicators.appendChild(indicatorsItem);
  }

  container.appendChild(indicators);
}

function createControls() {

  const controls = document.createElement('div');
  controls.setAttribute('class', 'controls');

  for (i = 0; i < 3; i++) {
    let controlsItem = document.createElement('div');
    let controlsIcon = document.createElement('i');
    let defItemClass = 'controls__item';
    let defIconClass = 'fas';

    switch (i) {
      case 0:
        controlsItem.setAttribute('class', `${defItemClass} controls__prev`);
        controlsIcon.setAttribute('class', `${defIconClass} fa-chevron-left`);
        break;
      case 1:
        controlsItem.setAttribute('class', `${defItemClass} controls__next`);
        controlsIcon.setAttribute('class', `${defIconClass} fa-chevron-right`);
        break;
      case 2:
        controlsItem.setAttribute('class', `${defItemClass} controls__pause`);
        controlsIcon.setAttribute('class', `${defIconClass} fa-play`);
        break;
    }
    controlsItem.appendChild(controlsIcon);
    controls.appendChild(controlsItem);
  }
  container.appendChild(controls);

}

function indicatorsHandler(e) {
  let target = e.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (prevIndicator !== null) {
      prevIndicator.removeAttribute('style');
    }

    prevIndicator = target;

  }
}

function controlsHandler(e) {
  let target = e.target;

  let slides = document.getElementsByTagName('li');

  for (let i = 0; i < 5; i++) {
    if (target.classList.contains('controls__prev')) {
      slides[i].style.background = 'blue';
    }

    if (target.classList.contains('controls__next')) {
      slides[i].style.background = 'yellow';
    }
  }
}

function indicate() {
  let indicatorsContainer = document.querySelector('div.indicators');
  indicatorsContainer.addEventListener('click', indicatorsHandler);
}

function changeColor() {
  let contorlsBtn = document.querySelector('div.controls');
  contorlsBtn.addEventListener('click', controlsHandler);
}

function createCarousel(slidesCount = 5) {
  createContainer();
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls(3);
  createStyle();
  indicate();
  changeColor();
}

createCarousel();

