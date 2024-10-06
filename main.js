function collapseSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;

  // set the element's max-height of only the question part of the faq card
  element.style.maxHeight = element.getElementsByClassName("iconclick")[0].clientHeight + 'px';

  element.setAttribute('collapsed', 'true');
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;

  // set the element's max-height to the height of its inner content
  element.style.maxHeight = sectionHeight + 'px';

  element.setAttribute('collapsed', 'false');
}

function faqclicker(element) {
  // rotate the icon
  element.getElementsByClassName("iconclick")[0].children[0].classList.toggle("fa-rotate-90");

  var collapsed = element.getAttribute('collapsed') === 'true';

  if (!collapsed) {
    collapseSection(element);
  } else {
    expandSection(element);
  }
}