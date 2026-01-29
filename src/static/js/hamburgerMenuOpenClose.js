const hamburgerMenuButton = document.querySelector("#hamburger-menu-button");
const hamburgerMenu = document.querySelector("#hamburger-menu");
const hamburgerMenuOpenClassName = "hamburger-menu-open"; // From style-global.css

const hamburgerMenuOpenIcon = document.querySelector("#hamburger-menu-button-open-icon");
const hamburgerMenuCloseIcon = document.querySelector("#hamburger-menu-button-close-icon");
const hamburgerMenuIconDisplayClassName = "hamburger-menu-icon-display";

hamburgerMenuButton.addEventListener("click", () => {

    /* Toggle the class name that hides or displays 
    the hamburger menu contents */
    hamburgerMenu.classList.toggle(hamburgerMenuOpenClassName);

    /* Toggle the class name that hides or displays 
    the open/close icon for the hamburger menu;
    this assumes that on page load, the `hamburgerMenuOpenIcon` element
    is initialized with the `hamburgerMenuIconDisplayClassName` as its class name,
    while the `hamburgerMenuCloseIcon` does not initialize with a class assigned */
    hamburgerMenuOpenIcon.classList.toggle(hamburgerMenuIconDisplayClassName);
    hamburgerMenuCloseIcon.classList.toggle(hamburgerMenuIconDisplayClassName);

});
