export function scrollToSection(sectionId) {
  const targetSectionRef = document.querySelector(`[href="${sectionId}"]`);

  if (targetSectionRef) {
    const hrefValue = targetSectionRef.getAttribute('href');
    console.log(hrefValue); // This will log the href value
    targetSectionRef.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("Element not found");
  }
}
