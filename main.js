// ========================================
// VIRATA - MAIN JAVASCRIPT
// Interactivity, Animations, Dark Mode
// ========================================

// ==================== 
// 1. THEME / DARK MODE
// ====================

const THEME_KEY = 'virata-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Initialize theme on page load
function initializeTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const theme = savedTheme || (prefersDark ? DARK_THEME : LIGHT_THEME);
    applyTheme(theme);
}

function applyTheme(theme) {
    const html = document.documentElement;
    
    if (theme === DARK_THEME) {
        html.setAttribute('data-theme', DARK_THEME);
        localStorage.setItem(THEME_KEY, DARK_THEME);
        updateThemeIcon('☀️');
    } else {
        html.removeAttribute('data-theme');
        localStorage.setItem(THEME_KEY, LIGHT_THEME);
        updateThemeIcon('🌙');
    }
}

function updateThemeIcon(icon) {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const iconSpan = themeToggle.querySelector('.theme-icon');
        if (iconSpan) {
            iconSpan.textContent = icon;
        }
    }
}

// Theme toggle button
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
        applyTheme(newTheme);
    });
}

// ==================== 
// 2. MOBILE MENU
// ====================

const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
}

if (menuClose) {
    menuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
}

// Close menu when link is clicked
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

// ==================== 
// 3. HEADER STICKY BEHAVIOR
// ====================

const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        header.classList.add('sticky-header');
    } else {
        header.classList.remove('sticky-header');
    }
});

// Active nav link based on scroll position
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;

    // Homepage detection
    if (scrollPosition < 500) {
        navLinks.forEach(link => link.classList.remove('active'));
        const homeLink = Array.from(navLinks).find(link => 
            link.href.includes('index.html') || link.href === window.location.href
        );
        if (homeLink) homeLink.classList.add('active');
    }
}

window.addEventListener('scroll', updateActiveNavLink);
updateActiveNavLink();

// ==================== 
// 4. SMOOTH SCROLLING
// ====================

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

// ==================== 
// 5. INTERSECTION OBSERVER FOR ANIMATIONS
// ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            
            // Stagger animation for multiple items
            if (entry.target.parentElement) {
                const siblings = entry.target.parentElement.querySelectorAll('[class*="card"], [class*="item"]');
                siblings.forEach((sibling, index) => {
                    setTimeout(() => {
                        sibling.classList.add('fade-in-up');
                    }, index * 80);
                });
            }
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.service-card, .project-card, .testimonial-card, .indicator-item, .feature-item').forEach(el => {
    observer.observe(el);
});

// ==================== 
// 6. FORM HANDLING
// ====================

// Setup form handlers if they exist
function initializeFormHandlers() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Log form data (in real app, send to server)
            console.log('Form submitted:', data);
            
            // Show success message
            showFormSuccess(this);
            
            // Reset form
            this.reset();
        });
    });
}

function showFormSuccess(form) {
    const originalHTML = form.innerHTML;
    form.innerHTML = `
        <div style="padding: 20px; text-align: center; background: #22C55E; color: white; border-radius: 8px;">
            <p style="margin: 0; font-weight: 600;">✓ Thank you! We'll be in touch within 24 hours.</p>
        </div>
    `;
    
    setTimeout(() => {
        form.innerHTML = originalHTML;
        initializeFormHandlers();
    }, 3000);
}

// ==================== 
// 7. COUNTER ANIMATION
// ====================

function animateCounters() {
    const counters = document.querySelectorAll('.indicator-number');
    
    counters.forEach(counter => {
        const text = counter.textContent;
        const endValue = parseInt(text.replace(/\D/g, ''));
        const duration = 1500;
        const startTime = Date.now();
        
        function updateCounter() {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            if (text.includes('+')) {
                const currentValue = Math.floor(progress * endValue);
                counter.textContent = currentValue + '+';
            } else if (text.includes('%')) {
                const currentValue = Math.floor(progress * endValue);
                counter.textContent = currentValue + '%';
            } else {
                const currentValue = Math.floor(progress * endValue);
                counter.textContent = currentValue + '+';
            }
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        }
        
        // Start animation when in view
        const obs = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCounter();
                obs.unobserve(counter);
            }
        }, { threshold: 0.5 });
        
        obs.observe(counter);
    });
}

// ==================== 
// 8. CAROUSEL / SLIDER (for testimonials)
// ====================

function initializeCarousel() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        let currentSlide = 0;
        const slides = carousel.querySelectorAll('.carousel-item');
        const dots = carousel.querySelectorAll('.carousel-dot');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        
        if (slides.length === 0) return;
        
        function showSlide(n) {
            slides.forEach((slide, index) => {
                slide.style.display = index === n ? 'block' : 'none';
            });
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === n);
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });
        
        // Auto-advance slides
        setInterval(nextSlide, 4000);
        
        // Initialize
        showSlide(0);
    });
}

// ==================== 
// 9. FILTER FUNCTIONALITY (for portfolio)
// ====================

function initializeFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const items = document.querySelectorAll('[data-category]');
    
    if (filterButtons.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter items
            items.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => item.classList.add('fade-in-up'), 10);
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// ==================== 
// 10. IMAGE LAZY LOADING
// ====================

function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// ==================== 
// 11. COPY TO CLIPBOARD
// ====================

function setupCopyToClipboard() {
    const copyElements = document.querySelectorAll('[data-copy]');
    
    copyElements.forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
            const textToCopy = this.getAttribute('data-copy');
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show feedback
                const originalText = this.textContent;
                this.textContent = 'Copied!';
                this.style.color = 'var(--color-accent)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.color = '';
                }, 2000);
            });
        });
    });
}

// ==================== 
// 12. ACCESSIBILITY: SKIP LINK
// ====================

function setupSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'sr-only';
    skipLink.textContent = 'Skip to main content';
    document.body.prepend(skipLink);
}

// ==================== 
// 13. KEYBOARD NAVIGATION
// ====================

document.addEventListener('keydown', function(e) {
    // Close mobile menu on Escape
    if (e.key === 'Escape' && mobileMenu) {
        mobileMenu.classList.remove('open');
    }
});

// ==================== 
// 14. PERFORMANCE: PRELOAD CRITICAL RESOURCES
// ====================

function preloadResources() {
    // Preload fonts
    const fontLink = document.createElement('link');
    fontLink.rel = 'preload';
    fontLink.as = 'style';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@400;500;600&family=Cinzel:wght@400;600&display=swap';
    document.head.appendChild(fontLink);
}

// ==================== 
// 15. INITIALIZATION
// ====================

document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    animateCounters();
    initializeCarousel();
    initializeFilters();
    initializeLazyLoading();
    setupCopyToClipboard();
    setupSkipLink();
    preloadResources();
    initializeFormHandlers();
    
    // Log that all scripts loaded
    console.log('✓ Virata website initialized successfully');
});

// ==================== 
// 16. HELPER FUNCTIONS
// ====================

// Smooth scroll to element
function scrollToElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Get URL parameters
function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

// Debounce function for performance
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

// ==================== 
// 17. ANALYTICS & TRACKING (placeholder)
// ====================

// Track page views, button clicks, form submissions
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}

// Track CTA button clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('conversion', 'cta_click', this.textContent);
    });
});

// Export functions for use in other scripts
window.virata = {
    scrollToElement,
    getURLParameter,
    debounce,
    trackEvent,
    applyTheme
};
