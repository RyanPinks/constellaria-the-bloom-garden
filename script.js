<script>
  window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('lumen-container');
    const lumens = Array.from(container.children);
    const shuffled = lumens.sort(() => Math.random() - 0.5);
    container.innerHTML = '';
    shuffled.forEach(lumen => container.appendChild(lumen));
  });
</script>

const randomIndex = Math.floor(Math.random() * shuffled.length);
shuffled[randomIndex].scrollIntoView({ behavior: 'smooth' });
