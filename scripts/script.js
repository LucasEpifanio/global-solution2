const expand_btn = document.querySelector(".expand-btn");
const allLinks = document.querySelectorAll(".sidebar-links a");
const current = window.location.href;

expand_btn.addEventListener("click", () => {
  document.body.classList.toggle("collapsed");
});

allLinks.forEach((elem) => {
  elem.addEventListener('click', function () {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href === hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });
  });

  if (current.includes(elem.href)) {
    elem.classList.add('active');
  }
});
