// Main JavaScript functionality for Alexander Anchikhorov's Portfolio
class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.initSkillsChart();
        this.initParticles();
        this.setupScrollAnimations();
    }

    setupEventListeners() {
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form validation
        const contactForm = document.querySelector('#contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', this.handleFormSubmit.bind(this));
        }

        // Timeline interactions
        this.setupTimelineInteractions();
        
        // Project filter interactions
        this.setupProjectFilters();
    }

    initAnimations() {
        // Typewriter effect for hero text
        if (typeof Typed !== 'undefined' && document.querySelector('.typed-text')) {
            new Typed('.typed-text', {
                strings: ['Full Stack Developer', 'Frontend Specialist', 'React Expert', 'UI/UX Enthusiast'],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }

        // Text splitting animations
        if (typeof Splitting !== 'undefined') {
            Splitting({ target: '.split-text', by: 'chars' });
            
            anime({
                targets: '.split-text .char',
                translateY: [100, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1400,
                delay: (el, i) => 30 * i
            });
        }
    }

    initSkillsChart() {
        const chartContainer = document.querySelector('#skills-chart');
        if (!chartContainer || typeof echarts === 'undefined') return;

        const chart = echarts.init(chartContainer);
        
        const skillsData = [
            { name: 'React', value: 90 },
            { name: 'Angular', value: 85 },
            { name: 'TypeScript', value: 88 },
            { name: 'JavaScript', value: 92 },
            { name: 'Node.js', value: 75 },
            { name: 'Python', value: 70 },
            { name: 'HTML/CSS', value: 95 },
            { name: 'UI/UX Design', value: 80 },
            { name: 'CI/CD', value: 78 },
            { name: 'Git', value: 85 }
        ];

        const option = {
            backgroundColor: 'transparent',
            radar: {
                indicator: skillsData.map(skill => ({
                    name: skill.name,
                    max: 100
                })),
                center: ['50%', '50%'],
                radius: '70%',
                axisLine: {
                    lineStyle: {
                        color: '#16A085',
                        width: 2
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#F39C12',
                        opacity: 0.3
                    }
                },
                axisLabel: {
                    color: '#2C3E50',
                    fontSize: 12,
                    fontFamily: 'Inter'
                }
            },
            series: [{
                type: 'radar',
                data: [{
                    value: skillsData.map(skill => skill.value),
                    name: 'Skills',
                    areaStyle: {
                        color: 'rgba(243, 156, 18, 0.2)'
                    },
                    lineStyle: {
                        color: '#F39C12',
                        width: 3
                    },
                    itemStyle: {
                        color: '#F39C12',
                        borderColor: '#2C3E50',
                        borderWidth: 2
                    }
                }]
            }]
        };

        chart.setOption(option);
        
        // Make chart responsive
        window.addEventListener('resize', () => {
            chart.resize();
        });

        // Add interactivity
        chart.on('click', (params) => {
            if (params.componentType === 'radar') {
                this.highlightSkill(params.name);
            }
        });
    }

    initParticles() {
        const canvas = document.querySelector('#particles-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            const particleCount = Math.min(50, Math.floor(window.innerWidth / 30));
            
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 3 + 1,
                    opacity: Math.random() * 0.5 + 0.2
                });
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(44, 62, 80, ${particle.opacity})`;
                ctx.fill();
            });
            
            // Draw connections
            particles.forEach((particle, i) => {
                particles.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = `rgba(22, 160, 133, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });
            
            animationId = requestAnimationFrame(animateParticles);
        };

        resizeCanvas();
        createParticles();
        animateParticles();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    setupTimelineInteractions() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        timelineItems.forEach(item => {
            const header = item.querySelector('.timeline-header');
            const content = item.querySelector('.timeline-content');
            
            if (header && content) {
                header.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other items
                    timelineItems.forEach(otherItem => {
                        otherItem.classList.remove('active');
                    });
                    
                    // Toggle current item
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter projects
                projectCards.forEach(card => {
                    const categories = card.dataset.categories.split(',');
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        card.style.display = 'block';
                        anime({
                            targets: card,
                            opacity: [0, 1],
                            scale: [0.8, 1],
                            duration: 500,
                            easing: 'easeOutQuart'
                        });
                    } else {
                        anime({
                            targets: card,
                            opacity: [1, 0],
                            scale: [1, 0.8],
                            duration: 300,
                            easing: 'easeInQuart',
                            complete: () => {
                                card.style.display = 'none';
                            }
                        });
                    }
                });
            });
        });
    }

    highlightSkill(skillName) {
        // Highlight skill in other sections
        const skillElements = document.querySelectorAll(`[data-skill="${skillName.toLowerCase()}"]`);
        
        skillElements.forEach(element => {
            element.classList.add('highlighted');
            
            setTimeout(() => {
                element.classList.remove('highlighted');
            }, 3000);
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!this.validateForm(data)) {
            this.showFormError('Please fill in all required fields correctly.');
            return;
        }
        
        // Simulate form submission
        this.showFormLoading();
        
        setTimeout(() => {
            this.showFormSuccess('Thank you for your message! I\'ll get back to you soon.');
            form.reset();
        }, 2000);
    }

    validateForm(data) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return data.name && 
               data.email && 
               emailRegex.test(data.email) && 
               data.message && 
               data.message.length > 10;
    }

    showFormLoading() {
        const submitBtn = document.querySelector('#submit-btn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
        }
    }

    showFormSuccess(message) {
        const submitBtn = document.querySelector('#submit-btn');
        const formMessage = document.querySelector('#form-message');
        
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
        
        if (formMessage) {
            formMessage.className = 'form-message success';
            formMessage.textContent = message;
            formMessage.style.display = 'block';
        }
    }

    showFormError(message) {
        const formMessage = document.querySelector('#form-message');
        const submitBtn = document.querySelector('#submit-btn');
        
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Send Message';
        }
        
        if (formMessage) {
            formMessage.className = 'form-message error';
            formMessage.textContent = message;
            formMessage.style.display = 'block';
        }
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Utility functions
const utils = {
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    throttle: (func, limit) => {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
};