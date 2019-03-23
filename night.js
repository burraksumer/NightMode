//Check if the local storage has the dark mode or light mode prefence.

document.addEventListener('DOMContentLoaded', (event) => {
    ((localStorage.getItem('mode') || 'dark') === 'dark') ? 
    document.querySelector('body').classList.add('dark') : 
    document.querySelector('body').classList.remove('dark')
  });

//Get the element and add the dark class to them.

  document.getElementById("moon").addEventListener("click", e => {
    localStorage.setItem('mode', (localStorage.getItem('mode') || 'dark') === 'dark' ? 'light' : 'dark')
    const elements = document.querySelectorAll("body, hr");
    elements.forEach(el => {
      if (localStorage.getItem('mode') === 'dark') {
        el.classList.add('dark') 
      } else {
        el.classList.remove('dark')
      }
    })
  });