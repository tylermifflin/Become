// creating variables to change the background image
const container = document.getElementById('container');
const images = ['/images/kalalaubeachkaui.jpg', '/images/mesaarch.jpg', '/images/montrotuiridge.jpg', 
'/images/mtsuperiorfall.jpg', '/images/priestlakenorthernlights.jpg', '/images/reflectioncanyon.jpg',
'/images/skypond.jpg', '/images/thewave.jpg']
const randomimage = images[Math.floor(Math.random() * images.length)];
container.style.backgroundImage = `url(${randomimage})`;

// funtion to get a new quote
const newquotehandler = async (event) => {
    event.preventDefault();
    // refresh page
    document.location.replace('/quotes');
}

const changeBackground = async (image) => {
    container.style.backgroundImage = `url(${image})`;
}

document
    .querySelector('#new-quote')
    .addEventListener('click', newquotehandler);