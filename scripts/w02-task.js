/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Element Variables */
const fullName = 'Eme Ifeanyi';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/eme.jpeg';



/* Step 3 - Adding content to document */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profileImage');


/* Step 4 - Array */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

const favFoods = ['Bread and Tea', 'Nigeria Jellof', 'Fried Rice and Chicken',
'Egusi Soup'];
const singleFavoriteFood = 'Bread and Tea';
favFoods.push(singleFavoriteFood);

foodElement.innerHTML += favFoods.join('<br>');
favFoods.shift();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
favFoods.pop();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;










































