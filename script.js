// Animated background particles
document.addEventListener('DOMContentLoaded', function() {
    // Add floating particles
    createParticles();
    
    // Add click interaction to logo
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', celebrateClick);
        logo.style.cursor = 'pointer';
    }
});

function createParticles() {
    const background = document.querySelector('.background');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            pointer-events: none;
            animation: float ${Math.random() * 10 + 10}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
            z-index: 1;
            box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        `;
        background.appendChild(particle);
    }
    
    // Add CSS animation for particles
    if (!document.getElementById('particle-styles')) {
        const style = document.createElement('style');
        style.id = 'particle-styles';
        style.textContent = `
            @keyframes float {
                0%, 100% {
                    transform: translateY(0) translateX(0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                50% {
                    transform: translateY(-100px) translateX(50px);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

function celebrateClick() {
    const logo = document.querySelector('.logo');
    logo.style.transform = 'scale(1.1)';
    logo.style.transition = 'transform 0.3s ease';
    
    setTimeout(() => {
        logo.style.transform = 'scale(1)';
    }, 300);
    
    // Create burst effect
    createBurst();
}

function createBurst() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#ffffff'];
    const burstCount = 20;
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < burstCount; i++) {
        const burst = document.createElement('div');
        const angle = (Math.PI * 2 * i) / burstCount;
        const velocity = 150;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        burst.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: ${color};
            border-radius: 50%;
            left: ${centerX}px;
            top: ${centerY}px;
            pointer-events: none;
            z-index: 1000;
            box-shadow: 0 0 10px ${color};
        `;
        
        document.body.appendChild(burst);
        
        const xVel = Math.cos(angle) * velocity;
        const yVel = Math.sin(angle) * velocity;
        
        let x = 0, y = 0;
        let opacity = 1;
        
        const animate = () => {
            x += xVel / 10;
            y += yVel / 10;
            opacity -= 0.015;
            
            burst.style.transform = `translate(${x}px, ${y}px)`;
            burst.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                burst.remove();
            }
        };
        
        animate();
    }
}

// Console message
console.log('%c GAMAYIO.COM ', 'background: #000000; color: white; font-size: 20px; padding: 10px; border: 1px solid white;');
console.log('%c Coming Soon! ', 'background: #333333; color: white; font-size: 16px; padding: 5px;');
