// creating variables to change the background image
const container = document.getElementById('container');
const mountainbackground = document.getElementById('mountain-background');
const forestbackground = document.getElementById('forest-background');

// funtion to get a new quote
const newquotehandler = async (event) => {
    event.preventDefault();
    // refresh page
    document.location.replace('/quotes');
}

mountainbackground.addEventListener('click', async (event) => {
    changeBackground('/images/mountains.jpg')
});

forestbackground.addEventListener('click', async (event) => {
    changeBackground('/images/forest.jpg')
});