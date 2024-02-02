/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Eme Ifeanyi",
    photo: "images/eme.jpeg",
    favoriteFood: [
        "Tea and bread",
        "Egusi Soup",
        "Spaghetti",
        "Buns and Puff-Puff"
    ],
    hobbies: [
        "Reading",
        "Coding",
        "Listening to Wholesome Music", 
        "Going on Adventures",
        "Travelling",
        "Helping",
        "Dancing"
        
    ],
    placesLived: []
};
myProfile.placesLived.push({
    place: 'Nigeria Abuja, Apo',
    length: '2 years'
  });
  
  // Add additional object literals with appropriate values to the placesLived array for each place you have lived.
  myProfile.placesLived.push(
    {
      place: 'Nigeria Umuahia, 12 miles',
      length: '8 years'
    },
    {
      place: 'Nigeria Lagos, Apapa',
      length: '1 year'
    },
    {
        place: "Nigeria Lagos, Ikorodu",
        length: "1 year"
    },
    {
      place: 'Ghana Accra, Christiansborg',
      length: "3 months"
    }
  );


/* Populate Profile Object with placesLive objects */

// Assign the value of the name property as the alt attribute of the HTML <img> with an ID of photo




/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    // Create an HTML <li> element
    let li = document.createElement('li');
    
    // Set the textContent of the <li> element to the value of the hobby
    li.textContent = food;
    
    // Append the <li> element as a child of the HTML <ul> element with an ID of hobbies
    document.querySelector('#favorite-foods').appendChild(li);
  });
  

/* Hobbies List */
// For each hobby in the hobbies property
myProfile.hobbies.forEach(hobby => {
    // Create an HTML <li> element
    let li = document.createElement('li');
    
    // Set the textContent of the <li> element to the value of the hobby
    li.textContent = hobby;
    
    // Append the <li> element as a child of the HTML <ul> element with an ID of hobbies
    document.querySelector('#hobbies').appendChild(li);
  });
  

/* Places Lived DataList */
// For each object in the placesLived property
myProfile.placesLived.forEach(place => {
    // Create an HTML <dt> element and put its place property in the <dt> element
    let dt = document.createElement('dt');
    dt.textContent = place.place;
  
    // Create an HTML <dd> element and put its length property in the <dd> element
    let dd = document.createElement('dd');
    dd.textContent = place.length;
  
    // Append the HTML <dt> and <dd> elements to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });
  

