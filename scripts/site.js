const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-nav');

if (menuButton && menu) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('is-open', !isOpen);
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      menuButton.focus();
    }
  });
}

const categoryButtons = [...document.querySelectorAll('[data-category-filter]')];
const yearButtons = [...document.querySelectorAll('[data-year-filter]')];
const filterCards = [...document.querySelectorAll('[data-filter-card]')];
const filterStatus = document.querySelector('.filter-status');

if (categoryButtons.length && yearButtons.length && filterCards.length) {
  let activeCategory = 'all';
  let activeYear = 'all';

  const applyFilters = () => {
    let visible = 0;
    filterCards.forEach((card) => {
      const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
      const matchesYear = activeYear === 'all' || card.dataset.year === activeYear;
      card.hidden = !(matchesCategory && matchesYear);
      if (matchesCategory && matchesYear) visible += 1;
    });

    categoryButtons.forEach((button) => {
      const active = button.dataset.categoryFilter === activeCategory;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    yearButtons.forEach((button) => {
      const active = button.dataset.yearFilter === activeYear;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });

    if (filterStatus) {
      filterStatus.textContent = `${visible} ${visible === 1 ? 'update' : 'updates'} shown`;
    }
  };

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.categoryFilter;
      applyFilters();
    });
  });

  yearButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeYear = button.dataset.yearFilter;
      applyFilters();
    });
  });

  applyFilters();
}
