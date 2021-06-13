import Particle from './Particle.js';
import { randomInt, getContext } from './util.js';

let nParticles = 100;
const particles = [];
const ctx = getContext();

let canvas = document.querySelector('canvas');

canvas.style.background = '#fff';
canvas.width = window.innerWidth;
canvas.height = innerHeight;


for (let i = 0; i < nParticles; i++) {
    let radio = 1;
    let x = randomInt(radio * 2, canvas.width - radio * 2);
    let y = randomInt(radio * 2, canvas.height - radio * 2);
    particles.push(new Particle(x, y, radio));
}


function animation() {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => particle.update(particles));
}

animation();

const gitHubApi = 'https://api.github.com/users/jeanToru';
const open = document.querySelector('.open');
const alertContainer = document.getElementById('alert__Container');

function doomCreate(info) {
  const list = document.querySelector('.list');
  const content = `
  <li>Name: <a href="https://github.com/jeanToru" target="_black" class= "linkApi">${info.name}</a></li>
  <li>Follower: ${info.followers}</li>
  <li>Following: ${info.following}</li>
  <li>Repositories: ${info.public_repos}</li>
  <li>Twitter: <a href="https://twitter.com/JeanBro92338197" target="_black" class= "linkApi">${info.twitter_username}</a></li>
  `;
  list.innerHTML = content;
}

function createInfo() {
  fetch(gitHubApi)
    .then((response) => response.json())
    .then((data) => {
      doomCreate(data);
    });
}

createInfo();

open.addEventListener('click', () => {
  alertContainer.innerHTML = `
    <div class="alert">
    <img src="img/check.png" alt="">
    <h3>Datos enviados</h3>
    <button class="send" id="close">ok</button>
    </div>`;
  alertContainer.classList.add('show');
  const close = document.getElementById('close');

  close.addEventListener('click', () => {
    alertContainer.classList.remove('show');
  });
});