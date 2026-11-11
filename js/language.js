window.InvitationLanguage = {
  KEY: "ss_invitation_language",
  defaultLanguage: "en",

  getSavedLanguage: function () {
    try {
      const savedLanguage = sessionStorage.getItem(this.KEY);
      return ["en", "hi", "mr"].includes(savedLanguage) ? savedLanguage : this.defaultLanguage;
    } catch (error) {
      return this.defaultLanguage;
    }
  },

  hasSavedLanguage: function () {
    try {
      return ["en", "hi", "mr"].includes(sessionStorage.getItem(this.KEY));
    } catch (error) {
      return false;
    }
  },

  setLanguage: function (language) {
    try {
      sessionStorage.setItem(this.KEY, language)
    } catch (error) {
      // no-op in privacy-restricted contexts
    }
  },

  getVariant: function () {
    const pathname = window.location.pathname.toLowerCase();
    if (pathname.includes('/day2/')) {
      return 'day2';
    }
    return 'day1-day2';
  }
};
