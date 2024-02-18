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
