const toggleSidebarBtn = document.querySelector(".toggle-sidebar-btn");
const sidebar = document.querySelector(".sidebar");
const main = document.querySelector(".main");
const closesidbarBtn = document.querySelector(".close-sidebar-btn");

toggleSidebarBtn.addEventListener("click", () => {
  if (window.innerWidth > 991) {
    sidebar.classList.toggle("hide");
    main.classList.toggle("active");
  } else {
    sidebar.classList.toggle("show");
  }
});

closesidbarBtn.addEventListener("click", () => {
  sidebar.classList.remove("show");
});
