document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  const sections = document.querySelectorAll('main section');

  // Función para mostrar la sección seleccionada y ocultar las demás
  function showSection(sectionId) {
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }

  // Evento para cambiar de sección cuando se selecciona una opción del menú
  menu.addEventListener('change', function() {
    const selectedSectionId = menu.value;
    showSection(selectedSectionId);
  });

  // Mostrar la primera sección por defecto al cargar la página
  showSection(sections[0].id);
});


