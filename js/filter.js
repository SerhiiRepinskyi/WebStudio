const refs = {
  buttonsFilter: document.querySelectorAll('.filters-list button'),
  projects: document.querySelectorAll('.grid-portfolio__item'),
};

refs.buttonsFilter.forEach(button => {
  button.addEventListener('click', () => {
    const btnCategory = button.dataset.category;

    refs.projects.forEach(project => {
      const projectCategory = project.dataset.category;
      if (btnCategory === 'all' || btnCategory === projectCategory) {
        return (project.style.display = 'block');
      }
      return (project.style.display = 'none');
    });
  });
});
