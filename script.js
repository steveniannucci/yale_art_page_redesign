document.getElementById('toggle-quick-links').addEventListener('click', function() {
    var content = document.getElementById('quick-links-content');
    if (content.style.display === 'none') {
      content.style.display = 'block';
      this.textContent = 'Hide Links';
    } else {
      content.style.display = 'none';
      this.textContent = 'Show Links';
    }
  });