document.addEventListener('DOMContentLoaded', function() {
  const animationContainer = document.querySelector('.background-animation');

  function createParticle() {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + 'vw';
      particle.style.top = Math.random() * 100 + 'vh';
      animationContainer.appendChild(particle);

      setTimeout(() => {
          particle.remove();
      }, 2000); // Ajusta el tiempo según sea necesario
  }

  setInterval(createParticle, 300); // Ajusta la frecuencia de creación de partículas
});
