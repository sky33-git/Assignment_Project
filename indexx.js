document.addEventListener('DOMContentLoaded', () => {
    /* Smooth Scrolling for Navigation Links */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            /* // Handle hamburger menu closing on link click */
            const navLinks = document.querySelector('.nav-links');
            const hamburger = document.querySelector('.hamburger-menu');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Get the height of the fixed navbar to offset scroll position
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const offsetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    /* // Hero Call-to-Action Smooth Scroll */
    const exploreServicesBtn = document.querySelector('.scroll-to-services');
    exploreServicesBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const offsetPosition = servicesSection.offsetTop - navbarHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });

    /* // Product Modal Functionality */
    const productModal = document.getElementById('product-modal');
    const closeButton = document.querySelector('.close-button');
    const productCards = document.querySelectorAll('.product-card');

    /* // Dummy product data (replace with actual data if from API/DB) */
    const productsData = {
        product1: {
            title: 'Product A: Smart Gadget',
            image: 'https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=Product+A+Details',
            description: 'This revolutionary smart gadget seamlessly integrates into your daily life, offering unparalleled convenience and efficiency. Featuring AI-powered assistance, a long-lasting battery, and intuitive controls, it’s designed to elevate your personal and professional productivity. Perfect for tech enthusiasts and busy professionals alike.'
        },
        product2: {
            title: 'Product B: Secure Software',
            image: 'https://via.placeholder.com/400x300/2196F3/FFFFFF?text=Product+B+Details',
            description: 'Our enterprise-grade secure software provides comprehensive protection for your data and network. With multi-layered encryption, real-time threat detection, and easy scalability, it ensures your business operations remain secure and uninterrupted. Trusted by industry leaders for its robust security features.'
        },
        product3: {
            title: 'Service C: Cloud Solutions',
            image: 'https://via.placeholder.com/400x300/FFC107/333333?text=Service+C+Details',
            description: 'Experience the power of the cloud with our flexible and reliable cloud solutions. From data storage to application hosting and managed services, we offer customized packages to meet your specific business needs. Enhance collaboration, reduce IT overhead, and scale on demand with our cutting-edge cloud infrastructure.'
        }
    };

    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Ensure click on button itself doesn't trigger card modal twice
            if (e.target.classList.contains('view-details-btn')) {
                return;
            }

            const productId = card.dataset.productId;
            const product = productsData[productId];

            if (product) {
                document.getElementById('modal-product-title').textContent = product.title;
                document.getElementById('modal-product-image').src = product.image;
                document.getElementById('modal-product-image').alt = product.title;
                document.getElementById('modal-product-description').textContent = product.description;
                productModal.style.display = 'flex'; // Use flex to center
            }
        });

        /* // Add event listener for the "View Details" button specifically */
        const viewDetailsBtn = card.querySelector('.view-details-btn');
        if (viewDetailsBtn) {
            viewDetailsBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card click event from firing simultaneously
                const productId = card.dataset.productId;
                const product = productsData[productId];
                if (product) {
                    document.getElementById('modal-product-title').textContent = product.title;
                    document.getElementById('modal-product-image').src = product.image;
                    document.getElementById('modal-product-image').alt = product.title;
                    document.getElementById('modal-product-description').textContent = product.description;
                    productModal.style.display = 'flex';
                }
            });
        }
    });


    closeButton.addEventListener('click', () => {
        productModal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    /* // Form Validation */
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission for now

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Form submitted successfully! (This is a demo, no actual submission)');
            contactForm.reset(); // Clear the form
        }
    });

    function isValidEmail(email) {
        /* // Basic email validation regex */
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    /* // Dark/Light Mode Toggle */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i'); // Get the icon element

    /* // Check for saved theme preference in local storage */
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        // Default to light mode if nothing saved or 'light'
        body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Update local storage and icon based on current mode
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // Hamburger Menu Toggle for Mobile
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerMenu.classList.toggle('active'); // For animation
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburgerMenu.contains(e.target) && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});
