



 // Select all links with the class "scroll-link"

 const scrollLinks = document.querySelectorAll('.scroll-link');

 // Add smooth scrolling to all links
 scrollLinks.forEach(link => {
     link.addEventListener('click', e => {
         e.preventDefault(); // Prevent default anchor behavior
         const targetId = link.getAttribute('href'); // Get the target element's ID
         const targetElement = document.querySelector(targetId); // Find the target element
         window.scrollTo({
             top: targetElement.offsetTop, // Scroll to the target element's top position
             behavior: 'smooth' // Use smooth scrolling behavior
         });
     });
 });