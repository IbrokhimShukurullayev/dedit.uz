document.addEventListener("DOMContentLoaded", function () {
  // Get all accordion headers
  var accordionHeaders = document.querySelectorAll(".accordion-header");

  // Add click event listener to each header
  accordionHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      // Toggle the visibility of the associated content
      var content = this.nextElementSibling;

      // Check if the content is currently visible
      var isVisible = content.style.display === "block";

      // Hide all accordion contents
      accordionHeaders.forEach(function (otherHeader) {
        var otherContent = otherHeader.nextElementSibling;
        otherContent.style.display = "none";
      });

      // If the content was not visible, show it
      if (!isVisible) {
        content.style.display = "block";
      }
    });
  });

  // Trigger a click on the first header to initially hide its content
  accordionHeaders[0].click();
});


function openNavbar() {
  document.getElementById("navbar-responsive").style.left = "-80px";
  // document.getElementById("navbar-responsive").style.top = "0";
}
function closeNavbar() {
  document.getElementById("navbar-responsive").style.left = "-100%";
  document.getElementById("main").style.left = "-100%";
  // document.getElementById("navbar-responsive").style.top = "-100%";
}

document.getElementById("navbar-open").addEventListener("click", openNavbar);
document.getElementById("navbar-close").addEventListener("click", closeNavbar);
document.getElementById("main").addEventListener("click", closeNavbar);
