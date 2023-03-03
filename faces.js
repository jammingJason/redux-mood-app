const h1 = document.querySelector('h1');
const grimacing = document.querySelector('#grimacing');
const blushing = document.querySelector('#blushing');
const angry = document.querySelector('#angry');
const nervous = document.querySelector('#nervous');
const reset = document.querySelector('#reset');
const faceHolder = document.querySelector('#faceHolder');
const random = document.querySelector('#random');

const changeFace = (type) => {
  store.dispatch({ type: type.toUpperCase() });
  const state = store.getState();
  h1.innerHTML = state.face;
};

const randomFace = () => {
  let type = '';
  const rndNum = Math.floor(Math.random() * 5);
  console.log(rndNum);
  switch (rndNum) {
    case 1:
      type = 'grimacing';
      break;

    case 2:
      type = 'blushing';
      break;

    case 3:
      type = 'angry';
      break;

    case 4:
      type = 'nervous';
      break;

    default:
      type = 'reset';
      break;
  }
  changeFace(type);
};

random.addEventListener('click', (evt) => {
  randomFace();
});

grimacing.addEventListener('click', (evt) => {
  changeFace(evt.target.id);
  faceHolder.style.background = 'lightgreen';
});

blushing.addEventListener('click', (evt) => {
  changeFace(evt.target.id);
  faceHolder.style.background = 'pink';
});

angry.addEventListener('click', (evt) => {
  changeFace(evt.target.id);
  faceHolder.style.background = 'red';
});

nervous.addEventListener('click', (evt) => {
  changeFace(evt.target.id);
  faceHolder.style.background = 'yellow';
});

reset.addEventListener('click', (evt) => {
  changeFace(evt.target.id);
  faceHolder.style.background = null;
});
