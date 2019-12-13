//  Request
let getJokes = () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(response => renderJoke(response));
}

getJokes();

// Render
let joke = document.querySelector(".joke");
let renderJoke = (data) => {
  joke.insertAdjacentHTML('afterbegin', `<img src="${data.icon_url}"><p>${data.value}</p>`)
}
// Button action
let btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  joke.textContent = '';
  getJokes();
});
