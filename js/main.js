// Bella Estética Luxury - JavaScript Principal

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Loading screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
    }, 1500);
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scroll');
        } else {
            navbar.classList.remove('navbar-scroll');
        }
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (contactForm && successMessage) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data using FormData
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');
        
        // Create WhatsApp message with better structure
        const whatsappMessage = `💎 *BELLA ESTÉTICA LUXURY* 💎%0A%0A` +
            `📋 *NUEVA SOLICITUD DE CONTACTO*%0A%0A` +
            `👤 *Datos del Cliente*%0A` +
            `━━━━━━━━━━━━━━━━━━%0A` +
            `📝 *Nombre:* ${name}%0A` +
            `📧 *Email:* ${email}%0A` +
            `📱 *Teléfono:* ${phone}%0A%0A` +
            `💬 *Mensaje del Cliente*%0A` +
            `━━━━━━━━━━━━━━━━━━%0A` +
            `${message}%0A%0A` +
            `📅 *Fecha de Contacto:* ${new Date().toLocaleDateString('es-CO')}%0A` +
            `🕐 *Hora:* ${new Date().toLocaleTimeString('es-CO')}%0A%0A` +
            `⭐ *Por favor contactar al cliente a la brevedad posible* ⭐`;
        
        // Send to WhatsApp
        const whatsappUrl = `https://wa.me/573112617515?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        
        // Show success message
        successMessage.classList.remove('hidden');
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });
}

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Simulate newsletter subscription
        alert('¡Gracias por suscribirte a nuestro newsletter VIP!');
        newsletterForm.reset();
    });
}

// Calendar functionality
const calendarDays = document.querySelectorAll('.calendar-day');
let selectedDate = null;

calendarDays.forEach(day => {
    day.addEventListener('click', () => {
        if (day.textContent && !day.classList.contains('text-gray-400')) {
            // Remove previous selection
            if (selectedDate) {
                selectedDate.classList.remove('selected');
            }
            // Add selection to clicked day
            day.classList.add('selected');
            selectedDate = day;
        }
    });
});

// Service checkboxes functionality
const serviceCheckboxes = document.querySelectorAll('input[type="checkbox"]');
const totalElement = document.querySelector('.text-2xl.font-bold.text-gold');

if (serviceCheckboxes.length > 0 && totalElement) {
    serviceCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });
}

function calculateTotal() {
    let total = 0;
    const prices = {
        'Facial Premium': 299,
        'Tratamiento Corporal': 199,
        'Spa & Wellness': 399,
        'Tratamiento Avanzado': 499
    };
    
    serviceCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const label = checkbox.closest('label');
            const serviceName = label.querySelector('.font-semibold').textContent;
            if (prices[serviceName]) {
                total += prices[serviceName];
            }
        }
    });
    
    totalElement.textContent = `$${total}`;
}

// Time slot selection
const timeSlots = document.querySelectorAll('.grid.grid-cols-3 button');
let selectedTime = null;

timeSlots.forEach(slot => {
    slot.addEventListener('click', () => {
        // Remove previous selection
        if (selectedTime) {
            selectedTime.classList.remove('bg-gold', 'text-white');
            selectedTime.classList.add('border', 'border-gold');
        }
        // Add selection to clicked slot
        slot.classList.remove('border', 'border-gold');
        slot.classList.add('bg-gold', 'text-white');
        selectedTime = slot;
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax');
    if (parallax) {
        const speed = 0.5;
        parallax.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loading-animation');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
