'use strict'

let logo = document.querySelector('.logo__title');

let burgerBtn = document.querySelector('.burger__menu');
let linksBlock = document.querySelector('.links__block');
let navBar = document.querySelector('#navBar');
let navCont = document.querySelector('.logo__block');

let images = document.querySelectorAll('img[data-src]');
let imagesArray = [...images];

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active__burger');
	linksBlock.classList.toggle('shown');
	navBar.classList.toggle('navShown');
	navCont.classList.toggle('contShown');
})

imagesArray.forEach(function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
	img.removeAttribute('data-src');
	};
});