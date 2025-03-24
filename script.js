// Initialize EmailJS
(function() {
    emailjs.init("SS8I9OjUI11aFq2pU"); // EmailJS public key
})();

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Toggle button functionality for Python libraries
document.querySelectorAll(".toggle-button").forEach((button) => {
    button.addEventListener("click", () => {
        const toggleList = button.nextElementSibling;
        if (toggleList.style.display === "none" || toggleList.style.display === "") {
            toggleList.style.display = "block";
        } else {
            toggleList.style.display = "none";
        }
    });
});

// Contact form handling with EmailJS
const contactForm = document.getElementById("contactForm");
const modal = document.getElementById("thankYouModal");
const closeButton = document.querySelector(".close-button");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get("name"),
            from_email: formData.get("email"),
            message: formData.get("message"),
            to_email: "pinting2025@gmail.com"
        };

        try {
            await emailjs.send(
                "service_x2uymm9", // EmailJS service ID
                "template_0u6p49r", // EmailJS template ID
                templateParams
            );
            modal.style.display = "block";
            contactForm.reset();
        } catch (error) {
            console.error("Error:", error);
            alert("Sorry, there was an error sending your message. Please try again.");
        }
    });
}

// Modal handling
if (closeButton && modal) {
    // Close modal when clicking the close button
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Add active class to nav items when scrolling
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
}); 