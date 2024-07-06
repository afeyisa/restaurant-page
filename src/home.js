
import resImage from'./assets/restaurant-svgrepo-com.svg'
export default function home (parentElementId) {
    const parentElement = document.getElementById(parentElementId);

    // Hero Section
    const heroImg = document.createElement('img');
    heroImg.style = "width:80%; height:100px"
    heroImg.src = resImage;
    heroImg.alt = 'Restaurant Image';
    parentElement.appendChild(heroImg);

    const heroTitle = document.createElement('h1');
    heroTitle.textContent = 'A Taste of Elegance';
    parentElement.appendChild(heroTitle);

    // Reservations Section
    const reservationsTitle = document.createElement('h2');
    reservationsTitle.textContent = 'Reservations';
    parentElement.appendChild(reservationsTitle);

    const reservationsDescription = document.createElement('p');
    reservationsDescription.textContent = 'Reserve your table online or call us at (123) 456-7890.';
    parentElement.appendChild(reservationsDescription);

    const openingHours = document.createElement('p');
    openingHours.textContent = 'We are open from Monday to Saturday, 5 PM to 10 PM.';
    parentElement.appendChild(openingHours);

    // Customer Reviews Section
    const reviewsTitle = document.createElement('h2');
    reviewsTitle.textContent = 'Customer Reviews';
    parentElement.appendChild(reviewsTitle);

    const reviews = [
        '"Best dining experience ever! The food was amazing and the service was impeccable."',
        '"A gem of a restaurant. Highly recommend the signature dishes!"'
    ];

    reviews.forEach(review => {
        const reviewBlockquote = document.createElement('blockquote');
        reviewBlockquote.textContent = review;
        parentElement.appendChild(reviewBlockquote);
    });
}



        
 
