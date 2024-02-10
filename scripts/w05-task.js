/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples'); // Assuming 'temples' is the ID of the HTML div element

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        // Create HTML <article> element
        const article = document.createElement('article');

        // Create HTML <h3> element and add templeName property
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // Create HTML <img> element and add imageUrl and location properties
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append <h3> and <img> elements to <article> element
        article.appendChild(h3);
        article.appendChild(img);

        // Append <article> element to global templesElement variable
        templesElement.appendChild(article);
    });
};

// Sample usage of displayTemples function with templeList
const sampleTempleData =
[
    {
      "templeName": "Aba Nigeria",
      "location": "Aba, Nigeria",
      "dedicated": "2005, August, 7",
      "area": 11500,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      "templeName": "Cedar City Utah",
      "location": "Cedar City, Utah, United States",
      "dedicated": "2017, December, 10",
      "area": 42657,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/cedar-city-utah/400x225/Cedar-City-1978603.jpg"
    },
    {
      "templeName": "Manti Utah",
      "location": "Manti, Utah, United States",
      "dedicated": "1888, May, 21",
      "area": 74792,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      "templeName": "Payson Utah",
      "location": "Payson, Utah, United States",
      "dedicated": "2015, June, 7",
      "area": 96630,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      "templeName": "Yigo Guam",
      "location": "Yigo, Guam",
      "dedicated": "2020, May, 2",
      "area": 6861,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      "templeName": "Provo City Center",
      "location": "Provo, Utah, United States",
      "dedicated": "2016, March, 20",
      "area": 85084,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
    },
    {
      "templeName": "Provo Utah",
      "location": "Provo, Utah, United States",
      "dedicated": "1972, February, 9",
      "area": 130825,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-utah/400x250/provo-temple-lds-890642-wallpaper.jpg"
    },
    {
      "templeName": "Winter Quarters Nebraska",
      "location": "Florence, Nebraska, United States",
      "dedicated": "2001, April, 22",
      "area": 16000,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
    },
    {
      "templeName": "Salt Lake",
      "location": "Salt Lake City, Utah, United States",
      "dedicated": "1893, April, 6",
      "area": 403000,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
    },
    {
      "templeName": "The Hague Netherlands",
      "location": "Zoetermeer, Netherlands",
      "dedicated": "2019, September, 8",
      "area": 10500,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/the-hague-netherlands/2019/400x250/3-hague-netherlands-temple-1088316.jpg"
    },
    {
      "templeName": "St. George Utah",
      "location": "St. George, Utah, United States",
      "dedicated": "1877, April, 6",
      "area": 142000,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/1280x800/st-george-temple-lds-149536-wallpaper.jpg"
    },
    {
      "templeName": "Washington D.C.",
      "location": "Kensington, Maryland, United States",
      "dedicated": "1974, November, 19",
      "area": 156558,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      "templeName": "Jordan River Utah",
      "location": "South Jordan, Utah, United States",
      "dedicated": "1981, November, 16",
      "area": 148236,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_f5579d41-7344-4498-a589-4017ba5fcc91.jpg"
    },
    {
      "templeName": "Barranquilla Colombia",
      "location": "Barranquilla, Colombia",
      "dedicated": "2018, December, 9",
      "area": 25300,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/barranquilla-colombia/400x250/2-Barranquilla-Columblia-Temple-2135201.jpg"
    },
    {
      "templeName": "Lima Perú",
      "location": "Lima, Perú",
      "dedicated": "1986, January, 10",
      "area": 9600,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      "templeName": "Logan Utah",
      "location": "Logan, Utah, United States",
      "dedicated": "1884, May, 17",
      "area": 119619,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/logan-utah/400x250/logan-temple-768119-wallpaper.jpg"
    },
    {
      "templeName": "Vernal Utah",
      "location": "Vernal, Utah, United States",
      "dedicated": "1997, November, 2",
      "area": 38771,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vernal-utah/400x250/vernal-temple-lds-82531-wallpaper.jpg"
    },
    {
      "templeName": "Mexico City Mexico",
      "location": "Mexico City, Mexico",
      "dedicated": "1983, December, 2",
      "area": 116642,
      "imageUrl": "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
  ]
// Call the displayTemples function with the sample data
displayTemples(sampleTempleData);


/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        // Fetch temple data
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        // Convert fetch response to JavaScript object and assign to templeList
        templeList = await response.json();

        // Call displayTemples with the retrieved data
        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

/* reset Function */
const reset = () => {
    // Clear all <article> elements from templesElement
    templesElement.innerHTML = "";
};


/* filterTemples Function */
const filterTemples = (temples) => {
    // Call reset to clear the output
    reset();

    // Get the value of the HTML element with ID 'filtered' (the pulldown menu)
    const filter = document.getElementById('filtered').value;

    // Use a switch statement to filter temples based on the selected value
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'nonutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

// Call the getTemples function at the end to fetch and display temple data
getTemples();
