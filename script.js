// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileNavigation();
    initSmoothScrolling();
    initCounterAnimations();
    initProgrammeFilters();
    initProgrammeModals();
    initTestimonialSlider();
    initContactForm();
    initNewsletterForm();
    initScrollAnimations();
    initHeaderScroll();
});

// Mobile Navigation
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Counter Animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number, .metric-number');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Programme Filters
function initProgrammeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const programmeCards = document.querySelectorAll('.programme-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            programmeCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Programme Modals
function initProgrammeModals() {
    const learnMoreButtons = document.querySelectorAll('.learn-more-btn');
    const modal = document.getElementById('programme-modal');
    const closeBtn = document.querySelector('.close');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content-body');

    const programmeData = {
        'web-dev': {
            title: 'Full Stack Web Development',
            content: `
                <div class="programme-details">
                    <h3>Programme Overview</h3>
                    <p>Our comprehensive Full Stack Web Development programme equips you with the skills needed to build modern web applications from front-end to back-end.</p>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                        <li>HTML5, CSS3, and JavaScript fundamentals</li>
                        <li>React.js for dynamic user interfaces</li>
                        <li>Node.js and Express.js for server-side development</li>
                        <li>Database management with MongoDB and SQL</li>
                        <li>Version control with Git and GitHub</li>
                        <li>Deployment and cloud services</li>
                    </ul>
                    
                    <h4>Programme Details:</h4>
                    <div class="programme-info">
                        <div class="info-item">
                            <strong>Duration:</strong> 12 weeks
                        </div>
                        <div class="info-item">
                            <strong>Format:</strong> Full-time, hands-on training
                        </div>
                        <div class="info-item">
                            <strong>Prerequisites:</strong> Basic computer literacy
                        </div>
                        <div class="info-item">
                            <strong>Certification:</strong> Industry-recognized certificate
                        </div>
                    </div>
                    
                    <h4>Career Opportunities:</h4>
                    <p>Graduates can pursue roles as Full Stack Developers, Front-end Developers, Back-end Developers, and Web Application Developers.</p>
                    
                    <div class="modal-cta">
                        <a href="#contact" class="cta-button">Apply Now</a>
                    </div>
                </div>
            `
        },
        'data-science': {
            title: 'Data Science & Analytics',
            content: `
                <div class="programme-details">
                    <h3>Programme Overview</h3>
                    <p>Transform raw data into actionable insights with our comprehensive Data Science programme, covering statistical analysis, machine learning, and data visualization.</p>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                        <li>Python programming for data analysis</li>
                        <li>Statistical analysis and hypothesis testing</li>
                        <li>Machine learning algorithms and implementation</li>
                        <li>Data visualization with Matplotlib, Seaborn, and Plotly</li>
                        <li>SQL for database querying</li>
                        <li>Big data tools and cloud platforms</li>
                    </ul>
                    
                    <h4>Programme Details:</h4>
                    <div class="programme-info">
                        <div class="info-item">
                            <strong>Duration:</strong> 16 weeks
                        </div>
                        <div class="info-item">
                            <strong>Format:</strong> Full-time with project-based learning
                        </div>
                        <div class="info-item">
                            <strong>Prerequisites:</strong> Basic mathematics and statistics
                        </div>
                        <div class="info-item">
                            <strong>Certification:</strong> Data Science Professional Certificate
                        </div>
                    </div>
                    
                    <h4>Career Opportunities:</h4>
                    <p>Graduates can work as Data Scientists, Data Analysts, Business Intelligence Analysts, and Machine Learning Engineers.</p>
                    
                    <div class="modal-cta">
                        <a href="#contact" class="cta-button">Apply Now</a>
                    </div>
                </div>
            `
        },
        'ux-design': {
            title: 'UX/UI Design',
            content: `
                <div class="programme-details">
                    <h3>Programme Overview</h3>
                    <p>Learn to create user-centered designs that solve real problems and deliver exceptional user experiences across digital platforms.</p>
                    
                    <h4>What You'll Learn:</h4>
                    <ul>
                        <li>User research and persona development</li>
                        <li>Information architecture and wireframing</li>
                        <li>Prototyping with Figma and Adobe XD</li>
                        <li>Visual design principles and typography</li>
                        <li>Usability testing and iteration</li>
                        <li>Design systems and component libraries</li>
                    </ul>
                    
                    <h4>Programme Details:</h4>
                    <div class="programme-info">
                        <div class="info-item">
                            <strong>Duration:</strong> 10 weeks
                        </div>
                        <div class="info-item">
                            <strong>Format:</strong> Full-time with portfolio development</li>
                        </div>
                        <div class="info-item">
                            <strong>Prerequisites:</strong> Creative mindset and basic computer skills
                        </div>
                        <div class="info-item">
                            <strong>Certification:</strong> UX/UI Design Professional Certificate
                        </div>
                    </div>
                    
                    <h4>Career Opportunities:</h4>
                    <p>Graduates can work as UX Designers, UI Designers, Product Designers, and Interaction Designers.</p>
                    
                    <div class="modal-cta">
                        <a href="#contact" class="cta-button">Apply Now</a>
                    </div>
                </div>
            `
        }
    };

    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const programme = this.getAttribute('data-programme');
            const data = programmeData[programme];
            
            if (data) {
                modalTitle.textContent = data.title;
                modalContent.innerHTML = data.content;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Testimonial Slider
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.nav-dot');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-advance slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

// Contact Form
function initContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Validate form
            if (validateContactForm(data)) {
                // Simulate form submission
                showFormSuccess('Thank you for your message! We\'ll get back to you soon.');
                this.reset();
            }
        });
    }
}

function validateContactForm(data) {
    const errors = [];
    
    if (!data.name || data.name.trim().length < 2) {
        errors.push('Please enter a valid name');
    }
    
    if (!data.email || !isValidEmail(data.email)) {
        errors.push('Please enter a valid email address');
    }
    
    if (!data.subject) {
        errors.push('Please select a subject');
    }
    
    if (!data.message || data.message.trim().length < 10) {
        errors.push('Please enter a message (minimum 10 characters)');
    }
    
    if (errors.length > 0) {
        showFormError(errors.join('<br>'));
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showFormSuccess(message) {
    showNotification(message, 'success');
}

function showFormError(message) {
    showNotification(message, 'error');
}

function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        max-width: 400px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #28a745;' : 'background: #dc3545;'}
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Newsletter Form
function initNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            
            if (isValidEmail(email)) {
                showFormSuccess('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                showFormError('Please enter a valid email address');
            }
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.programme-card, .team-member, .metric-card, .blog-card, .opportunity-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        // Hide/show header on scroll
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize Google Maps (placeholder function)
function initMap() {
    // This would typically initialize a Google Maps instance
    // For now, we'll just add a placeholder
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f8f9fa; color: #666;">
                <div style="text-align: center;">
                    <i class="fas fa-map-marker-alt" style="font-size: 3rem; margin-bottom: 1rem; color: #667eea;"></i>
                    <div>Greenacres, Gqeberha, 6001</div>
                    <div>South Africa</div>
                </div>
            </div>
        `;
    }
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', initMap);

// Add CSS for modal programme details
const modalStyles = document.createElement('style');
modalStyles.textContent = `
    .programme-details h3 {
        color: #333;
        margin-bottom: 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 2px solid #667eea;
    }
    
    .programme-details h4 {
        color: #667eea;
        margin: 1.5rem 0 1rem 0;
    }
    
    .programme-details ul {
        margin-left: 1.5rem;
        margin-bottom: 1.5rem;
    }
    
    .programme-details li {
        margin-bottom: 0.5rem;
        color: #666;
    }
    
    .programme-info {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 10px;
        margin: 1.5rem 0;
    }
    
    .info-item {
        margin-bottom: 0.75rem;
        padding-bottom: 0.75rem;
        border-bottom: 1px solid #e9ecef;
    }
    
    .info-item:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
    
    .info-item strong {
        color: #333;
        display: inline-block;
        min-width: 120px;
    }
    
    .modal-cta {
        text-align: center;
        margin-top: 2rem;
        padding-top: 2rem;
        border-top: 1px solid #e9ecef;
    }
`;

document.head.appendChild(modalStyles);

