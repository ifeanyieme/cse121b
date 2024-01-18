/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
const fullName = 'Eme Ifeanyi';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/eme.jpeg';

/* Step 2 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profileImage');



/* Step 3 - Element Variables */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 4 - Array */
const favFoods = ['Rice and Stew', 'Egusi and Semovita', 'Akara and Bread',
'Irish Potato'];
const singleFavoriteFood = 'Afang Soup';
favFoods.push(singleFavoriteFood);

foodElement.innerHTML += favFoods.join('<br>');
favFoods.shift();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
favFoods.pop();

foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;










































