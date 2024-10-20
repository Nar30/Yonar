function toggleMenu() {
    const nav = document.getElementById('nav-links');
    const mainContent = document.querySelector('main'); // Select the main content
    const footer = document.querySelector('footer'); // Select the footer content

    nav.classList.toggle('nav-active'); // Toggle the active class to show/hide the nav
    
    // Toggle the blur effect for main content and footer
    mainContent.classList.toggle('blur-background');
    footer.classList.toggle('blur-background');
}