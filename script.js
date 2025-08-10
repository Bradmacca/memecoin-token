
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      document.querySelectorAll('.primary-btn, .secondary-btn, .buy-button, .mega-buy-button').forEach(button => {
        button.addEventListener('click', function() {
          for (let i = 0; i < 6; i++) {
            setTimeout(() => {
              const sparkle = document.createElement('div');
              sparkle.innerHTML = '✨';
              sparkle.style.cssText = 'position: fixed; pointer-events: none; font-size: 1.5rem; z-index: 9999; animation: sparkle 1s ease-out forwards; left: ' + Math.random() * window.innerWidth + 'px; top: ' + Math.random() * window.innerHeight + 'px;';
              document.body.appendChild(sparkle);
              setTimeout(() => sparkle.remove(), 1000);
            }, i * 100);
          }
          alert('🚀 Ready to buy? Connect your wallet and join the moon mission!');
        });
      });

      const style = document.createElement('style');
      style.textContent = '@keyframes sparkle { 0% { opacity: 1; transform: scale(0) rotate(0deg); } 100% { opacity: 0; transform: scale(1.5) rotate(180deg); } }';
      document.head.appendChild(style);

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('.feature-card, .tokenomics-card, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        observer.observe(el);
      });

      const fadeStyle = document.createElement('style');
      fadeStyle.textContent = '@keyframes fadeInUp { to { opacity: 1; transform: translateY(0); } }';
      document.head.appendChild(fadeStyle);

      console.log('🚀 Token website loaded and ready for moon mission!');
    