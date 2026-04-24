// ========================================
// VIRATA - MAIN JAVASCRIPT
// Navigation, Scroll Effects, Interactions
// ========================================

// ==================== 
// SMOOTH SCROLL NAVIGATION
// ====================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// ==================== 
// NAVBAR SCROLL EFFECT
// ====================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow on scroll
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ==================== 
// UPDATE ACTIVE NAV LINK
// ====================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== 
// MOBILE MENU TOGGLE
// ====================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// ==================== 
// FORM SUBMISSION
// ====================

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// ==================== 
// INTERSECTION OBSERVER FOR ANIMATIONS
// ====================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and portfolio items
document.querySelectorAll('.service-card, .portfolio-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ==================== 
// RESPONSIVE MOBILE MENU
// ====================

window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.style.display === 'none') {
        navMenu.style.display = 'flex';
    }
});

// Initialize
if (window.innerWidth <= 768) {
    navMenu.style.display = 'none';
}


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
// ========================================
// 3D IMMERSIVE DESIGN - THREE.JS INTEGRATION
// ========================================

class ThreeDScene {
    constructor(canvasId, options = {}) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas || !window.THREE) return;

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
        
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.scene.background = new THREE.Color(0xf8f6f1);
        
        this.camera.position.z = 5;
        this.objects = [];
        this.animate = this.animate.bind(this);
        
        // Handle resize
        window.addEventListener('resize', () => this.onWindowResize());
        this.animate();
    }

    onWindowResize() {
        const width = this.canvas.clientWidth;
        const height = this.canvas.clientHeight;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    animate() {
        requestAnimationFrame(this.animate);
        
        // Rotate objects
        this.objects.forEach(obj => {
            if (obj.rotation) {
                obj.rotation.x += 0.003;
                obj.rotation.y += 0.005;
            }
        });
        
        this.renderer.render(this.scene, this.camera);
    }
}

// Hero 3D Background
function initHero3D() {
    const canvas = document.getElementById('hero-3d-bg');
    if (!canvas || !window.THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    scene.background = null;
    camera.position.z = 6;

    // Create floating cubes
    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const material = new THREE.MeshPhongMaterial({ 
        color: 0xC9A96E,
        emissive: 0x332200,
        shininess: 100
    });
    
    const cube1 = new THREE.Mesh(geometry, material);
    const cube2 = new THREE.Mesh(geometry, material.clone());
    const cube3 = new THREE.Mesh(geometry, material.clone());
    
    cube1.position.set(-2, 1, 0);
    cube2.position.set(2, -1, 0);
    cube3.position.set(0, 2, -2);
    
    cube1.rotation.set(0.3, 0.5, 0.2);
    cube2.rotation.set(0.4, 0.6, 0.3);
    cube3.rotation.set(0.2, 0.4, 0.1);
    
    scene.add(cube1, cube2, cube3);

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xC9A96E, 0.4);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        
        cube1.rotation.x += 0.003;
        cube1.rotation.y += 0.005;
        cube2.rotation.x -= 0.002;
        cube2.rotation.y -= 0.004;
        cube3.rotation.x += 0.004;
        cube3.rotation.z += 0.003;
        
        renderer.render(scene, camera);
    }

    // Handle resize
    function onWindowResize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    window.addEventListener('resize', onWindowResize);
    animate();
}

// About Section 3D Cube
function initAbout3D() {
    const canvas = document.getElementById('about-3d-scene');
    if (!canvas || !window.THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    scene.background = new THREE.Color(0xf8f6f1);
    camera.position.z = 4;

    // Create textured cube
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    // Create materials with different colors for each face
    const materials = [
        new THREE.MeshPhongMaterial({ color: 0xd4a574 }),
        new THREE.MeshPhongMaterial({ color: 0xc99966 }),
        new THREE.MeshPhongMaterial({ color: 0xB8956A }),
        new THREE.MeshPhongMaterial({ color: 0xA68463 }),
        new THREE.MeshPhongMaterial({ color: 0x95735C }),
        new THREE.MeshPhongMaterial({ color: 0xD4C4B0 })
    ];
    
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.002;
        cube.rotation.y += 0.003;
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    window.addEventListener('resize', onWindowResize);
    animate();
}

// Service Icon 3D Spheres
function initService3D(canvasId, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !window.THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    scene.background = new THREE.Color(0xfbf8f5);
    camera.position.z = 2.5;

    // Create spinning sphere
    const geometry = new THREE.IcosahedronGeometry(1, 4);
    const material = new THREE.MeshPhongMaterial({ 
        color: color || 0xC9A96E,
        emissive: 0x332200,
        shininess: 100
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.7);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xC9A96E, 0.3);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.x += 0.004;
        sphere.rotation.y += 0.006;
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    window.addEventListener('resize', onWindowResize);
    animate();
}

// Project 3D Pyramids with gradient
function initProject3D(canvasId, colorHex) {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !window.THREE) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    scene.background = null;
    camera.position.z = 3;

    // Create pyramid
    const geometry = new THREE.TetrahedronGeometry(1.5, 0);
    const material = new THREE.MeshPhongMaterial({ 
        color: colorHex || 0xd4a574,
        emissive: 0x332200,
        shininess: 80
    });
    const pyramid = new THREE.Mesh(geometry, material);
    scene.add(pyramid);

    // Lighting
    const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xC9A96E, 0.4);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    function animate() {
        requestAnimationFrame(animate);
        pyramid.rotation.x += 0.003;
        pyramid.rotation.y += 0.005;
        pyramid.rotation.z += 0.002;
        renderer.render(scene, camera);
    }

    function onWindowResize() {
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    window.addEventListener('resize', onWindowResize);
    animate();
}

// Initialize all 3D scenes when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize main scenes
    if (window.THREE) {
        initHero3D();
        initAbout3D();
        
        // Service icons
        initService3D('service-3d-1', 0xC9A96E);
        initService3D('service-3d-2', 0xD4C4B0);
        initService3D('service-3d-3', 0xB8956A);
        
        // Project cards
        initProject3D('project-3d-1', 0xe8dcc8);
        initProject3D('project-3d-2', 0xf0ebe5);
        initProject3D('project-3d-3', 0xe8e4df);
        initProject3D('project-3d-4', 0xefebe6);
        initProject3D('project-3d-5', 0xe5e0db);
    }
});