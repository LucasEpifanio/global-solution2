const allTabsLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");
const tabContentWrapper = document.querySelector(".tab-content-wrapper");

const shiftTabs = (linkId) => {
  allTabs.forEach((tab, i) => {
    if (tab.id.includes(linkId)) {
      allTabs.forEach((tabItem) => {
        tabItem.style = `transform: translateY(-${i * 540}px);`;
      });
    }
  });
};

allTabsLinks.forEach((elem) => {
  elem.addEventListener('click', function (event) {
    event.preventDefault();

    const linkId = elem.id;
    const hrefLinkClick = elem.href;

    allTabsLinks.forEach((link, i) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove('active');
      }
    });

    shiftTabs(linkId);
  });
});


const currentHash = window.location.hash;
let activeLink = document.querySelector(`.tabs a`);

if (currentHash) {
  const visibleHash = document.getElementById(
    `${currentHash.replace('#', '')}`
  );

  if (visibleHash) {
    activeLink = visibleHash;
  }
}

activeLink.classList.toggle('active');

shiftTabs(activeLink.id);
