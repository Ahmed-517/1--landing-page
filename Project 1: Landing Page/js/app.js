/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// <nav> Element
let navBar = document.getElementById('navbar__list');

// Get Number of Sections except the header
let n = document.getElementsByTagName("main")[0].childElementCount - 1;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Fill Sections
window.onload = function() {
    // Since all sections have the same content
    // We can make loop to fill them
    for (let i = 1; i <= n; i++) {
        let section = document.querySelector(`#section${i} .landing__container`);
        section.innerHTML =
        `<h2>Section ${i}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>

        <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
        `;
    }
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
(function () {
    for (let i = 1; i <= n; i++) {
        let list = document.createElement('li');
        let menuLink = document.createElement('a');

        // Add ( class = "menu__link" & text ) to the 'a' element
        menuLink.innerText = `Section ${i}`;
        menuLink.className = `menu__link section${i}`;

        navBar.appendChild(list);
        list.appendChild(menuLink);
    }
}());   // Self-Invoking Function

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

const links = document.querySelectorAll('#navbar__list li a');
links.forEach(link => {
    link.addEventListener('click', function handleClick(event) {
        event.preventDefault();
        document.querySelector("[data-nav='"+ event.target.innerText +"']").scrollIntoView({
            behavior: 'smooth'
       });
    });
});

/*
    Or we can use anchor IDs
*/
    // const anchors = document.getElementsByTagName('a');
    // for (var i = 0; i<n; i++) {
    //     anchors[i].href = `#section${i+1}`;
    // }


// Set sections as active
const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('ul li');
window.addEventListener('scroll', () => {
  
    // loop through each section
    sections.forEach((section, index) => {
  
      // top distance of the section in pixels
      const pxTop = section.getBoundingClientRect().top;
      
      if (pxTop > 50 && pxTop < 200) {
        // sections.classList.remove('your-active-class');
        section.classList.add('your-active-class');
        navLink[index].classList.add('active-nav-class');
    }
    else {
        section.classList.remove('your-active-class');
        navLink[index].classList.remove('active-nav-class');
      }
    });
});