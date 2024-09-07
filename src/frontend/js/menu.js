document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuToggle2 = document.getElementById('menu-toggle2');
    const navContainer = document.getElementById('nav-container');

    function handleResize() {
        if (window.innerWidth <= 768) {
            navContainer.style.display = 'none';
            if (menuToggle) {
                menuToggle.addEventListener('click', function() {
                    navContainer.classList.add('active');
                    menuToggle.style.display = 'none';
                    menuToggle2.style.display = 'block';
                    navContainer.style.display = 'flex';
                    navContainer.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
                });
            }

            if (menuToggle2) {
                menuToggle2.addEventListener('click', function() {
                    navContainer.classList.remove('active');
                    menuToggle.style.display = 'block';
                    menuToggle2.style.display = 'none';
                    navContainer.style.display = 'none';
                    navContainer.style.transition = 'max-height 0.3s ease-out, opacity 0.3s ease-out';
                });
            }
        } else {
            if (menuToggle) {
                menuToggle.removeEventListener('click', handleMenuToggle);
            }
            if (menuToggle2) {
                menuToggle2.removeEventListener('click', handleMenuToggle2);
            }
        }
    }

    handleResize();

    window.addEventListener('resize', handleResize);
});
