const sidebarItem = document.querySelectorAll(".sidebar-item");

sidebarItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("show");
  });
});
