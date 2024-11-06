// Get all category links
const categoryLinks = document.querySelectorAll('.category-link');

// Add click event listener to each category
categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();  // Prevent the default link behavior
        
        // Get the target section to show
        const target = document.getElementById(link.dataset.target);

        // Hide all category content sections
        document.querySelectorAll('.category-content').forEach(section => {
            section.style.display = 'none';
        });

        // Show the clicked category content
        target.style.display = 'block';
    });
});
