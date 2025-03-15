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

// Button hover effects
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

// Mobile menu and dropdown functionality
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Burger menu toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });

    // Mobile-only dropdown functionality
    if (window.innerWidth <= 768) {
        dropdowns.forEach(dropdown => {
            const trigger = dropdown.querySelector('.dropdown-trigger');
            
            if (trigger) {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                });
            }
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('active');
            // Close dropdowns if open
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
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

// Add this to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // First define the studies object
    const studies = {
        'Buy_Refurb_Rent_Sell': {
            title: 'Buy, Refurbish, Rent, Sell Study',
            path: 'assets/pdf/Buy_Refurb_Rent_Sell Study.pdf'
        },
        'Digital_Entity': {
            title: 'Digital Entity Study',
            path: 'assets/pdf/Digital Entity.pdf'
        },
        'Event_Management': {
            title: 'Event Management Study',
            path: 'assets/pdf/Event management.pdf'
        },
        'Manuka_Honey': {
            title: 'Manuka Honey Study',
            path: 'assets/pdf/Manuka Honey.pdf'
        }
    };

    // Get all required elements
    const customSelect = document.querySelector('.custom-select');
    const pdfContainer = document.getElementById('pdfContainer');
    const initialMessage = document.getElementById('initialMessage');
    const pdfFrame = document.getElementById('pdfFrame');
    const studyTitle = document.getElementById('studyTitle');
    const downloadBtn = document.getElementById('downloadBtn');

    if (customSelect) {
        const selectHeader = customSelect.querySelector('.select-header');
        const selectOptions = customSelect.querySelector('.select-options');
        const options = customSelect.querySelectorAll('.select-option');
        const selectLabel = customSelect.querySelector('.select-label');

        // Toggle options visibility
        selectHeader.addEventListener('click', () => {
            customSelect.classList.toggle('active');
        });

        // Handle option selection
        options.forEach(option => {
            option.addEventListener('click', () => {
                const studyId = option.dataset.value;
                const selectedStudy = studies[studyId];
                
                // Update selected option
                selectLabel.textContent = option.querySelector('span').textContent;
                
                // Remove selected class from all options
                options.forEach(opt => opt.classList.remove('selected'));
                // Add selected class to clicked option
                option.classList.add('selected');
                
                // Close dropdown
                customSelect.classList.remove('active');
                
                // Update PDF viewer
                if (selectedStudy) {
                    pdfContainer.style.display = 'block';
                    initialMessage.style.display = 'none';
                    studyTitle.textContent = selectedStudy.title;
                    pdfFrame.src = selectedStudy.path;
                    downloadBtn.href = selectedStudy.path;
                }
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!customSelect.contains(e.target)) {
                customSelect.classList.remove('active');
            }
        });
    }

    // Dropdown functionality
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown-trigger');
        const content = dropdown.querySelector('.dropdown-content');
        const links = dropdown.querySelectorAll('.dropdown-link');

        // Handle dropdown trigger click
        trigger.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            dropdown.classList.toggle('active');
        });

        // Handle dropdown links
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't prevent default here to allow navigation
                dropdown.classList.remove('active');
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    });
}); 