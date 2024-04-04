const LangStore = () => {
  let isEnglish: boolean;

  const setLang = (lang: boolean) => {
    isEnglish = lang;
  };

  const getLang = () => {
    return isEnglish;
  };

  return { setLang, getLang };
};

export const langStore = LangStore();
