import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets";
import {
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  User,
  X,
} from "lucide-react";
import { navClass } from "../styles/style";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { navLinks } from "@/data/navigation";
import { categories } from "@/data/categories";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "uz";
  });
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const { t, i18n } = useTranslation();

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const languages = [
    { code: "uz", flag: "uz", name: "Uzbek" },
    { code: "ru", flag: "ru", name: "Русский" },
    { code: "en", flag: "gb", name: "English" },
  ];

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLanguageOpen(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const iconButtonClass =
    "hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] cursor-pointer";

  return (
    <nav className="rounded-xl border border-[var(--color-surface)] bg-[var(--color-background)] shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${iconButtonClass} lg:hidden`}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>

            <img src={Logo} alt="nivela" className="w-38 h-auto" />
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.key === "categories" ? (
                <div key={link.path} className="relative">
                  <Button
                    variant="ghost"
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  >
                    {t(`nav.${link.key}`)}
                  </Button>

                  {isCategoriesOpen && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 z-50 border-[var(--color-surface)]
                  top-full  mt-4 w-56 rounded-xl border bg-[var(--color-background)] p-2 shadow-xl"
                    >
                      {categories.map((category) => (
                        <NavLink
                          onClick={() => setIsCategoriesOpen(false)}
                          key={category}
                          to={`/categories/${category.key}`}
                          className={`block rounded-lg px-4 py-2.5 text-sm hover:bg-[var(--color-surface)]
                      transition-colors hover:text-[var(--color-primary)]`}
                        >
                          {t(`categories.${category.key}`)}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  onClick={() => setIsCategoriesOpen(false)}
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `${navClass} ${isActive ? "after:scale-x-100 text-[var(--color-primary)]" : ""}`
                  }
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ),
            )}
          </div>
          <div className="flex items-center gap-[18px]">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={iconButtonClass}
              >
                <Search size={21} />
              </Button>

              {isSearchOpen && (
                <Input
                  type="text"
                  placeholder={t("search.placeholder")}
                  className="w-48"
                />
              )}
            </div>

            <Link to="/wishlist" className="hidden md:block">
              <Button variant="ghost" size="icon" className={iconButtonClass}>
                <Heart size={21} />
              </Button>
            </Link>

            <Link to="/cart">
              <div className="relative">
                <Button variant="ghost" size="icon" className={iconButtonClass}>
                  <ShoppingBag size={21} />
                </Button>
                <span
                  className="absolute -right-1 -top-0  h-4 min-w-4 flex items-center justify-center rounded-full
            bg-[var(--color-primary)] px-0 text-[10px] text-white"
                >
                  0
                </span>
              </div>
            </Link>

            <div className="relative hidden md:block">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className={iconButtonClass}
              >
                <span
                  className={`fi fi-${language === "en" ? "gb" : language}`}
                />
              </Button>

              {isLanguageOpen && (
                <div
                  className="absolute right-0 top-full z-50 mt-2 w-40 rounded-xl border
                border-[var(--color-surface)] bg-[var(--color-background)] p-2 shadow-xl"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-[var(--color-surface)]"
                    >
                      <span className={`fi fi-${lang.flag}`} />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`${iconButtonClass} hidden md:flex`}
            >
              {isDark ? <Sun size={21} /> : <Moon size={21} />}
            </Button>

            <Link to="/account" className="hidden md:block">
              <Button variant="ghost" size="icon" className={iconButtonClass}>
                <User size={21} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile section  */}

        {isMenuOpen && (
          <div className="flex flex-col lg:hidden mt-4 gap-1 border-t border-[var(--color-surface)] pt-4">
            {navLinks.map((link) =>
              link.key === "categories" ? (
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className="w-full justify-between"
                  >
                    {t(`nav.${link.key}`)}
                    <span>{isCategoriesOpen ? "-" : "+"}</span>
                  </Button>

                  {isCategoriesOpen && (
                    <div className="ml-4 flex flex-col gap-1 border-l border-[var(--color-surface)] pl-4">
                      {categories.map((category) => (
                        <NavLink
                          key={category}
                          to={`/categories/${category.key}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsCategoriesOpen(false);
                          }}
                          className={({ isActive }) =>
                            `rounded-lg px-3 py-2.5 text-sm transition-colors
  hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]
  ${isActive ? "bg-[var(--color-surface)] text-[var(--color-primary)]" : ""}`
                          }
                        >
                          {t(`categories.${category.key}`)}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`block rounded-lg py-4 text-sm hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]
                transition-colors`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsCategoriesOpen(false);
                  }}
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ),
            )}
            <div className="mt-4 border-t border-[var(--color-surface)] pt-4 md:hidden">
              <Link
                to={`/wishlist`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm
      hover:bg-[var(--color-surface)]
      hover:text-[var(--color-primary)]"
              >
                <Heart size={19} />
                {t("account.wishlist")}
              </Link>

              <Link
                to={`/account`}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm
    hover:bg-[var(--color-surface)]
    hover:text-[var(--color-primary)]"
              >
                <User size={19} />
                {t("account.profile")}
              </Link>

              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="w-full justify-start gap-3 "
              >
                {isDark ? <Sun size={19} /> : <Moon size={19} />}
              </Button>

              <div className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                  className="w-full justify-start gap-3"
                >
                  <span
                    className={`fi fi-${language === "en" ? "gb" : language}`}
                  />
                  {languages.find((lang) => lang.code === language)?.name}
                </Button>

                {isLanguageOpen && (
                  <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-[var(--color-surface)] pl-3">
                    {languages.map((lang) => (
                      <Button
                        key={lang.code}
                        variant="ghost"
                        onClick={() => changeLanguage(lang.code)}
                        className="justify-start gap-3"
                      >
                        <span className={`fi fi-${lang.flag}`} />
                        {lang.name}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
