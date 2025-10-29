// ========================================
// Mobile Navigation Toggle
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    mobileMenuToggle?.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a nav link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenuToggle?.classList.remove('active');
            navMenu?.classList.remove('active');
        }
    });
});

// ========================================
// Text Decryption Effect
// ========================================
class TextDecrypt {
    constructor(element) {
        this.element = element;
        this.originalText = element.getAttribute('data-value') || element.textContent;
        this.chars = '!<>-_\\/[]{}—=+*^?#________';
        this.iterations = 0;
    }

    decrypt() {
        let interval = null;
        const maxIterations = this.originalText.length;

        interval = setInterval(() => {
            this.element.textContent = this.originalText
                .split('')
                .map((char, index) => {
                    if (index < this.iterations) {
                        return this.originalText[index];
                    }
                    return this.chars[Math.floor(Math.random() * this.chars.length)];
                })
                .join('');

            if (this.iterations >= maxIterations) {
                clearInterval(interval);
            }

            this.iterations += 1 / 3;
        }, 60); // Increased from 30ms to 60ms for slower effect
    }
}

// Initialize decrypt effect on scroll
const initDecryptEffect = () => {
    const decryptElements = document.querySelectorAll('.decrypt');
    
    // Set initial text content to be visible
    decryptElements.forEach(el => {
        const originalText = el.getAttribute('data-value') || el.textContent;
        el.textContent = originalText;
    });
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('decrypted')) {
                const decryptor = new TextDecrypt(entry.target);
                decryptor.decrypt();
                entry.target.classList.add('decrypted');
            }
        });
    }, observerOptions);

    decryptElements.forEach(el => observer.observe(el));
};

// ========================================
// Smooth Scroll with Offset
// ========================================
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
};

// ========================================
// Navbar Background on Scroll
// ========================================
const initNavbarScroll = () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.9)';
            navbar.style.boxShadow = 'none';
        }
    });
};

// ========================================
// Active Navigation Link
// ========================================
const initActiveNavLink = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
};

// ========================================
// Scroll Reveal Animation
// ========================================
const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.project-card, .about-card, .contact-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
};

// ========================================
// Cursor Glow Effect - DISABLED for more authentic feel
// ========================================
const initCursorGlow = () => {
    // Disabled - removed for cleaner, more professional appearance
};

// ========================================
// Project Card Tilt Effect - Subtle version
// ========================================
const initCardTilt = () => {
    if (window.innerWidth < 768) return;

    const cards = document.querySelectorAll('.project-card, .contact-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Reduced tilt angles for more subtle effect
            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
};

// ========================================
// Typing Effect - Disabled (no code block)
// ========================================
const initCodeTypingEffect = () => {
    // Disabled - code block removed from hero
};

// ========================================
// Floating Animation - Disabled for cleaner feel
// ========================================
const initFloatingAnimation = () => {
    // Disabled for more professional, static appearance
};

// ========================================
// Parallax Effect - Disabled for cleaner experience
// ========================================
const initParallax = () => {
    // Disabled - keeping content static for better readability
};

// ========================================
// Copy Email to Clipboard
// ========================================
const initCopyEmail = () => {
    const emailCard = document.querySelector('.contact-card[href^="mailto"]');
    
    if (emailCard) {
        emailCard.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'arnodece@gmail.com';
            
            navigator.clipboard.writeText(email).then(() => {
                // Create temporary notification
                const notification = document.createElement('div');
                notification.textContent = 'Email copied to clipboard!';
                notification.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
                    color: white;
                    padding: 1rem 1.5rem;
                    border-radius: 0.5rem;
                    font-weight: 500;
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                `;
                
                document.body.appendChild(notification);
                
                setTimeout(() => {
                    notification.style.animation = 'slideOut 0.3s ease';
                    setTimeout(() => notification.remove(), 300);
                }, 2000);
            });
        });
    }
};

// Add slide animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
`;
document.head.appendChild(style);

// ========================================
// Initialize All Features
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initDecryptEffect();
    initSmoothScroll();
    initNavbarScroll();
    initActiveNavLink();
    initScrollReveal();
    initCursorGlow();
    initCardTilt();
    initCodeTypingEffect();
    initFloatingAnimation();
    initParallax();
    initCopyEmail();
});

// ========================================
// Performance Optimization
// ========================================
// Lazy load images if any are added
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// Preload fonts
if ('fonts' in document) {
    Promise.all([
        document.fonts.load('1rem Inter'),
        document.fonts.load('1rem JetBrains Mono'),
    ]).then(() => {
        document.body.classList.add('fonts-loaded');
    });
}
