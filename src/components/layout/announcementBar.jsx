import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Leaf, RefreshCw, ShieldCheck, Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

const languages = [
  { code: "uz", flag: "uz", name: "Uzbek" },
  { code: "ru", flag: "ru", name: "Русский" },
  { code: "en", flag: "gb", name: "English" },
];

const AnnouncementBar = () => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "uz",
  );
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  const activeLanguage = languages.find((lang) => lang.code === language);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLanguageOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const iconButtonClass =
    "hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] cursor-pointer";

  return (
    <div className="hidden border-b border-[var(--color-surface)] bg-[var(--color-background)] sm:block">
      <div className="mx-auto flex w-full max-w-[1360px] items-center justify-between gap-4 px-4  sm:px-6 min-[1920px]:max-w-[1460px] min-[1800px]:px-8">
        {/* Service benefits */}
        <div className="flex min-w-0 flex-1 items-center justify-between gap-3 text-[10px] sm:gap-6 sm:text-xs">
          <div className="flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
            <Leaf size={15} className="shrink-0" />
            <span>{t("announcement.shipping")}</span>
          </div>

          <div className="flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
            <RefreshCw size={15} className="shrink-0" />
            <span>{t("announcement.returns")}</span>
          </div>

          <div className="flex items-center gap-1.5 whitespace-nowrap sm:gap-2">
            <ShieldCheck size={15} className="shrink-0" />
            <span>{t("announcement.payments")}</span>
          </div>
        </div>

        {/* Desktop language + theme */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLanguageOpen((prev) => !prev)}
              className={iconButtonClass}
              aria-label="Select language"
              aria-expanded={isLanguageOpen}
            >
              <span className={`fi fi-${activeLanguage?.flag ?? "uz"}`} />
            </Button>

            {isLanguageOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-40 rounded-xl border border-[var(--color-surface)] bg-[var(--color-background)] p-2 shadow-xl">
                {languages.map((lang) => (
                  <Button
                    key={lang.code}
                    variant="ghost"
                    onClick={() => changeLanguage(lang.code)}
                    className="w-full justify-start gap-3"
                  >
                    <span className={`fi fi-${lang.flag}`} />
                    <span>{lang.name}</span>
                  </Button>
                ))}
              </div>
            )}
          </div>

          <div className="mx-1 h-6 border-l border-[var(--color-surface)]" />

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={iconButtonClass}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <Sun size={21} /> : <Moon size={21} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
