//observers for scrolling
const createObservers = () => {
  let hObserver = new IntersectionObserver((entries, observer) => {
    entries
      .filter((e) => e.isIntersecting)
      .forEach((entry) => {
        entry.target.classList.add("animate__fadeInUp");
        observer.unobserve(entry.target);
      });
  });

  let pObserver = new IntersectionObserver((entries, observer) => {
    entries
      .filter((e) => e.isIntersecting)
      .forEach((entry) => {
        entry.target.classList.add("animate__fadeIn");
        observer.unobserve(entry.target);
      });
  });

  let iObserver = new IntersectionObserver((entries, observer) => {
    entries
      .filter((e) => e.isIntersecting)
      .forEach((entry) => {
        entry.target.style.visibility = "visible";
        entry.target.classList.add("animate__backInRight");
        observer.unobserve(entry.target);
      });
  });

  document.querySelectorAll(".section_header").forEach((e) => {
    hObserver.observe(e);
  });

  document.querySelectorAll(".fade_in_text").forEach((e) => {
    pObserver.observe(e);
  });

  document.querySelectorAll("#menu_image_1").forEach((e) => {
    iObserver.observe(e);
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

//move to onload
createObservers();

localStorage.setItem("menuStatus", "regular");

//menu on click
const navMenu = document.querySelector("#nav_menu_icon");
const closeMenu = document.querySelector("#closeIcon");

const toggleSidebar = () => {
  let sideMenu = document.querySelector("#nav_list");
  sideMenu.classList.toggle("active");
};

navMenu.addEventListener("click", toggleSidebar);
closeMenu.addEventListener("click", toggleSidebar);

document.body.addEventListener("click", (event) => {
  let sideMenu = document.querySelector("#nav_list");
  if (!navMenu.contains(event.target) && !sideMenu.contains(event.target)) {
    sideMenu.classList.remove("active");
  }
});

const boxMenuLink = document.querySelector("#box_menu_link");

boxMenuLink.addEventListener("click", (event) => {
  localStorage.setItem("menuStatus", "box");
});
