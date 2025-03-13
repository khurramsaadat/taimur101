// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect - simplified to just add shadow on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Remove Intersection Observer since we simplified animations
// Only keep button hover effects
document.querySelectorAll('.cta-button, .primary-button, .secondary-button').forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    });

    button.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Burger Menu Toggle with Dropdown support
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const dropdownTrigger = document.querySelector('.dropdown-trigger');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Handle dropdown on mobile
    if (dropdownTrigger) {
        dropdownTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            const dropdownContent = dropdownTrigger.nextElementSibling;
            dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            // Close dropdown if open
            const dropdownContent = document.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'none';
            }
        }
    });
});

// Slide in animation for profile picture
document.addEventListener('DOMContentLoaded', () => {
    // Create intersection observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                // When element is in view
                if (entry.isIntersecting) {
                    console.log('Image in view'); // Debug log
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        {
            threshold: 0.1 // Trigger when even 10% of the element is visible
        }
    );

    // Start observing the about image
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        console.log('Found about image'); // Debug log
        observer.observe(aboutImage);
    }
}); 