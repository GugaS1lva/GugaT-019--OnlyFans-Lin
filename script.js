// Modal functions
function openModal(imageId) {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    
    // Add animation
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'slideDown 0.3s ease';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Subscribe function
function subscribe() {
    alert('🎉 Obrigada pelo interesse!\n\nEste é um site fictício criado apenas para brincadeira.\n\nNenhuma transação real será processada! 😊');
}

// Select plan function
function selectPlan(planName) {
    alert(`✨ Você selecionou o plano ${planName}!\n\nLembrando: Este é apenas um site de demonstração.\nNenhum pagamento será processado! 💜`);
}

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect to gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Counter animation for stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 30);
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                if (text.includes('k')) {
                    const num = parseFloat(text) * 1000;
                    stat.textContent = '0';
                    setTimeout(() => {
                        animateCounter(stat, num);
                        setTimeout(() => {
                            stat.textContent = text;
                        }, 1500);
                    }, 100);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const profileCard = document.querySelector('.profile-card');
if (profileCard) {
    statsObserver.observe(profileCard);
}

// Add sparkle effect on button hover
document.querySelectorAll('.btn-subscribe, .btn-plan').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const sparkle = document.createElement('span');
        sparkle.textContent = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = 'sparkle 1s ease-out forwards';
        this.style.position = 'relative';
        this.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    });
});

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
        }
        100% {
            opacity: 0;
            transform: scale(2) rotate(180deg);
        }
    }
`;
document.head.appendChild(style);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        alert('🎮 Código Konami ativado! Você desbloqueou o modo arco-íris! 🌈');
        
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
    }
});

console.log('🧦 ExclusiveFans - Site da Lin carregado com sucesso!');
console.log('💜 Lembre-se: Este é um site fictício criado apenas para diversão!');

// Modal functions
function openModal(imageId) {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
    
    // Add animation
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'slideDown 0.3s ease';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

// Subscribe function
function subscribe() {
    alert('💕 Obrigada pelo interesse!\n\nVocê será redirecionado para a página de pagamento.\n\nAproveite o conteúdo exclusivo! 🔥');
}

// Select plan function
function selectPlan(planName) {
    alert(`✨ Você selecionou o plano ${planName}!\n\nVocê será redirecionado para finalizar sua assinatura.\n\nMal posso esperar para te mostrar tudo... 💋`);
}
// ... existing code ...
