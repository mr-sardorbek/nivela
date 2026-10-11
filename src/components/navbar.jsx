
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Heart,
  Menu,
  Moon,
  Search,
  ShoppingBag,
  Sun,
  User,
  X,
  ChevronDown,
} from "lucide-react";
import { useTranslation } from "react-i18next";

import { Logo } from "../assets";
import { navClass } from "../styles/style";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { navLinks } from "@/data/navigation";
import { categories } from "@/data/categories";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "uz"
  );

  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  const { t, i18n } = useTranslation();
  const categoriesRef = useRef(null);

  const languages = [
    { code: "uz", flag: "uz", name: "O‘zbekcha" },
    { code: "ru", flag: "ru", name: "Русский" },
    { code: "en", flag: "gb", name: "English" },
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target)
      ) {
        setIsCategoriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;

      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");

      return next;
    });
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLanguageOpen(false);
  };

  const iconButtonClass =
    "h-12 w-12 cursor-pointer rounded-full hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]";

  const iconClass = "shrink-0";

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
    setIsLanguageOpen(false);
  };

  return (
    <nav className="w-full border-b border-[var(--color-surface)] bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Desktop Navbar */}
      <div className="mx-auto hidden w-full max-w-[1360px] px-4 py-2 sm:px-6 min-[1920px]:max-w-[1360px] min-[1920px]:px-8 lg:block">
        {/* Top row */}
        <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-5 xl:gap-7">
          {/* Logo + Categories */}
          <div className="flex items-center gap-5 xl:gap-7">
            <Link to="/" className="shrink-0 cursor-pointer">
              <img
                src={Logo}
                alt="Nivela"
                className="h-auto w-[155px] xl:w-[175px]"
              />
            </Link>

            <div className="relative" ref={categoriesRef}>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsCategoriesOpen((prev) => !prev)}
                aria-expanded={isCategoriesOpen}
                className="h-11 cursor-pointer gap-2 whitespace-nowrap rounded-md border-[var(--color-surface)] bg-[var(--color-background)] px-3 text-sm font-semibold text-[var(--color-foreground)]"
              >
                <Menu size={22} />
                {t("nav.categories")}
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {isCategoriesOpen && (
                <div className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-[var(--color-surface)] bg-[var(--color-background)] p-2 shadow-lg">
                  {categories.map((category) => (
                    <NavLink
                      key={category.key}
                      to={`/categories/${category.key}`}
                      onClick={() => setIsCategoriesOpen(false)}
                      className="block cursor-pointer rounded-md px-4 py-3 text-sm transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
                    >
                      {t(`categories.${category.key}`)}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search */}
          <form
            className="mx-auto flex h-11 w-full max-w-[660px] items-stretch"
            onSubmit={(event) => event.preventDefault()}
          >
            <Input
              type="search"
              placeholder={t("search.placeholder")}
              className="h-11 min-w-0 flex-1 rounded-l-md rounded-r-none border border-r-0 border-[var(--color-surface)] bg-[var(--color-background)] px-4 text-sm shadow-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[var(--color-primary)]"
            />

            <Button
              type="submit"
              aria-label={t("search.button")}
              className="h-11 w-14 shrink-0 cursor-pointer rounded-l-none rounded-r-md bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-[var(--color-primary-dark)]"
            >
              <Search size={25} strokeWidth={2.2} />
            </Button>
          </form>

          {/* Account, Wishlist, Cart — icons only */}
          <div className="flex shrink-0 items-center justify-end gap-2 xl:gap-3">
            

            <Link
              to="/wishlist"
              aria-label={t("account.wishlist")}
             
              className="cursor-pointer"
            >
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={iconButtonClass}
                aria-label={t("account.wishlist")}
              >
                <Heart size={32} strokeWidth={1.8} className={iconClass} />
              </Button>
            </Link>

            <Link
              to="/cart"
              aria-label={t("account.cart")}
             
              className="cursor-pointer"
            >
              <div className="relative">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={iconButtonClass}
                  aria-label={t("account.cart")}
                >
                  <ShoppingBag
                    size={32}
                    strokeWidth={1.8}
                    className={iconClass}
                  />
                </Button>

                <span className="pointer-events-none absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-primary)] px-1 text-[11px] font-semibold text-[var(--color-white)]">
                  0
                </span>
              </div>
            </Link>

            <Link
              to="/account"
              aria-label={t("account.profile")}
              
              className="cursor-pointer"
            >
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={iconButtonClass}
                aria-label={t("account.profile")}
              >
                <User size={32} strokeWidth={1.8} className={iconClass} />
              </Button>
            </Link>

          </div>
        </div>

        {/* Navigation — no divider */}
        <div className="flex min-h-8 items-center justify-center gap-6 pt-2 xl:gap-8">
          {navLinks
            .filter((link) => link.key !== "categories")
            .map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `${navClass} relative cursor-pointer whitespace-nowrap pb-[0.5] text-sm font-semibold transition-colors hover:text-[var(--color-primary)] ${
                    isActive
                      ? "text-[var(--color-primary)] after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full after:bg-[var(--color-primary)]"
                      : ""
                  }`
                }
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
        </div>
      </div>

      {/* Mobile and tablet Navbar */}
      <div className="mx-auto w-full max-w-[1260px] px-4 py-3 sm:px-6 min-[1800px]:max-w-[1360px] min-[1800px]:px-8 lg:hidden">
        {/* Main row */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className={iconButtonClass}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={27} strokeWidth={1.9} />
              ) : (
                <Menu size={27} strokeWidth={1.9} />
              )}
            </Button>

            <Link to="/" className="shrink-0 cursor-pointer">
              <img
                src={Logo}
                alt="Nivela"
                className="h-auto w-28 sm:w-32"
              />
            </Link>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className={iconButtonClass}
              aria-label={t("search.button")}
              aria-expanded={isSearchOpen}
            >
              <Search size={27} strokeWidth={1.9} />
            </Button>

            <Link
              to="/wishlist"
              className="hidden cursor-pointer sm:block"
              
            >
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className={iconButtonClass}
                
              >
                <Heart size={27} strokeWidth={1.9} />
              </Button>
            </Link>

            <Link to="/cart" className="cursor-pointer">
              <div className="relative">
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className={iconButtonClass}
                 
                >
                  <ShoppingBag size={27} strokeWidth={1.9} />
                </Button>

                <span className="pointer-events-none absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-primary)] px-1 text-[11px] font-semibold text-[var(--color-white)]">
                  0
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile search */}
        {isSearchOpen && (
          <form
            className="mt-3 flex h-11 w-full"
            onSubmit={(event) => event.preventDefault()}
          >
            <Input
              type="search"
              placeholder={t("search.placeholder")}
              className="h-11 min-w-0 flex-1 rounded-l-md rounded-r-none border-[var(--color-surface)] bg-[var(--color-background)] shadow-none focus-visible:ring-1 focus-visible:ring-[var(--color-primary)]"
            />

            <Button
              type="submit"
              aria-label={t("search.button")}
              className="h-11 cursor-pointer rounded-l-none rounded-r-md bg-[var(--color-primary)] text-[var(--color-white)] hover:bg-[var(--color-primary-dark)]"
            >
              <Search size={24} />
            </Button>
          </form>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-1 border-t border-[var(--color-surface)] pt-4">
            {/* Categories are always available in the mobile menu */}
            <div>
              <Button
                type="button"
                variant="ghost"
                onClick={() => setIsCategoriesOpen((prev) => !prev)}
                className="w-full cursor-pointer justify-between"
                aria-expanded={isCategoriesOpen}
              >
                {t("nav.categories")}
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    isCategoriesOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {isCategoriesOpen && (
                <div className="ml-4 flex flex-col gap-1 border-l border-[var(--color-surface)] pl-4">
                  {categories.map((category) => (
                    <NavLink
                      key={category.key}
                      to={`/categories/${category.key}`}
                      onClick={closeMobileMenu}
                      className="cursor-pointer rounded-lg px-3 py-2.5 text-sm hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
                    >
                      {t(`categories.${category.key}`)}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {navLinks
              .filter((link) => link.key !== "categories")
              .map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `block cursor-pointer rounded-lg px-3 py-3 text-sm hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] ${
                      isActive
                        ? "bg-[var(--color-surface)] text-[var(--color-primary)]"
                        : ""
                    }`
                  }
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ))}

            {/* Mobile account links */}
            <div className="mt-3 border-t border-[var(--color-surface)] pt-3">
              <Link
                to="/wishlist"
                onClick={closeMobileMenu}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-[var(--color-surface)] sm:hidden"
              >
                <Heart size={24} />
                
              </Link>

              <Link
                to="/account"
                onClick={closeMobileMenu}
                className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-[var(--color-surface)]"
              >
                <User size={24} />
                
              </Link>

              <Button
                type="button"
                variant="ghost"
                onClick={toggleTheme}
                className="w-full cursor-pointer justify-start gap-3"
              >
                {isDark ? <Sun size={23} /> : <Moon size={23} />}
              
              </Button>

              <div className="relative">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setIsLanguageOpen((prev) => !prev)}
                  className="w-full cursor-pointer justify-start gap-3"
                  aria-expanded={isLanguageOpen}
                >
                  <span
                    className={`fi fi-${language === "en" ? "gb" : language}`}
                  />
                  {languages.find((lang) => lang.code === language)?.name}
                  <ChevronDown
                    size={18}
                    className={`ml-auto transition-transform ${
                      isLanguageOpen ? "rotate-180" : ""
                    }`}
                  />
                </Button>

                {isLanguageOpen && (
                  <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-[var(--color-surface)] pl-3">
                    {languages.map((lang) => (
                      <Button
                        type="button"
                        key={lang.code}
                        variant="ghost"
                        onClick={() => changeLanguage(lang.code)}
                        className="cursor-pointer justify-start gap-3"
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
