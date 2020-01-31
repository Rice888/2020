; (function () {
  'use strict'
  let trigger, popup, mask, close;

  boot("#A", "#B");

  function boot(A, B) {
    trigger = document.querySelector(A);
    popup = document.querySelector(B);
    popup.lastElementChild.classList.add('close');
    close = document.querySelector('.close');


    initPopup();
    initMask();
    listenOpen();
    listenClose();

    console.dir(B)

  }

  function repositionPopup(xOffset = 0, yOffset = 0) {
    let width = popup.offsetWidth;
    let height = popup.offsetHeight;
    popup.style.left = window.innerWidth / 2 - width / 2 + xOffset + "px";
    popup.style.top = window.innerHeight / 2 - height / 2 + yOffset + "px";
    popup.style.bottom = null;


    document.addEventListener('click', (e) => {

      switch (e.target.dataset.position) {
        case 'leftTop':
          popup.style.left = xOffset + "px";
          popup.style.top = yOffset + "px";
          popup.style.bottom = null;
          popup.style.right = null
          break;
        case 'topCenter':
          popup.style.top = yOffset + "px";
          popup.style.left = window.innerWidth / 2 - width / 2 + "px";
          popup.style.right = null;
          popup.style.bottom = null;
          break;
        case 'rightTop':
          popup.style.top = yOffset + "px";
          popup.style.right = xOffset + "px";
          popup.style.left = null;
          popup.style.bottom = null;
          break;
        case 'leftCenter':
          popup.style.top = window.innerHeight / 2 - height / 2 + yOffset + "px";
          popup.style.left = xOffset + "px";
          popup.style.right = null;
          popup.style.bottom = null;
          break;
        case 'center':
          popup.style.top = window.innerHeight / 2 - height / 2 + yOffset + "px";
          popup.style.left = window.innerWidth / 2 - width / 2 + xOffset + "px";
          popup.style.right = null;
          popup.style.bottom = null;
          // popup.style.left = null;
          break;
        case 'rightCenter':
          popup.style.right = xOffset + "px";
          popup.style.top = window.innerHeight / 2 - height / 2 + yOffset + "px";
          // popup.style.right = null;
          popup.style.bottom = null;
          popup.style.left = null;
          break;
        case 'leftBottom':
          popup.style.left = xOffset + "px";
          popup.style.bottom = yOffset + "px";
          popup.style.top = null;
          popup.style.right = null;
          break;
          case 'bottom':
            popup.style.left = window.innerWidth / 2 - width / 2 + xOffset + "px";
            // popup.style.left = null;
            popup.style.bottom = yOffset + "px";
            popup.style.top = null;
            popup.style.right = null;
            break;
            case 'rightBottom':
              popup.style.right = xOffset + "px";
              popup.style.bottom = yOffset + "px";
              popup.style.top = null;
              popup.style.left = null;
              break;
          }
    });

  }



  function listenOpen() {
    trigger.addEventListener('click', (el) => {
      setHide(true);
      repositionPopup();
    });
  }

  function listenClose() {
    mask.addEventListener('click', () => {
      setHide(false);
    });
    close.addEventListener('click', () => {
      setHide(false);
    });
    window.addEventListener('keyup', (e) => {
      if (e.key == 'Escape' && e.ctrlKey) {
        console.dir(e);
        setHide(false);
      }
    });

  }

  function setHide(hidden = true) {
    mask.hidden = popup.hidden = !hidden;
  }

  function initPopup() {
    popup.classList.add('popup');
    trigger.classList.add('button');
    popup.hidden = true;

  }

  function initMask() {
    mask = document.createElement('div');
    mask.classList.add('mask');
    document.body.appendChild(mask);
    mask.hidden = true;

  }
  console.dir(popup);






})();