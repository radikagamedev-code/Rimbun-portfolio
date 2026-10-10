const toggle = document.getElementById('language-toggle');
let language = 'en';
toggle?.addEventListener('click', () => {
  language = language === 'en' ? 'id' : 'en';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-en][data-id]').forEach((element) => {
    element.textContent = element.dataset[language];
  });
  toggle.setAttribute('aria-label', language === 'en' ? 'Switch to Bahasa Indonesia' : 'Switch to English');
  document.title = language === 'en' ? 'Ruang Rimbun — Bilingual Website Concept' : 'Ruang Rimbun — Contoh Situs Dua Bahasa';
});
