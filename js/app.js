document.addEventListener('DOMContentLoaded', function () {
  const variant = document.body.dataset.variant || window.InvitationLanguage.getVariant();
  const siteShell = document.getElementById('site-shell');
  const languageScreen = document.getElementById('language-screen');
  const allLangButtons = document.querySelectorAll('[data-lang]');
  const translate = function (language) {
    window.currentLanguage = language;
    document.documentElement.lang = language;
    const dictionary = window.translations[language] || window.translations.en;

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
      const key = element.dataset.i18n;
      if (dictionary[key]) {
        element.textContent = dictionary[key];
      }
    });

    document.querySelectorAll('[data-lang]').forEach(function (button) {
      const isSelected = button.dataset.lang === language;
      button.classList.toggle('is-active', button.classList.contains('switch-btn') && isSelected);
      button.setAttribute('aria-pressed', String(isSelected));
    });

    const saveDateDates = document.getElementById('save-date-dates');
    if (saveDateDates) {
      saveDateDates.textContent = variant === 'day2' ? dictionary.saveDateDatesDay2 : dictionary.saveDateDates;
    }

    const dayPanels = document.querySelectorAll('[data-variant-hidden]');
    dayPanels.forEach(function (panel) {
      const hiddenFor = panel.getAttribute('data-variant-hidden');
      panel.hidden = hiddenFor === variant;
    });

    if (variant === 'day2') {
      const day1Panel = document.querySelector('.day-panel--day1');
      if (day1Panel) {
        day1Panel.remove();
      }
    }

    renderEvents(variant, language);
    window.InvitationLanguage.setLanguage(language);
  };

  function renderEvents(currentVariant, language) {
    const eventSet = window.weddingEvents[currentVariant];
    if (!eventSet) {
      throw new Error('No wedding event configuration found for variant: ' + currentVariant);
    }
    const lists = [
      document.getElementById('day1-event-list'),
      document.getElementById('day2-event-list')
    ];

    lists.forEach(function (list) {
      if (!list) return;
      list.innerHTML = '';
    });

    const config = {
      day1: eventSet.day1 || [],
      day2: eventSet.day2 || []
    };

    Object.entries(config).forEach(function ([dayKey, items]) {
      const list = document.getElementById(dayKey + '-event-list');
      if (!list || !Array.isArray(items)) return;

      items.forEach(function (event) {
        const item = document.createElement('article');
        item.className = 'event-item reveal';
        const title = document.createElement('h4');
        title.textContent = window.translations[language][event.key] || event.key;
        item.appendChild(title);
        if (event.time) {
          const time = document.createElement('p');
          time.textContent = window.translations[language][event.time] || event.time;
          item.appendChild(time);
        }
        list.appendChild(item);
      });
    });

    if (window.initializeRevealAnimations) {
      window.initializeRevealAnimations();
    }
  }

  function showInvitation(language) {
    translate(language);
    if (languageScreen) {
      languageScreen.classList.add('is-hidden');
      languageScreen.setAttribute('aria-hidden', 'true');
    }
    if (siteShell) {
      siteShell.hidden = false;
      siteShell.classList.add('is-visible');
      siteShell.focus({ preventScroll: true });
    }
  }

  const savedLanguage = window.InvitationLanguage.getSavedLanguage();
  const languageToUse = savedLanguage || 'en';

  allLangButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const selectedLanguage = button.dataset.lang;
      if (selectedLanguage) {
        showInvitation(selectedLanguage);
      }
    });
  });

  if (window.InvitationLanguage.hasSavedLanguage()) {
    showInvitation(languageToUse);
  } else {
    translate(languageToUse);
    if (languageScreen) {
      languageScreen.classList.remove('is-hidden');
      languageScreen.setAttribute('aria-hidden', 'false');
    }
    if (siteShell) {
      siteShell.hidden = true;
    }
  }
});
