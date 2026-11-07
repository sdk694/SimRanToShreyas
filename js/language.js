window.InvitationLanguage = {
  KEY: "ss_invitation_language",
  defaultLanguage: "en",

  getSavedLanguage: function () {
    try {
      return sessionStorage.getItem(this.KEY) || this.defaultLanguage;
    } catch (error) {
      return this.defaultLanguage;
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
