/** common variables **/
const sectionsArr = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");

/** TODO: Build the navigation bar using JavaScript **/

sectionsArr.forEach((section) => {
  const newItem = document.createElement("li");
  const newLink = document.createElement("a");
  newLink.textContent = section.getAttribute("data-nav");
  newLink.href = "#" + section.getAttribute("id");
  newLink.classList.add("menu__link");
  navList.appendChild(newItem);
  newItem.appendChild(newLink);
  newLink.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(event.target.getAttribute("href"));
    targetSection.scrollIntoView({ behavior: "smooth" });
  });
})
/** TODO: Add smooth scrolling **/

/** TODO: Add an active state **/


window.addEventListener("scroll", () => {
  
  sectionsArr.forEach((section) => {
    let top = section.getBoundingClientRect().top;
    let bottom = section.getBoundingClientRect().bottom;
    let sectionHeight = section.getBoundingClientRect().height;
    if (top >= 0 && bottom <= sectionHeight + 100) {
      sectionsArr.forEach((remove) => {
        remove.classList.remove("active");
      });
      section.classList.add("active");
    }
  });
});
/** TODO: Add a comment form **/
