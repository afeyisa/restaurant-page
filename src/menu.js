
import image from './assets/image.png'


export default function menus (parentElementId) {
    const parentElement = document.getElementById(parentElementId);

    // Menu Highlights Section
    const menuHighlightsTitle = document.createElement('h2');
    menuHighlightsTitle.textContent = 'Menu Highlights';
    parentElement.appendChild(menuHighlightsTitle);

    const dishes = [
        {
            imgSrc: image,
            imgAlt: 'Dish Image',
            title: 'Signature Dish 1',
            description: '$40'
        },
        {
            imgSrc: image,
            imgAlt: 'Dish Image',
            title: 'Signature Dish 2',
            description: '$40'
        }
    ];

    dishes.forEach(dish => {
        const dishDiv = document.createElement('div');
        dishDiv.classList.add('dish');

        const dishImg = document.createElement('img');
        dishImg.src = dish.imgSrc;
        dishImg.alt = dish.imgAlt;

        const dishTitle = document.createElement('h3');
        dishTitle.textContent = dish.title;

        const dishDescription = document.createElement('p');
        dishDescription.textContent = dish.description;

        dishDiv.appendChild(dishImg);
        dishDiv.appendChild(dishTitle);
        dishDiv.appendChild(dishDescription);

        parentElement.appendChild(dishDiv);
    });

    const viewFullMenuLink = document.createElement('a');
    viewFullMenuLink.href = 'menu.html';
    viewFullMenuLink.classList.add('btn');
    viewFullMenuLink.textContent = 'View Full Menu';
    parentElement.appendChild(viewFullMenuLink);

    // Upcoming Events Section
    const upcomingEventsTitle = document.createElement('h2');
    upcomingEventsTitle.textContent = 'Upcoming Events';
    parentElement.appendChild(upcomingEventsTitle);

    const upcomingEventsDescription = document.createElement('p');
    upcomingEventsDescription.textContent = 'Join us for a wine tasting event on July 20th. Experience a selection of fine wines paired with gourmet appetizers.';
    parentElement.appendChild(upcomingEventsDescription);
}


