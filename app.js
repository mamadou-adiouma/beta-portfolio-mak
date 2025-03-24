const parentHTML = document.documentElement,
     themeBtn = document.getElementById('themeBtn'),
     checkTheme = document.getElementById('checkTheme');

let light = window.matchMedia('(prefers-color-scheme: light)').matches;
document.addEventListener('DOMContentLoaded', () => {
     if (!light) {
          parentHTML.dataset.theme = 'dark';
     } else {
          parentHTML.dataset.theme = 'light'
     }

     // const popUp = () => {
     //      setTimeout(() => {
     //           document.querySelector('.mssg').style.display = 'grid';
     //      }, 2000);
     // }

     // setTimeout(() => {
     //      document.querySelector('.mssg').style.display = 'none';
     // }, 10000);

     // window.addEventListener('DOMContentLoaded', popUp)
})