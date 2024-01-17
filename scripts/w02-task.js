/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Christian Uche';
const currentYear = new Date().getFullYear();
const profilePicture = "images/eme.jpeg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year')
var imageElement = document.getElementById('#profileImage')

/* Step 4 - Adding Content */
const favFoods = ['Tea and Bread', 'Egusi and Garri', 'Fried rice and Chicken',
'Jellof Rice'];
const singleFavoriteFood = 'Tea And Bread';
favFoods.push(singleFavoriteFood);
foodElement.innerHTML += favFoods.join('<br>');
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

/* Step 5 - Array */






