// class Books {
//     constructor (title, author, pages){
//         this.title = title;
//         this.author = author;
//         this. pages = pages;
//     }
// };

// if (pages === 0){
//     this.pagesRead = 'Not yet read'
// }else{
//     this.pagesRead = 'Has been read'
// };

// let firstUser = new Books ('What do you know about classes?', 'Victoria Johnson', 45);
// let secondUser = new Books ('What do you know about classes?', 'Victoria Johnson', 0);
// let thirdUser = new Books ('What do you know about classes?', 'Victoria Johnson', 20);


// MENU SHOW Y HIDDEN
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

// MENU SHOW
// Validate if constant exists
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
// Validate if constant exists
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ACCORDION SKILLS
// QUALIFICATION TABS
// SERVICES MODAL
// PORTFOLIO SWIPER
// TESTIMONIAL