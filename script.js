// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded fired');
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
    initHeaderScroll();
    initPartnerLogos();
    // hidePopup(logo);
   // Initialize blog and events functionality

    // Initialize blog and events functionality
    initBlogAndEvents();
    
    // Auto-refresh content every 30 seconds
    setInterval(refreshContent, 30000);
});

// Blog Posts Data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Tech Careers in Africa",
        excerpt: "Exploring emerging opportunities and skills needed for the next decade in African tech markets.",
        content: `
            <p>The African tech landscape is experiencing unprecedented growth, with new opportunities emerging across the continent. From fintech innovations in Nigeria to agritech solutions in Kenya, the digital revolution is reshaping how we work and live.</p>
            
            <p>Key trends shaping the future include:</p>
            
            <ul>
                <li>Remote work adoption accelerating digital skills demand</li>
                <li>Mobile-first solutions driving innovation</li>
                <li>AI and machine learning creating new career paths</li>
                <li>Blockchain technology opening financial inclusion opportunities</li>
            </ul>
            
            <p>At CAPACITI, we're preparing the next generation of tech professionals to seize these opportunities. Our programs focus on practical skills that meet industry demands while fostering innovation and entrepreneurship.</p>
            
            <p>The future is bright for African tech professionals. Are you ready to be part of this transformation?</p>
        `,
        date: "2024-03-15",
        category: "Career Development",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
        featured: true,
        url: "https://capaciti.org.za/blog/future-tech-careers-africa"
    },
    {
        id: 2,
        title: "From Retail to Tech: Sarah's Journey",
        excerpt: "How our graduate transitioned from retail management to becoming a successful UX designer.",
        content: `
            <p>Sarah Mthembu's story is one of transformation and determination. After spending five years in retail management, she decided to pursue her passion for technology and design.</p>
            
            <p>"I always loved solving problems and making things look beautiful," Sarah recalls. "When I discovered UX design, I knew I had found my calling."</p>
            
            <p>Through CAPACITI's intensive UX/UI program, Sarah developed skills in:</p>
            
            <ul>
                <li>User research and persona development</li>
                <li>Wireframing and prototyping</li>
                <li>Design systems and accessibility</li>
                <li>Agile development methodologies</li>
            </ul>
            
            <p>Today, Sarah works as a Senior UX Designer at a leading fintech company, where she's designing solutions that impact millions of users across Africa.</p>
            
            <p>"The transition wasn't easy, but the support from CAPACITI and the practical nature of the curriculum made all the difference," she says.</p>
        `,
        date: "2024-03-10",
        category: "Success Story",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
        featured: false,
        url: "https://capaciti.org.za/success-stories/sarah-mthembu"
    },
    {
        id: 3,
        title: "Top 5 Programming Languages in 2024",
        excerpt: "A comprehensive guide to the most in-demand programming languages for career growth.",
        content: `
            <p>The programming landscape continues to evolve rapidly. Here are the top 5 languages that are driving career growth in 2024:</p>
            
            <h3>1. Python</h3>
            <p>Versatile and beginner-friendly, Python dominates in data science, AI, and web development. Its simplicity and powerful libraries make it ideal for rapid development.</p>
            
            <h3>2. JavaScript</h3>
            <p>Essential for web development, JavaScript has expanded beyond browsers to power servers, mobile apps, and desktop applications.</p>
            
            <h3>3. Java</h3>
            <p>Enterprise-grade applications and Android development continue to drive Java's popularity. Its "write once, run anywhere" philosophy remains relevant.</p>
            
            <h3>4. Go</h3>
            <p>Google's Go language is gaining traction for cloud services and microservices architecture due to its performance and simplicity.</p>
            
            <h3>5. Rust</h3>
            <p>System programming language that offers memory safety without garbage collection, making it ideal for performance-critical applications.</p>
            
            <p>Choose based on your career goals, but remember: understanding programming concepts is more important than any single language.</p>
        `,
        date: "2024-03-05",
        category: "Tech Trends",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop",
        featured: false,
        url: "https://capaciti.org.za/blog/top-programming-languages-2024"
    },
    {
        id: 4,
        title: "Data Science Bootcamp Success Stories",
        excerpt: "Meet our data science graduates who are now working at top companies across Africa.",
        content: `
            <p>Our latest Data Science Bootcamp cohort has achieved remarkable success, with 95% job placement rate within 3 months of graduation.</p>
            
            <p>Meet some of our success stories:</p>
            
            <h3>Thabo Mokoena - Senior Data Analyst at Discovery</h3>
            <p>Former teacher turned data scientist, Thabo now analyzes healthcare data to improve patient outcomes.</p>
            
            <h3>Nomsa Dlamini - Machine Learning Engineer at Shoprite</h3>
            <p>Nomsa developed predictive models that optimize inventory management across 2000+ stores.</p>
            
            <h3>Ahmed Hassan - Business Intelligence Consultant</h3>
            <p>Ahmed started his own consultancy, helping SMEs leverage data for strategic decisions.</p>
            
            <p>These success stories demonstrate the transformative power of practical, industry-focused education. Our bootcamp covers:</p>
            
            <ul>
                <li>Statistical analysis and hypothesis testing</li>
                <li>Machine learning algorithms and implementation</li>
                <li>Data visualization and storytelling</li>
                <li>Real-world project experience</li>
            </ul>
        `,
        date: "2024-02-28",
        category: "Success Story",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        featured: false,
        url: "https://capaciti.org.za/success-stories/data-science-bootcamp"
    },
    {
        id: 5,
        title: "The Rise of Artificial Intelligence in Africa",
        excerpt: "How AI is transforming industries across Africa and creating new opportunities.",
        content: `
            <p>Artificial Intelligence is no longer a futuristic concept in Africa. From healthcare to agriculture, AI is solving real problems and creating unprecedented opportunities.</p>
            
            <h3>Healthcare Innovation</h3>
            <p>AI-powered diagnostic tools are helping doctors in remote areas provide better care. Machine learning algorithms can now detect diseases from medical images with remarkable accuracy.</p>
            
            <h3>Agricultural Revolution</h3>
            <p>Smart farming solutions use AI to optimize crop yields, predict weather patterns, and manage resources efficiently. This is particularly crucial for food security.</p>
            
            <h3>Financial Inclusion</h3>
            <p>AI is enabling better credit scoring for the unbanked population, making financial services more accessible across the continent.</p>
            
            <h3>Career Opportunities</h3>
            <p>The AI revolution is creating new career paths:</p>
            
            <ul>
                <li>Machine Learning Engineers</li>
                <li>AI Product Managers</li>
                <li>Data Scientists</li>
                <li>AI Ethics Specialists</li>
            </ul>
            
            <p>At CAPACITI, we're preparing students for this AI-driven future with hands-on training in machine learning, deep learning, and AI ethics.</p>
        `,
        date: "2024-02-20",
        category: "Tech Trends",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
        featured: false,
        url: "https://capaciti.org.za/blog/ai-rise-africa"
    },
    {
        id: 6,
        title: "Cybersecurity Skills: Protecting Africa's Digital Future",
        excerpt: "The growing importance of cybersecurity professionals in Africa's digital transformation.",
        content: `
            <p>As Africa embraces digital transformation, cybersecurity has become more critical than ever. The continent faces unique challenges that require skilled professionals.</p>
            
            <h3>Current Threat Landscape</h3>
            <p>Africa experiences a disproportionate number of cyber attacks, with financial services and government being primary targets. The skills gap in cybersecurity is significant.</p>
            
            <h3>Key Skills in Demand</h3>
            <ul>
                <li>Network Security and Penetration Testing</li>
                <li>Incident Response and Forensics</li>
                <li>Cloud Security Architecture</li>
                <li>Compliance and Risk Management</li>
            </ul>
            
            <h3>Career Pathways</h3>
            <p>Cybersecurity offers diverse career options:</p>
            <ul>
                <li>Security Analyst</li>
                <li>Ethical Hacker</li>
                <li>Chief Information Security Officer</li>
                <li>Cybersecurity Consultant</li>
            </ul>
            
            <p>Our cybersecurity program combines theoretical knowledge with practical labs, ensuring graduates are job-ready from day one.</p>
        `,
        date: "2024-02-15",
        category: "Industry Insights",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
        featured: false,
        url: "https://capaciti.org.za/blog/cybersecurity-skills-africa"
    }
];

// Events Data
const events = [
    {
        id: 1,
        title: "Tech Career Fair 2024",
        description: "Connect with leading tech companies and explore career opportunities.",
        date: "2024-03-25",
        location: "Cape Town Convention Centre",
        day: "25",
        month: "MAR"
    },
    {
        id: 2,
        title: "Data Science Workshop",
        description: "Free introductory workshop on data science fundamentals.",
        date: "2024-04-02",
        location: "Online Event",
        day: "02",
        month: "APR"
    },
    {
        id: 3,
        title: "AI Ethics Panel Discussion",
        description: "Industry experts discuss the ethical implications of AI development.",
        date: "2024-04-15",
        location: "University of Cape Town",
        day: "15",
        month: "APR"
    },
    {
        id: 4,
        title: "Cybersecurity Bootcamp Open Day",
        description: "Learn about our cybersecurity program and meet the instructors.",
        date: "2024-04-20",
        location: "CAPACITI Campus",
        day: "20",
        month: "APR"
    }
];

// News Data
const news = [
    {
        id: 1,
        title: "UVU Africa Named One of Africa's Fastest Growing Companies",
        description: "New partnerships announced to expand job placement opportunities for graduates.",
        date: "2024-03-12",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=150&h=150&fit=crop"
    },
    {
        id: 2,
        title: "Record Breaking Graduation Ceremony",
        description: "Celebrating our largest cohort of graduates with 98% job placement rate.",
        date: "2024-02-28",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=150&h=150&fit=crop"
    },
    {
        id: 3,
        title: "New AI & Machine Learning Program Launch",
        description: "Introducing cutting-edge curriculum designed with industry leaders.",
        date: "2024-02-15",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=150&h=150&fit=crop"
    },
    {
        id: 4,
        title: "Partnership with Google for Cloud Training",
        description: "Students gain access to Google Cloud certifications at no cost.",
        date: "2024-02-01",
        image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=150&h=150&fit=crop"
    }
];

// Current display state for blog/events
let currentFilter = 'all';
let currentBlogPage = 1;
let postsPerPage = 4;
let showAllPosts = false;

// Initialize blog and events functionality
function initBlogAndEvents() {
    console.log('initBlogAndEvents called');
    // Only initialize if the elements exist on the page
    if (document.getElementById('blogGrid')) {
        // console.log('blogGrid found, calling renderBlogPosts');
        renderBlogPosts();
        setupBlogEventListeners();
    }
    
    // Fixed: Look for the correct selectors that match your HTML
    if (document.querySelector('.event-list')) {
        renderEvents();
    }
    
    if (document.querySelector('.news-list')) {
        renderNews();
    }
}

// Render blog posts
function renderBlogPosts() {
    const blogGrid = document.getElementById('blogGrid');
    // console.log('Blog grid element:', blogGrid);
    // console.log('Blog posts data:', blogPosts);
    
    if (!blogGrid) {
        console.error('Blog grid not found!');
        return;
    }
    
    let filteredPosts = blogPosts.filter(post => 
        currentFilter === 'all' || post.category === currentFilter
    );
    
    // Sort by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Apply pagination if not showing all posts
    if (!showAllPosts) {
        filteredPosts = filteredPosts.slice(0, postsPerPage);
    }
    
    blogGrid.innerHTML = '';
    filteredPosts.forEach((post, index) => {
        const isFirstPost = index === 0 && !showAllPosts;
        const blogCard = createBlogCard(post, isFirstPost);
        blogGrid.appendChild(blogCard);
    });
    
    // Update "View All Posts" button
    const viewAllBtn = document.getElementById('viewAllPosts');
    if (viewAllBtn) {
        if (showAllPosts) {
            viewAllBtn.textContent = 'Show Less';
        } else {
            viewAllBtn.textContent = `View All Posts (${blogPosts.length})`;
        }
    }
}

// Create blog card element
function createBlogCard(post, featured = false) {
    const article = document.createElement('article');
    article.className = `blog-card ${featured ? 'featured' : ''}`;
    article.setAttribute('data-category', post.category);
    
    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    article.innerHTML = `
        <div class="blog-image">
            <img src="${post.image}" alt="${post.title}">
            ${featured ? '<span class="featured-badge">Featured</span>' : ''}
        </div>
        <div class="blog-content">
            <div class="blog-meta">
                <span class="blog-date">${formattedDate}</span>
                <span class="blog-category">${post.category}</span>
            </div>
            <h3 class="blog-title">${post.title}</h3>
            <p class="blog-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more" data-post-id="${post.id}">Read More</a>
        </div>
    `;
    
    return article;
}

// Fixed: Render events to match your HTML structure
function renderEvents() {
    const eventList = document.querySelector('.event-list');
    if (!eventList) return;
    
    // Sort events by date
    const sortedEvents = [...events].sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // Show only upcoming events (next 4)
    const upcomingEvents = sortedEvents.slice(0, 4);
    
    eventList.innerHTML = '';
    
    upcomingEvents.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
            <div class="event-date">
                <span class="day">${event.day}</span>
                <span class="month">${event.month}</span>
            </div>
            <div class="event-details">
                <h4>${event.title}</h4>
                <p>${event.description}</p>
                <span class="event-location">${event.location}</span>
            </div>
        `;
        eventList.appendChild(eventItem);
    });
}

// Fixed: Render news to match your HTML structure
function renderNews() {
    const newsList = document.querySelector('.news-list');
    if (!newsList) return;
    
    // Sort news by date (newest first)
    const sortedNews = [...news].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Show only recent news (last 4)
    const recentNews = sortedNews.slice(0, 4);
    
    newsList.innerHTML = '';
    
    recentNews.forEach(newsItem => {
        const newsElement = document.createElement('div');
        newsElement.className = 'news-item';
        
        const formattedDate = new Date(newsItem.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        newsElement.innerHTML = `
            <div class="news-image">
                <img src="${newsItem.image}" alt="${newsItem.title}">
            </div>
            <div class="news-content">
                <h4>${newsItem.title}</h4>
                <p>${newsItem.description}</p>
                <span class="news-date">${formattedDate}</span>
            </div>
        `;
        newsList.appendChild(newsElement);
    });
}

// Setup blog-specific event listeners
function setupBlogEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current filter
            currentFilter = this.getAttribute('data-filter');
            currentBlogPage = 1;
            
            // Re-render blog posts
            renderBlogPosts();
        });
    });
    
    // View All Posts button
    const viewAllBtn = document.getElementById('viewAllPosts');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            showAllPosts = !showAllPosts;
            renderBlogPosts();
        });
    }
    
    // Read More links (using event delegation)
    const blogGrid = document.getElementById('blogGrid');
    if (blogGrid) {
        blogGrid.addEventListener('click', function(e) {
            if (e.target.classList.contains('read-more')) {
                e.preventDefault();
                const postId = parseInt(e.target.getAttribute('data-post-id'));
                openBlogModal(postId);
            }
        });
    }
    
    // Modal functionality
    const modal = document.getElementById('blogModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    if (modal) {
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Open blog modal
function openBlogModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;
    
    const modal = document.getElementById('blogModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalCategory = document.getElementById('modalCategory');
    const modalBody = document.getElementById('modalBody');
    
    if (!modal || !modalTitle || !modalDate || !modalCategory || !modalBody) return;
    
    modalTitle.textContent = post.title;
    modalDate.textContent = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    modalCategory.textContent = post.category;
    
    modalBody.innerHTML = `
        ${post.content}
        <button class="read-full-article" onclick="window.open('${post.url}', '_blank')">
        Read Full Article</button>
    `;
    
    modal.style.display = 'block';
}

// Refresh content periodically
function refreshContent() {
    // Simulate fetching new content
    const shouldUpdate = Math.random() > 0.7; // 30% chance of update
    
    if (shouldUpdate) {
        // Add a new blog post occasionally
        if (Math.random() > 0.8) {
            addNewBlogPost();
        }
        
        // Update events
        updateEvents();
        
        // Update news
        updateNews();
    }
}

// Add new blog post
function addNewBlogPost() {
    const newTitles = [
        "Remote Work Revolution: Tips for Success",
        "Blockchain Technology: Beyond Cryptocurrency",
        "Women in Tech: Breaking Barriers",
        "Cloud Computing Fundamentals for Beginners",
        "The Art of Code Review: Best Practices"
    ];
    
    const categories = ["Tech Trends", "Career Development", "Industry Insights"];
    const randomTitle = newTitles[Math.floor(Math.random() * newTitles.length)];
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    
    const newPost = {
        id: blogPosts.length + 1,
        title: randomTitle,
        excerpt: "Discover the latest insights and trends shaping the future of technology.",
        content: `
            <p>This is a dynamically generated blog post to demonstrate the automated content system.</p>
            
            <p>Key points covered in this article:</p>
            
            <ul>
                <li>Industry trends and insights</li>
                <li>Practical tips and strategies</li>
                <li>Real-world applications</li>
                <li>Future outlook</li>
            </ul>
            
            <p>Stay tuned for more updates and insights from the CAPACITI team!</p>
        `,
        date: new Date().toISOString().split('T')[0],
        category: randomCategory,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
        featured: false,
        url: "https://capaciti.org.za/blog/latest-insights"
    };
    
    blogPosts.unshift(newPost);
    if (document.getElementById('blogGrid')) {
        renderBlogPosts();
    }
}

// Update events
function updateEvents() {
    const eventTitles = [
        "UX/UI Design Masterclass",
        "Python Programming Bootcamp",
        "Digital Marketing Workshop",
        "Entrepreneurship Panel",
        "Code Review Best Practices"
    ];
    
    const locations = ["Online Event", "CAPACITI Campus", "Cape Town", "Johannesburg"];
    const randomTitle = eventTitles[Math.floor(Math.random() * eventTitles.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    
    // Generate future date
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + Math.floor(Math.random() * 30) + 7);
    
    const newEvent = {
        id: events.length + 1,
        title: randomTitle,
        description: "Join us for an exciting learning opportunity.",
        date: futureDate.toISOString().split('T')[0],
        location: randomLocation,
        day: futureDate.getDate().toString().padStart(2, '0'),
        month: futureDate.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    };
    
    // Only add if we don't already have 6+ events
    if (events.length < 6) {
        events.push(newEvent);
        if (document.querySelector('.event-list')) {
            renderEvents();
        }
    }
}

// Update news
function updateNews() {
    const newsTitles = [
        "New Partnership Announcement",
        "Student Achievement Awards",
        "Technology Innovation Grant",
        "Industry Collaboration Success",
        "Alumni Network Milestone"
    ];
    
    const randomTitle = newsTitles[Math.floor(Math.random() * newsTitles.length)];
    
    const newNewsItem = {
        id: news.length + 1,
        title: randomTitle,
        description: "Exciting developments in education and technology.",
        date: new Date().toISOString().split('T')[0],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    };
    
    // Only add if we don't already have 6+ news items
    if (news.length < 6) {
        news.unshift(newNewsItem);
        if (document.querySelector('.news-list')) {
            renderNews();
        }
    }
}

// Search functionality
function searchPosts(query) {
    const filteredPosts = blogPosts.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
    );
    
    return filteredPosts;
}

// Analytics simulation
function trackEvent(eventType, eventData) {
    console.log(`Analytics: ${eventType}`, eventData);
    // Here you would typically send data to your analytics service
}

// Performance optimization
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


// Scroll of partner logos Animation
function initPartnerLogos() {
    const partnersGrid = document.getElementById('partnersGrid');
    
    // Check if the element exists before proceeding
    if (!partnersGrid) {
        console.warn('Partners grid not found');
        return;
    }
    
    const originalLogos = Array.from(partnersGrid.children);
    
    // Only proceed if there are logos to clone
    if (originalLogos.length === 0) {
        console.warn('No partner logos found to clone');
        return;
    }
    
    // Clone all logos and append them to create seamless loop
    originalLogos.forEach(logo => {
        const clone = logo.cloneNode(true);
        partnersGrid.appendChild(clone);
    });
    
    // Handle popup interactions
    document.querySelectorAll('.partner-logo').forEach(logo => {
        const closeBtn = logo.querySelector('.close-btn');
        const overlay = logo.querySelector('.popup-overlay');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                hidePopup(logo);
            });
        }
        
        if (overlay) {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    hidePopup(logo);
                }
            });
        }
    });
}

// Helper function to hide popup (reduces code duplication)
function hidePopup(logo) {
    logo.style.transform = '';
    const popup = logo.querySelector('.popup-card');
    const popupOverlay = logo.querySelector('.popup-overlay');
    
    if (popup) {
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';
    }
    if (popupOverlay) {
        popupOverlay.style.opacity = '0';
        popupOverlay.style.visibility = 'hidden';
    }
}

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

// script.js Slideshow 
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    let slideInterval;

    function showSlides(n) {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");

        if (!slides.length || !dots.length) {
            console.error("Slideshow error: No slides or dots found.");
            return;
        }

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    function currentSlide(n) {
        clearInterval(slideInterval);
        slideIndex = n;
        showSlides(slideIndex);
        startSlideShow();
    }

    function startSlideShow() {
        slideInterval = setInterval(() => {
            slideIndex++;
            showSlides(slideIndex);
        }, 5000);
    }

    // Pause slideshow on hover
    const slideshowContainer = document.querySelector(".slideshow-container");
    if (slideshowContainer) {
        slideshowContainer.addEventListener("mouseenter", () => clearInterval(slideInterval));
        slideshowContainer.addEventListener("mouseleave", startSlideShow);
    }

    // Expose currentSlide to global scope
    window.currentSlide = currentSlide;

    // Initialize slideshow
    try {
        showSlides(slideIndex);
        startSlideShow();
    } catch (error) {
        console.error("Slideshow initialization failed:", error);
    }
});

    // <!-- Chatbot JavaScript -->

class CapacitiChatbot {
    constructor() {
        this.isInitialized = false;
        this.responses = {
            greeting: [
                "Hello! I'm the CapaCiTi Assistant. Ask me anything about the programme! 😊",
                "Hi there! Need help learning about CapaCiTi? I'm here to assist. 🎓",
                "Welcome! I can help with questions about CapaCiTi's training, eligibility, and more. 🚀"
            ],
            about: [
                "CapaCiTi is a Digital Skills Accelerator by UVU Africa. It helps young South Africans build skills for the digital economy. 🌐",
                "The CapaCiTi programme offers training in tech and professional skills to prepare youth for the workplace. 💻",
                "CapaCiTi equips individuals with digital, business, and soft skills to meet industry demand. 🎯"
            ],
            eligibility: [
                "To join CapaCiTi, you typically need to be a South African youth between 18–35 years, have a matric certificate, and show interest in tech or business. ✅",
                "Most programmes require you to be unemployed, under 35, and have at least a Matric qualification. 📜"
            ],
            skills: [
                "CapaCiTi teaches digital skills like coding, data analysis, digital marketing, and project management. 💻",
                "The programme covers both technical skills (programming, web development) and soft skills (communication, teamwork). 🛠️"
            ],
            application: [
                "You can apply through the CapaCiTi website or UVU Africa portals. Applications usually open several times a year. 📝",
                "Keep an eye on their social media and website for application deadlines and requirements. 📅"
            ],
            contact: [
                "You can reach CapaCiTi through their website, social media, or contact UVU Africa directly for more information. 📞",
                "Check out their official channels for the latest updates and contact details. 💬"
            ],
            duration: [
                "CapaCiTi programmes typically last 3-6 months, depending on the specific track you choose. ⏰",
                "The programme is designed to be intensive but manageable, with both online and in-person components. 📚"
            ],
            cost: [
                "CapaCiTi programmes are typically free for eligible participants, funded by various partners and sponsors. 💰",
                "The programme aims to remove financial barriers to digital skills training for young South Africans. 🎯"
            ],
            default: [
                "I'm not sure how to answer that. Try asking about CapaCiTi's training, eligibility, how to apply, or contact info. 🤔",
                "Hmm, I didn't catch that. You can ask me things like 'How do I apply?', 'What skills do they teach?', or 'Am I eligible?' ❓"
            ]
        };

        this.bindEvents();
    }

    // Initialize chat only when opened for the first time
    initializeChat() {
        if (!this.isInitialized) {
            setTimeout(() => {
                this.addMessage(this.getRandomResponse('greeting'), 'bot');
            }, 500);
            this.isInitialized = true;
        }
    }

    bindEvents() {
        const chatbotInput = document.getElementById('chatbot-input');
        const chatbotSend = document.getElementById('chatbot-send');
        const chatbotToggle = document.getElementById('chatbot-toggle');
        const chatbotClose = document.getElementById('chatbot-close');
        const openButton = document.getElementById('open-chatbot');
        const chatbotContainer = document.getElementById('portfolio-chatbot');

        if (chatbotSend && chatbotInput) {
            chatbotSend.addEventListener('click', () => this.handleUserInput());
            chatbotInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleUserInput();
                }
            });
        }

        if (openButton && chatbotContainer) {
            openButton.addEventListener('click', () => {
                chatbotContainer.classList.add('open');
                openButton.style.display = 'none';
                this.initializeChat(); // Only initialize when opened
            });
        }

        if (chatbotToggle && chatbotContainer) {
            chatbotToggle.addEventListener('click', () => {
                chatbotContainer.classList.toggle('chatbot-minimized');
                // Use consistent text content for minimize/maximize
                chatbotToggle.textContent = chatbotContainer.classList.contains('chatbot-minimized') ? '+' : '−';
                chatbotToggle.title = chatbotContainer.classList.contains('chatbot-minimized') ? 'Expand' : 'Minimize';
            });
        }

        if (chatbotClose && chatbotContainer && openButton) {
            chatbotClose.addEventListener('click', () => {
                chatbotContainer.classList.remove('open', 'chatbot-minimized');
                openButton.style.display = 'flex';
            });
        }
    }

    async handleUserInput() {
        const input = document.getElementById('chatbot-input');
        const message = input.value.trim();

        if (message) {
            this.addMessage(message, 'user');
            input.value = '';

            // Show typing indicator
            this.showTypingIndicator();
            
            // Simulate processing time
            await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 800));
            
            this.hideTypingIndicator();

            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }
    }

    showTypingIndicator() {
        const messagesContainer = document.getElementById('chatbot-messages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typing-indicator';
        typingDiv.innerHTML = '<div class="typing-dots"><span></span><span></span><span></span></div>';
        messagesContainer.appendChild(typingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    addMessage(message, sender) {
        const messagesContainer = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = message;
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (this.containsKeywords(lowerMessage, ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'])) {
            return this.getRandomResponse('greeting');
        }
        
        if (this.containsKeywords(lowerMessage, ['about', 'what is', 'tell me about', 'capaciti', 'program', 'programme'])) {
            return this.getRandomResponse('about');
        }
        
        if (this.containsKeywords(lowerMessage, ['eligible', 'eligibility', 'requirements', 'qualify', 'who can', 'can i'])) {
            return this.getRandomResponse('eligibility');
        }
        
        if (this.containsKeywords(lowerMessage, ['skills', 'learn', 'teach', 'training', 'courses', 'what will i learn'])) {
            return this.getRandomResponse('skills');
        }
        
        if (this.containsKeywords(lowerMessage, ['apply', 'application', 'how to apply', 'register', 'sign up', 'join'])) {
            return this.getRandomResponse('application');
        }
        
        if (this.containsKeywords(lowerMessage, ['contact', 'reach', 'phone', 'email', 'get in touch', 'call'])) {
            return this.getRandomResponse('contact');
        }
        
        if (this.containsKeywords(lowerMessage, ['duration', 'how long', 'time', 'months', 'weeks', 'length'])) {
            return this.getRandomResponse('duration');
        }
        
        if (this.containsKeywords(lowerMessage, ['cost', 'price', 'fee', 'money', 'free', 'pay', 'expensive'])) {
            return this.getRandomResponse('cost');
        }
        
        return this.getRandomResponse('default');
    }

    containsKeywords(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }

    getRandomResponse(category) {
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    const numberOfStars = 100;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random size
        const size = Math.random() * 3 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        
        starsContainer.appendChild(star);
    }
}

// Newsletter form submission
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Simple validation
    if (email) {
        alert('Thank you for subscribing! We\'ll keep you updated.');
        this.querySelector('input[type="email"]').value = '';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialize stars and chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    new CapacitiChatbot();
});