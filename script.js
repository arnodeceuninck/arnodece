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
        }, 30);
    }
}

// Initialize decrypt effect on scroll
const initDecryptEffect = () => {
    const decryptElements = document.querySelectorAll('.decrypt');
    
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
// Cursor Glow Effect (Desktop Only)
// ========================================
const initCursorGlow = () => {
    if (window.innerWidth < 768) return; // Skip on mobile

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(14, 165, 233, 0.08), transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: opacity 0.3s;
        opacity: 0;
    `;
    document.body.appendChild(glow);

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
        glow.style.opacity = '0';
    });

    // Smooth following animation
    const animateGlow = () => {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        glow.style.left = glowX + 'px';
        glow.style.top = glowY + 'px';
        
        requestAnimationFrame(animateGlow);
    };
    
    animateGlow();
};

// ========================================
// Project Card Tilt Effect (Desktop Only)
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

            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
};

// ========================================
// Typing Effect for Hero Code Block
// ========================================
const initCodeTypingEffect = () => {
    const codeLines = document.querySelectorAll('.code-line');
    let delay = 500;

    codeLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';
        line.style.opacity = '1';

        setTimeout(() => {
            let charIndex = 0;
            const typeInterval = setInterval(() => {
                if (charIndex < text.length) {
                    line.textContent += text[charIndex];
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 30);
        }, delay + (index * 200));
    });
};

// ========================================
// Floating Animation for Hero Visual
// ========================================
const initFloatingAnimation = () => {
    const codeAnimation = document.querySelector('.code-animation');
    
    if (codeAnimation) {
        let position = 0;
        const float = () => {
            position += 0.01;
            const y = Math.sin(position) * 10;
            codeAnimation.style.transform = `translateY(${y}px)`;
            requestAnimationFrame(float);
        };
        float();
    }
};

// ========================================
// Parallax Effect
// ========================================
const initParallax = () => {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-visual');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
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
