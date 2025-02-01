// burger
let burgerIcon = document.getElementById("burgerIcon");

//nav
let siteNav = document.getElementById("navigation");

// browser width

function _navControl() {
    let vpw = window.innerWidth; //result is a number
    console.log(vpw);

    
    if(vpw >= 650){
        burgerIcon.style.display = "none";
        siteNav.style.display = "flex";
       
    }else{
        
        burgerIcon.style.display = "block";
        siteNav.style.display = "none";
    }}
// on browser
window.addEventListener("resize", function(){_navControl(); });
// on load
window.addEventListener("load", function(){_navControl(); });




// define audio
let beepAudio = document.getElementById("beep")
console.log(beepAudio)
// burger icon - DONE BEFORE

// burger event sliding in and audio//
burgerIcon.addEventListener("click", function(){
    //play audio
   beepAudio.play();
   // show the navigation menu
   siteNav.style.display = "flex";
   //then with a slight delay animate it
   setTimeout(function(){
        siteNav.classList.add("slideIn");
   }, 100);
   
});

// audio when clicking on input text boxes//
function playbeepAudio() {
            var sound = document.getElementById('beep');
            sound.play();
        }

        // locate the input fields
        var inputs = document.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"]');

        // Attach event listener
        inputs.forEach(function(input) {
            input.addEventListener('focus', playbeepAudio);
        });




/// Select elements
const navigation = document.getElementById('navigation');
const heroSection =  document.getElementById('hero');
// const burgerIcon = document.getElementById('burgerIcon');
const portfolioLink = document.getElementById('portfolioLink');
const aboutLink = document.getElementById('aboutLink');
const servicesLink = document.getElementById('servicesLink');
const hireMeSection = document.getElementById('hireMe');
const servicesSection = document.getElementById('services');
const portfolioSection = document.getElementById('myprojects');

// Function to toggle navigation visibility (slide-in effect)
function toggleNav() {
    navigation.classList.toggle('slideIn');
    document.body.classList.toggle('nav-open');
}

// Event listener for the burger icon to toggle the navigation
burgerIcon.addEventListener('click', toggleNav);

// Event listeners for smooth scroll and closing the nav menu after clicking a link
aboutLink.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default anchor behavior
    hireMeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    toggleNav(); // Close the menu after selection
});

servicesLink.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default anchor behavior
    servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    toggleNav(); // Close the menu after selection
});

portfolioLink.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default anchor behavior
    portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    toggleNav(); // Close the menu after selection
});


homeLink.addEventListener('click', function (e) {
    e.preventDefault();  // Prevent default anchor behavior
    heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    toggleNav(); // Close the menu after selection
});



// // // locate project articles
// // const projects = document.querySelectorAll('.project');

// // //add event listeners
// // projects.forEach(project => {
// //     const title = project.querySelector('.project-title');

// //     // mouseover event to scale image and fade in titles
// //     project.addEventListener('mouseover', () => {
// //         project.style.transform = 'scale(1.08)';  //scale image
// //         title.style.opacity = '1';  // fade image
// //     });

// //     // mouseout event to undo the scale and remove title
// //     project.addEventListener('mouseout', () => {
// //         project.style.transform = 'scale(1)';  // undo scale
// //         title.style.opacity = '0';  // remove title
// //     });
// // });



// // locate project articles
// const projects = document.querySelectorAll('#myprojects > article');

// // add event listeners
// projects.forEach(project => {
//     const title = project.querySelector('.project-title');  // Assuming there's a title in each article

//     // mouseover event to zoom in the background and fade in titles
//     project.addEventListener('mouseover', () => {
//         project.style.transform = 'scale(1.1)';  // Zoom in the background image
//         title.style.opacity = '1';  // Fade in title (adjust if needed)
//     });

//     // mouseout event to undo the zoom and hide title
//     project.addEventListener('mouseout', () => {
//         project.style.transform = 'scale(1)';  // Reset zoom
//         title.style.opacity = '0';  // Hide title
//     });
// });



// // Select the "About" link and the "hireMe" section
// // const aboutLink = document.getElementById('aboutLink');
// // const hireMeSection = document.getElementById('hireMe');

// // Add event listener for the "About" link click
// aboutLink.addEventListener('click', (e) => {
//     e.preventDefault(); // Prevent the default link behavior (no page reload)
    
//     // Scroll to the "hireMe" section smoothly
//     hireMeSection.scrollIntoView({
//         behavior: 'smooth', // Smooth scroll
//         block: 'start'      // Scroll to the top of the "hireMe" section
//     });

//     // Add the 'visible' class to reveal the "hireMe" section
//     hireMeSection.classList.add('visible');
// });





// // Get the "About" link and "hireMe" section
// const aboutLink = document.getElementById('aboutLink');
// const hireMeSection = document.getElementById('hireMe');

// // Event listener for the "About" link click
// aboutLink.addEventListener('click', function (e) {
//     e.preventDefault(); // Prevent default anchor link behavior

//     // Scroll to the "hireMe" section
//     hireMeSection.scrollIntoView({
//         behavior: 'smooth', // Smooth scroll
//         block: 'start'      // Align the target element to the top
//     });

//     // Add the 'visible' class to fade in the "hireMe" section
//     hireMeSection.classList.add('visible');
// });







// Function to check if element is in the viewport
// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Get the #hireMe element
// const hireMeSection = document.getElementById('hireMe');

// // On scroll, check if the element is in the viewport
// window.addEventListener('scroll', function() {
//     if (isElementInViewport(hireMeSection)) {
//         hireMeSection.classList.add('visible');
//     }
// });


// // Function to check if element is in the viewport
// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// // Get elements
// const profilePic = document.querySelector('.profile-pic');
// const paragraph = document.querySelector('p');

// // On scroll, check if the elements are in the viewport
// window.addEventListener('scroll', function() {
//     if (isElementInViewport(profilePic)) {
//         profilePic.classList.add('in-view');
//     }
//     if (isElementInViewport(paragraph)) {
//         paragraph.classList.add('in-view');
//     }
// });

