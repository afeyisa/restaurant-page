

export default function about (parentElementId) {
    const parentElement = document.getElementById(parentElementId);

    // About Us Section
    const aboutTitle = document.createElement('h2');
    aboutTitle.textContent = 'About Us';
    parentElement.appendChild(aboutTitle);

    const aboutDescription1 = document.createElement('p');

    aboutDescription1.textContent = `Welcome to tina restaurant, where we serve the finest 
    cuisine in a cozy and elegant atmosphere. Our mission is to provide an unforgettable
     dining experience through our exceptional food and outstanding service.`;

    parentElement.appendChild(aboutDescription1);

    const aboutDescription2 = document.createElement('p');
    aboutDescription2.textContent = `Our head chef, Tina, brings years of culinary
     expertise and a passion for creating delectable dishes that will tantalize your taste buds. 
     We pride ourselves on using fresh, locally-sourced ingredients to craft our unique menu offerings.`;

    parentElement.appendChild(aboutDescription2);

    // Contact Us Section
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    parentElement.appendChild(contactTitle);

    const addressInfo = document.createElement('p');
    addressInfo.textContent = 'Address: 123 Main Street, City, Country';
    parentElement.appendChild(addressInfo);

    const emailInfo = document.createElement('p');
    emailInfo.textContent = 'Email: info@tinarestaurant.com';
    parentElement.appendChild(emailInfo);

    // Social Media Links
    const socialMediaDiv = document.createElement('div');
    socialMediaDiv.classList.add('social-media');

    const facebookLink = document.createElement('a');
    facebookLink.href = 'https://facebook.com';
    facebookLink.textContent = '@Facebook';
    socialMediaDiv.appendChild(facebookLink);

    const instagramLink = document.createElement('a');
    instagramLink.href = 'https://instagram.com';
    instagramLink.textContent = '@Instagram';
    socialMediaDiv.appendChild(instagramLink);

    const twitterLink = document.createElement('a');
    twitterLink.href = 'https://twitter.com';
    twitterLink.textContent = '@Twitter';
    socialMediaDiv.appendChild(twitterLink);

    parentElement.appendChild(socialMediaDiv);
}


